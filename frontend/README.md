# MyNotebook

MyNotebook is a full-stack web application designed to help users efficiently create, organize, and manage their personal notes. The application includes features like note creation, editing, and deletion, and leverages modern web technologies for both the frontend and backend.

---

## Features

### Frontend:
- 📝 **Add Notes**: Users can add new notes by providing a title, description, and optional tag.
- 📋 **View Notes**: Notes are displayed in a responsive grid layout.
- ✏️ **Edit Notes**: Functionality to modify the content of an existing note.
- ❌ **Delete Notes**: Users can remove notes they no longer need.
- 🔍 **Search Bar**: A search bar is included in the navigation bar.
- 🧭 **Navigation**: Provides seamless navigation between "Home" and "About" pages.
- ⚠️ **Alert System**: Displays alert messages for user feedback.
- 🌐 **Responsive UI**: The app is styled with Bootstrap for a modern and responsive design.

### Backend:
- **Authentication**:
  - User registration, login, and authentication using JSON Web Tokens (JWT).
  - Middleware (`fetchuser`) ensures secure access to user-specific routes.
- **Notes Management**:
  - Secure API routes for creating, reading, updating, and deleting notes.
  - Notes are associated with individual users, ensuring data privacy.
- **Database**:
  - MongoDB is used as the database, with schemas for users and notes.

---

## Technologies Used

### Frontend:
- **React (via Create React App)**: For building the user interface.
- **Bootstrap CSS**: For responsive and modern UI design.
- **React Router**: For navigation between pages.
- **React Context API**: For managing global state.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For handling RESTful API routes and middleware.
- **MongoDB**: For database storage.
- **Mongoose**: For object modeling and schema validation.

---

## React Hooks Used

1. **`useState`**:
   - Manages local state, such as the list of notes and their updates.
   - Example: Used in `NoteState.js` to manage adding, editing, and deleting notes.

2. **`useContext`**:
   - Provides access to `noteContext`, enabling global state management.
   - Example: Used in `Notes.js` to fetch and display the list of notes.

3. **`useEffect`**:
   - Tracks changes in the user's location path for dynamic page updates.
   - Example: Used in `Navbar.js` to react to location changes.

---

## API Endpoints

### Authentication:
- **POST** `/api/auth`: Register a new user.
- **POST** `/api/auth/login`: Login and receive a JWT.
- **GET** `/api/auth/getuser`: Get user details using the JWT.

### Notes:
- **GET** `/api/notes/fetchallnotes`: Fetch all notes for the logged-in user.
- **POST** `/api/notes/addnote`: Add a new note.
- **PUT** `/api/notes/updatenote/:id`: Update an existing note.
- **DELETE** `/api/notes/deletenote/:id`: Delete a note.

---

## Backend Architecture

The backend is implemented using **Node.js** and **Express.js**, with **MongoDB** as the database. It is designed to provide a secure and efficient API for user authentication and note management.

### Key Backend Components:

1. **Database Connection**:
   - MongoDB is connected using Mongoose.
   - Connection parameters are configured in the `db.js` file.
   - The database URL is set as `mongodb://localhost:27017/mynotebook`.

2. **Authentication**:
   - JWT is used for secure user authentication.
   - Passwords are hashed using `bcryptjs`.
   - Middleware (`fetchuser`) validates JWTs and ensures only authenticated users can access protected routes.

3. **Notes Management**:
   - The `Notes` schema includes fields for the title, description, tag, and user association.
   - CRUD operations are implemented in the `notes.js` route file, with proper error handling and validation.

4. **Error Handling**:
   - All routes include try-catch blocks to handle errors gracefully.

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or in the cloud.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/froster02/mynotebook.git
   cd mynotebook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the backend:
   - Navigate to the `backend` folder.
   - Create a `.env` file and add your MongoDB URI and JWT secret:
     ```
     MONGO_URI=mongodb://localhost:27017/mynotebook
     JWT_SECRET=your_jwt_secret
     ```

4. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```

5. Start the frontend development server:
   ```bash
   cd ..
   npm start
   ```

   Access the app at [http://localhost:3000](http://localhost:3000).

---

## Scripts

### Frontend:
- `npm start`: Runs the frontend app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the frontend for production.

### Backend:
- `node index.js`: Starts the backend server.

---

## License

This project is currently not licensed. Add a license if needed.

---

## Contact

For questions or feedback, feel free to reach out:

- GitHub: [froster02](https://github.com/froster02)

---

Made with ❤️ by froster02.
