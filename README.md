# Task Manager – Angular CRUD App (v1.0.0)

![Angular](https://img.shields.io/badge/Angular-20.3.11-red) ![Node](https://img.shields.io/badge/Node-22.14.0-green) ![Docker](https://img.shields.io/badge/Docker-Yes-blue) ![License](https://img.shields.io/badge/License-Free-green)

**Version:** 1.0.0  
**Last Updated:** 15-Nov-2025  
**Author:** Bhashana Chamodya  

---

## Overview
Task Manager is a **simple CRUD application** built with **Angular 20.3.11** to manage tasks efficiently. Tasks are stored in **LocalStorage**, ensuring data persists across page reloads. The app includes **form validation**, a **responsive UI**, and is containerized using **Docker** and served through **Nginx** for production.

---

## Features
- Create, read, update, and delete tasks  
- Persist tasks in LocalStorage  
- Reactive form validation (required fields, min/max length)  
- Responsive design for desktop and mobile  
- Dockerized production build with Nginx  

---

## Tech Stack
- **Angular:** 20.3.11  
- **Node:** 22.14.0  
- **Package Manager:** npm 10.9.2  
- **Styling:** Tailwind CSS  
- **Storage:** LocalStorage  
- **Containerization:** Docker + Nginx  
- **Language:** TypeScript  

---

## Getting Started

### Prerequisites
- Node.js >= 22.14.0  
- Angular CLI 20.3.10+  
- Docker (optional, for production build)  

---

### Install Dependencies
```bash
npm install
```

## Run Development Server
```bash
ng serve
```

### Docker (Production Build)

## Build Docker Image
```bash
docker build -t angular-task-manager .
```

## Run Docker Container
```bash
docker run -p 80:80 angular-task-manager
```
Open http://localhost:80 to access the app.


