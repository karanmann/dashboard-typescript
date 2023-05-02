## Description

I wanted to try and make a FullStack Dashboard using MUI, Recharts and Regression. My idea behind this project was to practice some basic concepts as well as push to see what more I could do. I did follow some tutorials on Youtube to improve the design and data.

#### [View Live Project Here](https://dashboard-typescript-frontend.vercel.app/)

## Installation

Use the node package manager to install node modules both for the frontend and backend

#### Backend
You will also need the following -
- Setup MongoDB Cluster
- Create ```/server/.env``` file in the server folder and add the following 
```bash 
PORT=1337
MONGODB_URL=<Your MongoDB Cluster Address>
```

- Deploy the dummy data to MongoDB cluster. The code to reset the cluster and upload the data is in ```/server/index.js```


- Then run the backend by - 
```bash
cd client
npm install
npm run dev
```

#### Frontend
You will also need the following -
- Create a ```/client/.env.local```file in the server folder and add the following 
```bash 
VITE_BASE_URL=http://localhost:1337
```
- Then run the frontend by - 
```bash
cd client
npm install
npm run dev
```

## Tech Used

#### Frontend

- React (with Typescript, Hooks, and Router)
- Redux Toolkit Query
- Material UI
- [Regression.js](https://github.com/Tom-Alexander/regression-js)
- [Recharts](https://recharts.org/en-US/)

#### Backend

- Express
- Node.js
- Helmet
- Mongoose
- Morgan
- MongoDB

#### Deployment

- [Frontend - Vercel](https://dashboard-typescript-frontend.vercel.app/)
- [Backend - Vercel](https://dashboard-typescript-backend.vercel.app/)
- [Version Control - Github]()


#### [View Live Project Here](https://dashboard-typescript-frontend.vercel.app/)

<img width="auto" alt="Dashboard" src="https://user-images.githubusercontent.com/62376840/235883259-55026228-3c0a-4f61-bff5-6dd588b8a83c.png">

<img width="auto" alt="Regression Line" src="https://user-images.githubusercontent.com/62376840/235883277-da249805-9911-41f9-874f-a47a040c7d1c.png">

