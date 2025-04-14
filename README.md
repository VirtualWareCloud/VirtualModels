# Model Registration Project

This project is a simple web application that allows users to register by submitting their profile information through a form. The application captures user data such as full name, email address, profile image, and a short bio, and stores it in a free database.

## Project Structure

```
model-registration-project
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers
│   │   └── userController.ts   # Handles user registration logic
│   ├── models
│   │   └── userModel.ts        # Defines user schema and database interactions
│   ├── routes
│   │   └── userRoutes.ts       # Sets up user-related routes
│   ├── config
│   │   └── database.ts         # Database connection configuration
│   └── types
│       └── index.ts            # Type definitions for user data
├── public
│   └── model-registration.html  # HTML form for user registration
├── package.json                # npm dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd model-registration-project
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Database**
   Update the `src/config/database.ts` file with your database connection details. You can use a free database service like MongoDB Atlas or Firebase.

4. **Run the Application**
   Start the application using:
   ```bash
   npm start
   ```

5. **Access the Registration Form**
   Open your browser and navigate to `http://localhost:3000/model-registration.html` to access the registration form.

## Usage

- Fill out the registration form with your details.
- Click the "Register" button to submit your information.
- The application will process the data and store it in the database.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.