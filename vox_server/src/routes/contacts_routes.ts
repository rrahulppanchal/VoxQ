import { Router } from "express";
// import User from "../controllers/user";
import DataValidator from "../schema/middleware";
import { contactSchema, contactsSchema } from "../schema/auth_schema";
import Contact from "../controllers/contact";

class contactRouter {
  private router: Router;
  private contact: Contact;

  constructor() {
    this.router = Router();
    this.contact = new Contact();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/create-contacts",
      new DataValidator(contactsSchema).validateData,
      this.contact.createContacts.bind(this.contact)
    );

    this.router.get("/update-new", (req, res) => {
      res.json("dsvfs");
    });

    this.router.put(
      "/update-contact",
      new DataValidator(contactSchema).validateData,
      this.contact.updateContact.bind(this.contact)
    );

    this.router.delete(
      "/delete-contact/:id",
      this.contact.deleteContact.bind(this.contact)
    );

    this.router.get(
      "/get-contacts",
      this.contact.getContacts.bind(this.contact)
    );

    this.router.get(
      "/get-contact/:id",
      this.contact.getSingleContact.bind(this.contact)
    );
  }

  public getRouter() {
    return this.router;
  }
}

const contactsRouter = new contactRouter().getRouter();
export default contactsRouter;
