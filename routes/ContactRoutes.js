const {
    GetContact,
    GetContacts,
    GetContactsByName,
    AddContact,
    DeleteContact,
    UpdateContact
  } = require("../controllers/ContactController");
  
  const express = require('express');
  const router = express.Router();
  
  router.get('/contacts', GetContacts);
  router.get('/contacts/data', GetContactsByName);
  router.get('/contacts/:id', GetContact);
  router.post('/contacts', AddContact);
  router.delete('/contacts/:id', DeleteContact);
  router.put('/contacts/:id', UpdateContact);
  
  
  module.exports = router;
  