# 🎵 Music App - Online Music Streaming Platform

Music App is a fullstack music streaming and management platform built with Node.js, Express.js, TypeScript, MongoDB, and Pug Template Engine.

The project supports music management, singer & topic management, authentication, authorization, favorite songs, search system, dashboard statistics, and cloud media uploads.

---

# 🌐 Live Demo

## Client Site

https://music-app-ts-tawny.vercel.app/

## Admin Dashboard

https://music-app-ts-tawny.vercel.app/admin/dashboard

---

# 🔑 Demo Account

## Admin Account

* Email: vuquanga@gmail.com
* Password: 1

## User Account

* Email: vuquanga@gmail.com
* Password: 1

---

# 📸 Screenshots

## Home Page

<img width="1906" height="1028" alt="image" src="https://github.com/user-attachments/assets/0852a3a1-ca9f-420a-b824-b0d6f4596f24" />

## Admin Dashboard

<img width="1902" height="1022" alt="image" src="https://github.com/user-attachments/assets/1262dcd2-d00c-46f4-b7f6-ec54798fcd5e" />


---

# 🚀 Features

## 👤 User & Account Management

* User registration & login
* Admin authentication system
* CRUD admin accounts
* CRUD user accounts
* Update personal profile
* Password & token management
* Role & permission management
* Soft delete users

---

## 🎼 Song Management

* CRUD songs
* Upload audio files
* Upload song thumbnails
* Song detail page
* Filter songs by singer
* Filter songs by topic
* Track listen count
* Track like count
* Lyrics support
* SEO-friendly slug URLs
* Draft / Published status
* Soft delete songs

---

## 🎤 Singer Management

* CRUD singers
* Upload singer avatars
* Display songs by singer

---

## 🏷️ Topic Management

* CRUD topics
* Upload topic thumbnails
* SEO-friendly slug URLs
* Topic status management

---

## ❤️ Favorite Songs

* Add / remove favorite songs
* Personal favorite playlist
* Favorite song counting system

---

## 🔍 Search System

* Search songs
* Search pagination
* Vietnamese keyword support using Unidecode

---

## 🛡️ Authentication & Security

* Authentication for client & admin
* Authorization with role permissions
* Session-based authentication
* Forgot password & reset token
* Password hashing with MD5

---

## 📧 Email System

* Send notification emails
* Gmail SMTP integration
* Forgot password via email

---

## 📊 Dashboard & Settings

* Admin dashboard statistics
* General system settings
* Admin page settings

---

## 📤 Upload System

* Cloudinary media upload
* Upload avatars
* Upload audio files
* Upload images

---

# ✨ Technical Highlights

* MVC Architecture
* RESTful Routing Structure
* Role-Based Access Control (RBAC)
* Authentication & Authorization
* Session-based Authentication
* Middleware Pattern
* Cloud Media Upload
* SEO-friendly Slug System
* Vietnamese Search Optimization
* Server-Side Rendering (SSR)
* MongoDB Relationship Modeling

---

# 🏗️ Architecture

```text
Client Browser
      ↓
Express.js + TypeScript Server
      ↓
Controllers → MongoDB
      ↓
Pug Template Rendering
```

---

# 🔄 System Workflow

## Song Upload Flow

1. Admin uploads audio & thumbnail
2. Multer processes files
3. Cloudinary stores media files
4. MongoDB stores song metadata
5. Songs render to client pages

## Authentication Flow

1. User submits login form
2. Server validates credentials
3. Session & cookies are generated
4. Middleware protects private routes
5. Authorization checks user permissions

---

# 🧱 Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose

## Frontend

* Pug Template Engine
* HTML
* CSS
* JavaScript

## Authentication & Security

* express-session
* cookie-parser
* md5

## File Upload & Cloud Storage

* Multer
* Cloudinary
* Streamifier

## Utilities

* dotenv
* method-override
* express-flash
* body-parser
* nodemailer
* unidecode

## Development Tools

* nodemon
* TypeScript
* ts-node

## Deployment

* Vercel

---

# 📁 Database Schema

* Songs
* Users
* Accounts
* Singers
* Topics
* Roles
* FavoriteSongs
* ForgotPasswords
* SettingsGeneral

---

# 📁 Project Structure

```bash
music-app/
│
├── config/
├── controllers/
├── helpers/
├── middlewares/
├── models/
├── public/
├── routes/
├── validates/
├── views/
│
├── .env
├── index.ts
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=3000

# Database
MONGO_URL=your_mongodb_connection_string

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password
```

> Example values only. Do not use real production credentials.

---

# ▶️ Installation

Clone repository:

```bash
git clone https://github.com/your-username/music-app.git
```

Move to project directory:

```bash
cd music-app
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run Project

Run development server:

```bash
npm run dev
```

Run production server:

```bash
npm start
```

---

# 👨‍💻 Author

* Name: Vu Quang Huy
* Project: Music App
* Year: 2026
