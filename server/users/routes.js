const router = require("express").Router();
const { getAllUsers, addUser } = require("./controller");
const { checkBody } = require("./middleware");


router
    .route("/")
    .get(getAllUsers)
    .post(checkBody(), addUser);

module.exports = router;
