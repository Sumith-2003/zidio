# Task Manager - Task Management System

Task Manager is a powerful yet simple task management web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It features **role-based authentication**, enabling seamless task assignment and management.

---
## 🚀 Features
### 🔹 **Admin Panel**
- Create, assign, update, and delete tasks.
- View and manage all tasks.
- Oversee and manage user accounts.

### 🔹 **User Dashboard**
- View assigned tasks.
- Mark tasks as completed.

---
## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB

---
## 🔧 Installation & Setup

### Prerequisites
- Ensure **Node.js** and **npm** are installed.
- MongoDB should be running locally or via a cloud instance.

### 📌 Backend Setup
```bash
cd bserver
npm install
```

#### 🔑 Configure Environment Variables
Create a `.env` file inside the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### ▶ Start the Backend Server
```bash
npm start
```

### 🎨 Frontend Setup
```bash
cd client
npm install
npm start
```

---
## 📡 API Endpoints

### 🔑 Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate and receive a JWT token.

### 👥 User Management
- `GET /api/users` - Retrieve all users (**Admin only**).

### 📌 Task Management
- `POST /api/tasks` - Create a new task (**Admin only**).
- `GET /api/tasks` - Retrieve all tasks (**Admin only**).
- `GET /api/tasks/:userId` - Retrieve tasks assigned to a specific user.
- `PUT /api/tasks/:id` - Update task details.
- `DELETE /api/tasks/:id` - Delete a task (**Admin only**).

---
## 🎯 How It Works
1. **Sign up** as an Admin or a User.
2. **Admins** assign tasks to users.
3. **Users** can track and mark tasks as completed.
4. **Admins** manage all tasks and user activities.

---
🚀 **Task Manager simplifies task management, making collaboration easy and efficient!**

