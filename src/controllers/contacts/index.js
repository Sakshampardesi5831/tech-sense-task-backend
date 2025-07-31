import { internalServerError, success } from "../../helpers";
import ContactManagementSchema from "../../models/schema/contactManagementSchema";
export const saveContacts = async (request, response) => {
  try {
    const { name, email, phone, message } = request.body;
    console.log(name, email, phone, message);
    const newContact = new ContactManagementSchema({
      name: name,
      email: email,
      phoneNumber: phone,
      message: message,
    });
    const newUser = await newContact.save();
    return success(request, response, {
      message: "Contact saved successfully",
      data: newUser,
    });
  } catch (error) {
    return internalServerError(request, response, error, error.message);
  }
};

export const listContact = async (request, response) => {
  try {
    const contacts = await ContactManagementSchema.find();
    return success(request, response, {
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    return internalServerError(request, response, error, error.message);
  }
};
export const updateContact = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, phone, message } = request.body;
    const updatedContact = await ContactManagementSchema.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        phoneNumber: phone,
        message: message,
      },
      { new: true }
    );
    return success(request, response, {
      message: "Contact updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    return internalServerError(request, response, error, error.message);
  }
};

export const deleteContact = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedContact = await ContactManagementSchema.findByIdAndDelete(id);
    return success(request, response, {
      message: "Contact deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    return internalServerError(request, response, error, error.message);
  }
};

export const contactListById = async (request,response)=>{
    try {
          const { id } = request.params;
          const contact = await ContactManagementSchema.findById(id);
          return success(request, response, {
            message: "Contact fetched successfully",
            data: contact,
          });
    } catch (error) {
        return internalServerError(request, response, error, error.message);
    }
}