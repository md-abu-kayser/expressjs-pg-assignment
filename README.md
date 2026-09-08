# 🚗 Vehicle Rental Management API - Enterprise-ready REST Backend

<!-- MIT License -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

<!-- Languages & Web Standards -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)

<!-- Infra & Runtime -->

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)

<!-- npm / auth / utility -->

[![bcrypt](https://img.shields.io/badge/bcrypt-3.0.0-lightgrey)](https://www.npmjs.com/package/bcrypt)
[![cors](https://img.shields.io/badge/cors-2.8.5-lightgrey)](https://www.npmjs.com/package/cors)
[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-8.5.1-lightgrey)](https://www.npmjs.com/package/jsonwebtoken)

<!-- security headers / http logger -->

[![helmet](https://img.shields.io/badge/helmet-npm-0F172A?logo=shield\&logoColor=white)](https://www.npmjs.com/package/helmet)
[![morgan](https://img.shields.io/badge/morgan-npm-FF6B6B?\&logoColor=white)](https://www.npmjs.com/package/morgan)

<!-- Zod validation -->

[![Zod](https://img.shields.io/badge/Validation-Zod-6C63FF?logo=typescript&logoColor=white)](https://zod.dev/)
[![zod on npm](https://img.shields.io/npm/v/zod?label=npm%20v&logo=npm&logoColor=white)](https://www.npmjs.com/package/zod)

<!-- Databases -->

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

<!-- Networking -->

[![dotenv](https://img.shields.io/badge/dotenv-464646?logo=dotenv&logoColor=white)](https://github.com/motdotla/dotenv)

---

A production-ready, enterprise-grade **Vehicle Rental Management REST API** built with Express.js, TypeScript, and PostgreSQL. Designed with modern architectural patterns, robust security, and comprehensive error handling.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Authentication & Authorization](#authentication--authorization)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This Vehicle Rental Management System API is a comprehensive backend solution designed to manage vehicle rentals, user accounts, bookings, and administrative operations. Built with enterprise-grade standards, it prioritizes security, scalability, and developer experience.

**Key Highlights:**

- ⚡ High-performance REST API with TypeScript
- 🔐 JWT-based authentication with role-based access control
- 📦 PostgreSQL database with optimized queries
- 🛡️ Advanced security features (Helmet, CORS, input validation)
- 📝 Zod schema validation for type-safe request handling
- 🔄 Automated booking expiration management
- ✨ Clean architecture with separation of concerns

---

## ✨ Features

### 🔐 Authentication & Authorization

- User registration and login with JWT tokens
- Role-based access control (User, Admin)
- Secure password hashing with bcrypt
- Protected routes with optional refresh mechanisms
- Token-based session management

### 👥 User Management

- User registration and profile management
- Admin dashboard access with user statistics
- User profile updates and deletion capabilities
- Granular permission-based access control

### 🚗 Vehicle Management

- Comprehensive vehicle inventory system
- Vehicle listing and detailed vehicle information
- Admin vehicle creation, updates, and deletion
- Support for multiple vehicle types and classes
- Real-time vehicle availability tracking

### 📅 Booking System

- Create and manage vehicle bookings
- Automated booking status tracking
- Rental duration calculation and pricing
- Automatic handling of expired bookings
- Return vehicle processing with condition tracking
- Booking history and analytics

### 🔄 Automated Processes

- Hourly automated process for expired bookings
- Graceful shutdown handling
- Real-time booking status updates

---

## 🛠 Tech Stack

| Layer              | Technology | Version |
| ------------------ | ---------- | ------- |
| **Runtime**        | Node.js    | 20+     |
| **Language**       | TypeScript | 5.9+    |
| **Framework**      | Express.js | 5.2.1   |
| **Database**       | PostgreSQL | Latest  |
| **Authentication** | JWT        | 9.0.3   |
| **Validation**     | Zod        | 4.1.13  |
| **Encryption**     | Bcrypt     | 6.0.0   |
| **Security**       | Helmet     | 8.1.0   |
| **Logging**        | Morgan     | 1.10.1  |
| **CORS**           | CORS       | 2.8.5   |
| **ORM/Driver**     | pg         | 8.16.3  |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────┐
│              Client Application                 │
└──────────────────┬──────────────────────────────┘
                   │ HTTP/HTTPS
┌──────────────────▼──────────────────────────────┐
│            Express.js API Server                │
├──────────────────────────────────────────────────┤
│  • Helmet (Security Headers)                     │
│  • CORS (Cross-Origin Resource Sharing)         │
│  • Morgan (HTTP Request Logging)                │
│  • Body Parser (JSON/URL-encoded)              │
└──────────────────┬──────────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
┌───▼────────┐ ┌──▼────────┐ ┌───▼──────────┐
│  Routes    │ │ Middleware │ │ Controllers  │
│ Handler    │ │ Pipeline   │ │ & Services   │
└───┬────────┘ └──┬────────┘ └───┬──────────┘
    │             │              │
    └─────────────┼──────────────┘
                  │
        ┌─────────▼──────────┐
        │ Validation Layer   │
        │ (Zod Schema)       │
        └─────────┬──────────┘
                  │
        ┌─────────▼────────────┐
        │ Business Logic Layer │
        │ (Services)           │
        └─────────┬────────────┘
                  │
    ┌─────────────▼──────────────┐
    │  PostgreSQL Database       │
    │  (Connection Pool)         │
    └────────────────────────────┘
```

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** (v12 or higher)
- **Git** version control system

### Step 1: Clone the Repository

```bash
git clone https://github.com/md-abu-kayser/vehicle-rental-api.git
```
```bash
cd vehicle-rental-api
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Create Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vehicle_rental_db
DB_USER=postgres
DB_PASSWORD=your_secure_password

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
JWT_EXPIRATION=24h

# Application
APP_NAME=Vehicle Rental API
APP_VERSION=1.0.0
```

### Step 4: Initialize Database

```bash
# Create PostgreSQL database
createdb vehicle_rental_db

# Run migration scripts (create tables)
psql -U postgres -d vehicle_rental_db -f schema.sql
```

### Step 5: Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# Server
PORT=5000
NODE_ENV=development|production

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vehicle_rental_db
DB_USER=postgres
DB_PASSWORD=your_very_secure_password_here

# JWT
JWT_SECRET=your_super_secret_key_with_at_least_32_characters
JWT_EXPIRATION=24h

# CORS
CORS_ORIGIN=*

# Logging
LOG_LEVEL=debug|info|warn|error
```

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Health Check

Check if the API is running:

```http
GET /health HTTP/1.1
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-10-15T10:30:45.123Z"
}
```

---

### 🔓 Authentication Endpoints

#### User Signup

Register a new user account.

```http
POST /api/v1/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "1234567890"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### User Login

Authenticate user and receive JWT token.

```http
POST /api/v1/auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 👥 User Endpoints

#### Get All Users (Admin Only)

Retrieve list of all registered users.

```http
GET /api/v1/users
Authorization: Bearer {JWT_TOKEN}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user",
      "createdAt": "2025-10-15T10:30:45.123Z"
    }
  ]
}
```

#### Update User

Update user profile information.

```http
PUT /api/v1/users/{userId}
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "0987654321"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "Jane",
    "lastName": "Smith"
  }
}
```

#### Delete User (Admin Only)

Remove user account and associated data.

```http
DELETE /api/v1/users/{userId}
Authorization: Bearer {JWT_TOKEN}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

### 🚗 Vehicle Endpoints

#### Get All Vehicles (Public)

Retrieve list of available vehicles.

```http
GET /api/v1/vehicles
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Vehicles fetched successfully",
  "data": [
    {
      "id": "uuid",
      "make": "Toyota",
      "model": "Camry",
      "year": 2024,
      "licensePlate": "ABC-123",
      "dailyRate": 50,
      "availability": true,
      "createdAt": "2025-10-15T10:30:45.123Z"
    }
  ]
}
```

#### Get Vehicle by ID (Public)

Retrieve detailed information about a specific vehicle.

```http
GET /api/v1/vehicles/{vehicleId}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Vehicle fetched successfully",
  "data": {
    "id": "uuid",
    "make": "Toyota",
    "model": "Camry",
    "year": 2024,
    "licensePlate": "ABC-123",
    "dailyRate": 50,
    "description": "Comfortable sedan for family travel",
    "availability": true,
    "createdAt": "2025-10-15T10:30:45.123Z"
  }
}
```

#### Create Vehicle (Admin Only)

Add a new vehicle to the inventory.

```http
POST /api/v1/vehicles
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json

{
  "make": "Honda",
  "model": "Accord",
  "year": 2024,
  "licensePlate": "XYZ-789",
  "dailyRate": 55,
  "description": "Premium sedan with leather interior"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Vehicle created successfully",
  "data": {
    "id": "uuid",
    "make": "Honda",
    "model": "Accord",
    "year": 2024,
    "licensePlate": "XYZ-789",
    "dailyRate": 55,
    "availability": true
  }
}
```

#### Update Vehicle (Admin Only)

Modify vehicle details.

```http
PUT /api/v1/vehicles/{vehicleId}
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json

{
  "dailyRate": 60,
  "availability": true
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Vehicle updated successfully",
  "data": {
    "id": "uuid",
    "make": "Honda",
    "model": "Accord",
    "dailyRate": 60
  }
}
```

#### Delete Vehicle (Admin Only)

Remove vehicle from inventory.

```http
DELETE /api/v1/vehicles/{vehicleId}
Authorization: Bearer {JWT_TOKEN}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Vehicle deleted successfully"
}
```

---

### 📅 Booking Endpoints

#### Create Booking (Authenticated Users)

Make a new vehicle reservation.

```http
POST /api/v1/bookings
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json

{
  "vehicleId": "uuid",
  "startDate": "2025-12-01T10:00:00Z",
  "endDate": "2025-12-05T10:00:00Z",
  "totalCost": 250.00
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Booking created successfully",
  "data": {
    "id": "uuid",
    "vehicleId": "uuid",
    "userId": "uuid",
    "startDate": "2025-12-01T10:00:00Z",
    "endDate": "2025-12-05T10:00:00Z",
    "status": "active",
    "totalCost": 250.0,
    "createdAt": "2025-10-15T10:30:45.123Z"
  }
}
```

#### Get All Bookings (Authenticated Users)

Retrieve user's booking history.

```http
GET /api/v1/bookings
Authorization: Bearer {JWT_TOKEN}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Bookings fetched successfully",
  "data": [
    {
      "id": "uuid",
      "vehicleId": "uuid",
      "startDate": "2025-12-01T10:00:00Z",
      "endDate": "2025-12-05T10:00:00Z",
      "status": "active",
      "totalCost": 250.0
    }
  ]
}
```

#### Update Booking (Authenticated Users)

Modify booking details or status.

```http
PUT /api/v1/bookings/{bookingId}
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json

{
  "status": "returned",
  "returnCondition": "good"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Booking updated successfully",
  "data": {
    "id": "uuid",
    "status": "returned",
    "returnCondition": "good",
    "returnedAt": "2025-12-05T10:30:45.123Z"
  }
}
```

---

## 🔐 Authentication & Authorization

### JWT Token Structure

Tokens are issued upon successful login/signup and must be included in the `Authorization` header for protected routes.

```
Authorization: Bearer {JWT_TOKEN}
```

### Roles & Permissions

| Role      | Permissions                                                       |
| --------- | ----------------------------------------------------------------- |
| **User**  | Create/view own bookings, update own profile                      |
| **Admin** | Full access to all endpoints, user management, vehicle management |

### Token Validation

- Tokens expire after **24 hours** by default
- All protected routes validate token authenticity
- Invalid or expired tokens return `401 Unauthorized`

---

## 📁 Project Structure

```
vehicle-rental-api/
├── src/
│   ├── app.ts                          # Express app setup & route configuration
│   ├── server.ts                       # Server startup & initialization
│   │
│   ├── config/
│   │   ├── db.ts                       # PostgreSQL connection & pool setup
│   │   └── index.ts                    # Application configuration
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts          # JWT authentication & authorization
│   │   └── validation.middleware.ts    # Zod schema validation
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts      # Authentication request handlers
│   │   │   ├── auth.route.ts           # Auth endpoints
│   │   │   ├── auth.service.ts         # Business logic for auth
│   │   │   └── auth.validation.ts      # Zod schemas for auth
│   │   │
│   │   ├── users/
│   │   │   ├── user.controller.ts      # User request handlers
│   │   │   ├── user.route.ts           # User endpoints
│   │   │   ├── user.service.ts         # User business logic
│   │   │   └── user.validation.ts      # User validation schemas
│   │   │
│   │   ├── vehicles/
│   │   │   ├── vehicle.controller.ts   # Vehicle request handlers
│   │   │   ├── vehicle.route.ts        # Vehicle endpoints
│   │   │   ├── vehicle.service.ts      # Vehicle business logic
│   │   │   └── vehicle.validation.ts   # Vehicle validation schemas
│   │   │
│   │   └── bookings/
│   │       ├── booking.controller.ts   # Booking request handlers
│   │       ├── booking.route.ts        # Booking endpoints
│   │       ├── booking.service.ts      # Booking business logic
│   │       └── booking.validation.ts   # Booking validation schemas
│   │
│   └── utils/
│       ├── apiResponse.ts              # Standardized API response formatter
│       └── errorHandler.ts             # Global error handling middleware
│
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript configuration
├── .env.example                        # Example environment variables
├── .gitignore                          # Git ignore rules
├── README.md                           # Project documentation
└── LICENSE                             # ISC License
```

---

## ✅ Best Practices Implemented

### 🏗 Architecture & Design Patterns

- ✅ **Layered Architecture**: Controllers → Services → Database
- ✅ **Separation of Concerns**: Clear responsibility boundaries
- ✅ **Dependency Injection**: Modular and testable code
- ✅ **Repository Pattern**: Database access abstraction

### 🔒 Security

- ✅ **Helmet.js**: Sets secure HTTP headers
- ✅ **CORS**: Configured for cross-origin requests
- ✅ **JWT Authentication**: Stateless session management
- ✅ **Password Hashing**: Bcrypt with salt rounds
- ✅ **Input Validation**: Zod for runtime schema validation
- ✅ **SQL Injection Prevention**: Parameterized queries via pg library
- ✅ **Rate Limiting Ready**: Architecture supports easy integration

### 📝 Code Quality

- ✅ **TypeScript**: Full type safety and compile-time checking
- ✅ **Error Handling**: Comprehensive global error handler
- ✅ **Consistent Response Format**: Standardized API responses
- ✅ **Request Logging**: Morgan HTTP request logging
- ✅ **Environment Variables**: Secure configuration management

### 🚀 Performance

- ✅ **Database Connection Pooling**: Efficient resource usage
- ✅ **Async/Await**: Non-blocking operations
- ✅ **Automated expired booking processing**: Hourly batch job

### 📚 Maintainability

- ✅ **Clear Naming Conventions**: Descriptive file and function names
- ✅ **Modular Structure**: Easy to find and modify code
- ✅ **Consistent Code Style**: Uniform formatting across files
- ✅ **Reusable Utilities**: Common functions centralized

---

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Run tests (configure as needed)
npm test

# Build for production
npm run build

# Start production server
npm start
```

### Development Workflow

1. **Create a feature branch** from `main`
2. **Implement features** following the project structure
3. **Add validation schemas** for new endpoints
4. **Write tests** for critical logic
5. **Submit pull request** with detailed description

### Code Style Guidelines

- Use **TypeScript** for all new code
- Follow **camelCase** for variables and functions
- Use **PascalCase** for classes and interfaces
- Add **JSDoc comments** for public methods
- **Keep functions small** and focused

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

### Getting Started

1. **Fork** the repository
2. **Clone** your forked repository
3. **Create** a new feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

### Development Process

1. Make your changes following code style guidelines
2. Test your changes thoroughly
3. Commit with clear, descriptive messages
   ```bash
   git commit -m "feat: add amazing new feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a **Pull Request** with detailed description

### Commit Message Format

```
<type>(<scope>): <subject>

<body>
```

**Types:** `feat` | `fix` | `docs` | `style` | `refactor` | `test` | `chore`

---

### 📄 License

- This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.
- The ISC License is a permissive license that is similar to the MIT License but with slightly clearer language.

---

### 📞 Support & Contact

**For issues, questions, or contributions, please:**

- **Open an Issue** on [GitHub Issues](https://github.com/md-abu-kayser/vehicle-rental-api/issues)
- **Check Existing Issues** before creating a new one
- **Provide Clear Details** when reporting bugs

---

## 🙏 Acknowledgments

- **Express.js** - Fast and minimalist web framework
- **PostgreSQL** - Reliable and powerful relational database
- **TypeScript** - Typed superset of JavaScript
- **Zod** - TypeScript-first schema validation
- **JWT** - Secure token-based authentication
- **Helmet** - Express.js security middleware

---

<div align="center">

**Made with ❤️ by [Md Abu Kayser](https://github.com/md-abu-kayser)**

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/md-abu-kayser)

</div>

---
