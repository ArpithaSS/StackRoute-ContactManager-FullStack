const Contact = require("../models/Contact");

const GetContacts = async (req, res) => {
  let contacts = await Contact.find({});
  res.send(contacts);
};

const GetContact = async (req, res) => {
  let contact = await Contact.findOne({ id: req.params.id });
  res.send(contact);
};

const GetContactsByName = async(req, res)=>{
    let contacts = await Contact.find({fname: req.query.fname});
    res.send(contacts);
}

const AddContact = async (req, res) => {
  let contact = new Contact({
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  await contact.save();
  res.send({ status: 201, message: "Contact added successfully" });
};

const DeleteContact = async (req, res) => {
  await Contact.deleteOne({ id: req.params.id });
  res.send({ status: 200, message: "Contact deleted successfully" });
};

const UpdateContact = async (req, res) => {
  await Contact.updateOne(
    { id: req.params.id },
    {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    }
  );
  res.send({ status: 200, message: "Contact updated successfully" });
};

module.exports = { GetContacts, GetContact, GetContactsByName, AddContact, DeleteContact, UpdateContact };
