import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import ResponseHandler from "../../utils/shared";

class Contact {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createContacts(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await this.prisma.tbl_contacts.createMany({
        data: data,
      });

      const response = new ResponseHandler(result, "Contacts inserted", 200);
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(
        null,
        "Error inserting contacts",
        400
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateContact(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await this.prisma.tbl_contacts.update({
        where: {
          id: data.id,
        },
        data: {
          ...data,
          updated_at: new Date(),
        },
      });
      const response = new ResponseHandler(
        result,
        "Contact updated successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(
        null,
        "Error updating contacts",
        400
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async deleteContact(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await this.prisma.tbl_contacts.update({
        where: {
          id: Number(id),
        },
        data: {
          is_deleted: true,
        },
      });

      const response = new ResponseHandler(
        null,
        "Contact deleted successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(
        null,
        "Error deleting contacts",
        400
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async getContact(req: Request, res: Response) {
    try {
      const contacts = await this.prisma.tbl_contacts.findMany({
        where: { is_deleted: false },
      });
      const response = new ResponseHandler(contacts, "Success", 200);
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to get data", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async getSingleContact(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contacts = await this.prisma.tbl_contacts.findUnique({
        where: { id: Number(id), is_deleted: false },
      });

      let response = new ResponseHandler(null, "No contact found", 400);

      if (contacts) {
        response = new ResponseHandler(contacts, "Success", 200);
      }
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to get data", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async getContacts(req: Request, res: Response) {
    try {
      const {
        search = "",
        page = "1",
        limit = "10",
        contact = false,
        status,
        date,
        sortBy,
      } = req.body;
      const pageNumber = parseInt(page, 10);
      const pageSize = parseInt(limit, 10);

      const numericSearch = !isNaN(Number(search)) ? Number(search) : null;

      const where: any = {
        is_deleted: false,
        qualified: contact,
        OR: [
          ...["first_name", "last_name", "email", "phone"].map((field) => ({
            [field]: { contains: search, mode: "insensitive" },
          })),
          {
            address: {
              OR: [
                { country: { contains: search, mode: "insensitive" } },
                ...(numericSearch !== null ? [{ pincode: numericSearch }] : []),
                { city: { contains: search, mode: "insensitive" } },
                { state: { contains: search, mode: "insensitive" } },
                { street: { contains: search, mode: "insensitive" } },
                { other: { contains: search, mode: "insensitive" } },
              ],
            },
          },
        ],
      };

      const statusMap: any = {
        active: 1,
        inActive: 2,
        followUp: 3,
        noAction: 4,
        verified: 5,
        unVerified: 6,
      };

      const statusConditions = Object.entries(status)
        .filter(([_, value]) => value)
        .map(([key, _]) => statusMap[key]);

      if (statusConditions.length) where.status = { in: statusConditions };

      const dateRanges: any = {
        lastYear: 365,
        lastMonth: 30,
        lastWeek: 7,
        lastDay: 1,
        lastHour: 1 / 24,
      };

      // date object must be in descending order
      const selectedDateRange = Object.entries(date).find(
        ([key, value]) => value && dateRanges[key]
      )?.[0];

      if (selectedDateRange) {
        where.updated_at = {
          gte: new Date(
            Date.now() - dateRanges[selectedDateRange] * 24 * 60 * 60 * 1000
          ),
        };
      }

      if (sortBy.recentlyUpdated) {
        const recentlyUpdatedVal = 1 / 24;
        where.updated_at = {
          gte: new Date(Date.now() - recentlyUpdatedVal * 24 * 60 * 60 * 1000),
        };
      }

      if (sortBy.fresh) {
        const freshVal = 7;
        where.created_at = {
          gte: new Date(Date.now() - freshVal * 24 * 60 * 60 * 1000),
        };
      }

      if (sortBy.actionRequiured) {
        const actionReqVal = 3;
        where.updated_at = {
          gte: new Date(Date.now() - actionReqVal * 24 * 60 * 60 * 1000),
        };
        where.qualified = true;
      }

      if (sortBy.inQueue) {
        const queueReqVal = 1;
        where.updated_at = {
          gte: new Date(Date.now() - queueReqVal * 24 * 60 * 60 * 1000),
        };
      }

      const [totalCount, contacts] = await Promise.all([
        this.prisma.tbl_contacts.count({ where }),
        this.prisma.tbl_contacts.findMany({
          where,
          include: {
            address: true,
          },
          skip: (pageNumber - 1) * pageSize,
          take: pageSize,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / pageSize);

      const response = new ResponseHandler(
        {
          contacts,
          meta: { totalCount, totalPages, currentPage: pageNumber },
        },
        "Success",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      console.error(error);
      const response = new ResponseHandler(null, "Failed to get data", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default Contact;
