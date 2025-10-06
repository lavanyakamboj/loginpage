const User = require("./userSchema");

const saveInfo = (req, res) => {
	const { username, email, password, contact } = req.body;
	const newUser = new User({
		username,
		email,
		password,
		contact,
	});

	newUser
		.save()
		.then(() => {
			res.status(200).json({ result: "User account saved successfully" });
		})
		.catch((error) => {
			res.status(409).json({ result: error.message });
		});
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ result: "Email and password are required" });
    }

    try {
        // Check if user exists with given email and password
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ result: "Login successful" });
        } else {
            res.status(401).json({ result: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ result: error.message });
    }
};


module.exports = { saveInfo,loginUser };
