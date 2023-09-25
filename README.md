ToDo Web Application

This ToDo web application which includes MongoDB, Express.js, React, and Node.js. It allows users to create, manage, and organize their tasks efficiently.

#features

- User registration and authentication
- Create, update, and delete tasks
- Mark tasks as completed or pending
- Organize tasks by categories or due dates
- User-friendly interface
- Responsive design for mobile and desktop

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/charles1923/todoweb.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todoweb
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Create a `.env` file in the `server` directory and set the following environment variables:

   ```env
   DB_CONNECTION_STRING=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

6. Start the server:

   ```bash
   cd ../server
   npm start
   ```

7. Start the client:

   ```bash
   cd ../client
   npm start
   ```

8. Open your browser and visit `http://localhost:5173` to access the application.

## Usage

- Register or log in to your account.
- Create tasks by clicking the "Add Task" button.
- Delete tasks using the respective buttons.
- Mark tasks as completed or pending by clicking the checkbox.
- Organize tasks by adding due dates.

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Axios (for API requests)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT (for authentication)
- **Other Tools:**
  - Git and GitHub (for version control)
  - Postman (for API testing)

make sure to replace placeholders like `yourusername`, `your_mongodb_uri`, and `your_jwt_secret` with actual values related to your project and when you registered try the login to enter the taskpage.
