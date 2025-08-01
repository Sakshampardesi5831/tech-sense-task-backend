import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const ContactManagementSchema = mongoose.model('contactManagement', contactSchema);

export default ContactManagementSchema;