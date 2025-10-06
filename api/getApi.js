const user = require("./userDetail");

const loginUser = (req, res) => {
    const email_id = req.params.email_id;  

    if (email_id) {
        user.find({ email_id: email_id })
            .then((data) => {
                res.status(200).json({ result: data });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message });
            });
    }
};

module.exports = {loginUser};
