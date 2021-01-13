const router = require("express").Router();
const { getAllUsers, addUser, addTestUser } = require("./controller");
const { checkBody } = require("./middleware");

router
    .route("/test")
    .post(checkBody(), addTestUser);

router
    .route("/")
    .get(getAllUsers)
    .post(checkBody(), addUser);

module.exports = router;
