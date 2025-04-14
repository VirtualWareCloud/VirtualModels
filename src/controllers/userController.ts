class UserController {
    async createUser(req, res) {
        try {
            const { fullName, email, profileImage, bio } = req.body;

            // Validate input
            if (!fullName || !email || !profileImage) {
                return res.status(400).json({ message: "All fields are required." });
            }

            // Create user object
            const user = {
                fullName,
                email,
                profileImage,
                bio
            };

            // Save user to the database
            const userModel = new UserModel();
            await userModel.saveUser(user);

            return res.status(201).json({ message: "User registered successfully." });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "An error occurred while registering the user." });
        }
    }
}

export default UserController;