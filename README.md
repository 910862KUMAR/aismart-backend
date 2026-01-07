# 🚀 AISmart Backend – Spring Boot + JWT + Docker

A production-ready **Spring Boot backend application** implementing **JWT authentication**, **role-based authorization**, **REST APIs**, **Docker containerization**, and **cloud deployment on Render**.  
All APIs are tested using **Postman** and designed following backend best practices.

---

## 🧩 Tech Stack

- Java 17  
- Spring Boot  
- Spring Security (JWT)  
- Spring Data JPA  
- H2 / MySQL (configurable)  
- Docker  
- Postman  
- Render (Cloud Deployment)

---

## ✨ Features

- User Authentication & Authorization using JWT  
- Role-based access control (USER, ADMIN)  
- Secure REST APIs  
- Global Exception Handling  
- Password encryption  
- Dockerized backend  
- Cloud-ready deployment  
- API testing with Postman  

---

## 📁 Project Structure

aismart-backend/
│
├── src/main/java
│ ├── controller # REST Controllers
│ ├── service # Business Logic
│ ├── repository # JPA Repositories
│ ├── security # JWT, Filters, Config
│ ├── model # Entities
│ └── exception # Global Exception Handling
│
├── Dockerfile
├── pom.xml
└── README.md

yaml
Copy code

---

## 🔐 Authentication Flow (JWT)

1. User logs in with credentials  
2. Backend generates JWT token  
3. Token is sent in `Authorization: Bearer <token>`  
4. Protected APIs validate token  
5. Access granted based on role  

---

## 🌐 API Endpoints

### 🔑 Auth APIs
POST /api/auth/login
POST /api/auth/register

shell
Copy code

### 👤 User APIs (JWT Protected)
GET /api/users
POST /api/users

shell
Copy code

### ❤️ Health Check
GET /api/users/health

yaml
Copy code

---

## 🖥️ Local Development

Base URL:
http://localhost:9090

yaml
Copy code

Example Endpoints:
http://localhost:9090/api/users/health
http://localhost:9090/api/auth/login

yaml
Copy code

---

## 📬 API Testing (Postman)

Live Base URL:
https://aismart-backend.onrender.com

makefile
Copy code

Example:
POST https://aismart-backend.onrender.com/api/auth/login
GET https://aismart-backend.onrender.com/api/users

yaml
Copy code

> Use **Bearer Token** in Authorization header for secured APIs.

---

## 🐳 Docker

### Docker Hub Repository
https://hub.docker.com/r/k9108/aismart-backend

bash
Copy code

### Pull Image
```bash
docker pull k9108/aismart-backend:latest
Run Container
bash
Copy code
docker run -d -p 9090:8080 --name aismart-backend k9108/aismart-backend
☁️ Cloud Deployment (Render)
Live URL:

arduino
Copy code
https://aismart-backend.onrender.com
Health Check:

ruby
Copy code
https://aismart-backend.onrender.com/api/users/health
Root URL returns 403 (expected behavior for secured backend).

💻 GitHub Repository
bash
Copy code
https://github.com/910862KUMAR/aismart-backend

🙌 Author

Kumar
Backend Developer | Java | Spring Boot | Docker | Cloud
