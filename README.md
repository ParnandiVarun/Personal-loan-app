# Personal Loan Application (Fullstack RBAC System)

## 📌 Project Overview

The **Personal Loan App** is a fullstack web application designed to handle **user management, authentication, role-based access control (RBAC), and loan management**.  
The main goal of this project is to allow **users** to register, apply for loans, and manage their profiles, while **admins** can manage users and loan applications via a protected dashboard.

This project demonstrates the integration of **frontend, backend, database, and authentication mechanisms** into a complete system.

---

## 🚀 Features

### 🔑 Authentication & Authorization

- **JWT-based Authentication** (`/register`, `/login`).
- **Role-Based Access Control (RBAC)** with roles:
  - `admin` → Full access to manage users and loan data.
  - `user` → Can register, log in, view profile, and apply for loans.

### 👤 User Features

- Register with name, email, password, and role.
- Secure password storage using **bcrypt**.
- Login and get an authentication token.
- View own profile (`/users/me`).
- Apply for loans (loan creation APIs integrated with backend).
- Update personal details (future enhancement).

### 🛠️ Admin Features

- View all registered users.
- Approve or reject loan applications.
- Manage user roles and access.

### 📊 Dashboard (Frontend)

- **Login Page** → Authenticate users with backend.
- **Register Page** → Store user data in MongoDB.
- **Dashboard**:
  - If `user` → Displays profile and loan status.
  - If `admin` → Displays all users and their loan requests.

---

## 🏗️ Tech Stack

### **Frontend**

- **HTML, CSS, JavaScript**
- Responsive Dashboard UI
- API integration with backend for Register/Login/User data

### **Backend**

- **Node.js + Express.js**
- REST API with CRUD operations
- Middleware-based RBAC (`authMiddleware`)

### **Database**

- **MongoDB Atlas**
- Mongoose ODM for schema and queries

### **Authentication**

- **JWT (JSON Web Token)** for authentication
- **bcrypt** for password hashing

---

## 📂 Project Structure
