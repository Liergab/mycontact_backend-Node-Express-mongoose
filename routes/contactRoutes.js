const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes.js")
const {
      retrieveContact,
      getAllContact,
      getContactbyId,
      createContact,
      updateContactbyId,
      deleteContactbyId} = require("../controllers/contactController")

router.get("/api/v3/contacts", getAllContact);
router.get("/api/v3/contacts/Display", retrieveContact)

router.get("/api/v3/contacts/:id", getContactbyId);

router.post("/api/v3/contacts",createContact);

router.put("/api/v3/contacts/:id", updateContactbyId);

router.delete("/api/v3/contacts/:id", deleteContactbyId)

 
router.use("/api/v3/user",userRoutes);

router.all("/*",(req, res) => {
    res.send("Error 404")
});

module.exports = router