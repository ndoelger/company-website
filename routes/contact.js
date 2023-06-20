var express = require("express");
var router = express.Router();
const contactsCtrl = require("../controllers/contacts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("contact", { contacts: contactsCtrl.index(), title: "Contact" });
});

module.exports = router;
