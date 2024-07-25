## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Introduction

MERN Blog is a powerful and easy-to-use blog platform that allows users to create, read, and update blog posts. It is built using the MERN stack, leveraging the power of MongoDB, Express.js, React.js, and Node.js.

## Features

- User authentication and authorization
- Create, read, and update blog posts
- Responsive design
- Rich text editor for blog posts

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository
```bash
git clone https://github.com/tapasyadimree/mernblog.git
cd mernblog
```
Install Dependencies
Backend
```bash
cd backend
npm install
```
Frontend
```bash
cd frontend
npm install
```
Configure Environment Variables
Create a .env file in the backend directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
## Usage
Running the Application

Backend
```bash
cd backend
node index.js
```

Frontend
In another terminal window:

```bash
cd frontend
npm start
```
Open your browser and navigate to http://localhost:3000 to see the application in action.

## Technologies
MongoDB
Express.js
React.js
Node.js
