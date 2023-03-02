const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createNewContact);

router.put('/:id', contactsController.updateExistingContact);

router.delete('/:id', contactsController.deleteSomeContact);

module.exports = router;
