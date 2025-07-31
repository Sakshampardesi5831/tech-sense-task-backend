
import {saveContacts,listContact,deleteContact,updateContact} from "../../controllers/contacts"

export const contactManagementRouter = (app) => {
  app.post("/contacts",saveContacts);
  app.get("/contacts", listContact);
  app.delete("/contacts/:id", deleteContact);
  app.put("/contacts/:id", updateContact);
  app.get("/contacts/:id", listContact);
};
