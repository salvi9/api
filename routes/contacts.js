const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post("/", contactsController.postContact);

router.put("/:id", contactsController.putContact);

router.delete("/:id", contactsController.deleteContact);

module.exports = router;
