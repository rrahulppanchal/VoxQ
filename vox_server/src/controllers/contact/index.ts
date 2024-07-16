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
        page = 1,
        limit = 10,
        search = "",
        verified = 3,
        status = 0,
      } = req.query;

      const searchQuery = search.toString();
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSize = parseInt(limit as string, 10) || 10;

      const where: any = {
        is_deleted: false,
        OR: [
          { first_name: { contains: searchQuery, mode: "insensitive" } },
          { last_name: { contains: searchQuery, mode: "insensitive" } },
          { email: { contains: searchQuery, mode: "insensitive" } },
          { phone: { contains: searchQuery, mode: "insensitive" } },
        ],
      };

      if (+verified == 0) {
        where.is_verified = false;
      }
      if (+verified == 1) {
        where.is_verified = true;
      }

      if (status != 0) {
        where.status = Number(status);
      }

      const totalCount = await this.prisma.tbl_contacts.count({
        where,
      });

      const contacts = await this.prisma.tbl_contacts.findMany({
        where,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
      });

      const totalPages = Math.ceil(totalCount / pageSize);

      const response = new ResponseHandler(
        {
          contacts,
          meta: {
            totalCount,
            totalPages,
            currentPage: pageNumber,
          },
        },
        "Success",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to get data", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default Contact;
