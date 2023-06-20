const Contacts = require("../models/contacts");

module.exports = {
  index,
};

function index() {
  return Contacts.getAll();
}
