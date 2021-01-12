// * relays any internal errors during requests
exports.handleError = () => (error, req, res, next) => {
    console.log("INTERNAL", error);
    res.status(500).json({ message: "Something went wrong" });
};

// * checks that the client side sends all the required fields
exports.checkBody = () => (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Please include name and email field" });
    }

    next();
};
