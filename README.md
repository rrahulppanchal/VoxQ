# Project Setup Guide

This guide will help you set up and start the Node.js server and Next.js client for the project. The server code is located in the `vox_server` directory, and the client code is located in the `vox_client` directory.

## Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- Docker (for database setup)

## Cloning the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/your-repo/your-project.git
cd your-project
```
## Setting Up the Server

Navigate to the vox_server directory and install the dependencies:
```sh
cd vox_server
yarn install
```

#### Start the server:
```sh
yarn start
```
This command uses ts-node to run src/server.ts.

#### Start the server in development mode:
```sh
yarn dev
```
This command uses nodemon to watch for changes and restart the server automatically.

#### Create the database:
```sh
yarn run create_database
```
This command uses Prisma to push the database schema.

#### Generate Prisma client:
```sh
yarn run prisma_g
```
This command runs prisma generate to create the Prisma client.


#### Run Prisma migrations:
```sh
yarn run prisma_m
```
This command runs prisma migrate dev to apply database migrations.

#### Start the database using Docker:
```sh
yarn run database
```
This command uses Docker Compose to start the database in detached mode.


## Setting Up the Client

Navigate to the vox_client directory and install the dependencies:
```sh
cd vox_client
yarn install
```

#### Start the client in development mode:
```sh
yarn dev
```
This command starts the Next.js development server.

#### Build the client for production:
```sh
yarn run build
```
This command builds the Next.js application for production.

#### Start the client in production mode:
```sh
yarn start
```
This command starts the Next.js application in production mode on port 4000.

## Additional Information
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18.7 or later)
- **npm** (v6.x or later) or **yarn** (v1.x or later)
- Set up environment variable accordingly for client and server.

This README provides a clear and structured guide for setting up and running both the server and client parts of the project.



