const express = require("express");
const router = express.Router();
const mainController= require("../controllers/mainController"); 

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/register", mainController.register);


//agrego esta ruta
//router.get('/search', mainController.search); 



module.exports = router;