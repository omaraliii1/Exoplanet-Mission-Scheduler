# NASA Project

Nasa Project is a full-stack application for scheduling interstellar missions to potential exoplanets based on habitability criteria. The project is built with a React front end, Node.js and Express backend, and MongoDB for database storage.

## Project Structure

The project is divided into two main directories:

    client/: Contains all front-end code using React.
    server/: Contains all back-end code using Node.js, Express, and MongoDB.

## Setup Instructions

### Prerequisites

Ensure that you have Node.js and MongoDB installed on your machine.

### Step 1: Clone the Repository

```bash
git clone https://github.com/omaraliii1/Nasa-Project.git
cd Nasa-Project
```

### Step 2: Install Dependencies

Navigate to each directory (client and server) and run the following commands to initialize and install the necessary dependencies.

```bash
# In the client directory
cd client
npm init -y
npm install

# In the server directory
cd ../server
npm init -y
npm install
```

### Step 3: Set Up Environment Variables

Create a .env file in the root of your server directory to store sensitive configuration values.

```bash
# .env
MONGO_URL=<Your MongoDB Connection URL>
PORT=<Your Server Port Number>
```

### File Configuration

1. MongoDB Connection:
   MONGO_URL variable is used in ./server/src/services/mongo.js to connect to your database.

2. Server Port Configuration:
   PORT variable is used in ./server/src/server.js.

### Step 4: Run the Application

In the server directory, start your server:

```bash
npm start
```

In the client directory, start your front end:

```bash
npm start
```

Your application should now be running! Access the client through http://localhost:<PORT> (replace <PORT> with the port number you've configured).
