# Roomie

(project created for learning)

https://dev.to/theuserll/second-full-stack-app-roomie-find-a-room-to-rent-built-with-react-tailwindcss-express-mongodb-heroku-s3-4d2h

https://roomiew.herokuapp.com/listing/5ed30e7234c5050017aba606

https://roomate-s3-mongodb.herokuapp.com/

https://github.com/lucasmrl/roomie

https://github.com/coding-to-music/aws-S3-images-MongoDB-Node-Express-React-hooks-express-tailwind

A platform to find roommates by listing your space or finding one available.

Built with **React/Express/MongoDB/Tailwind**. 🚀

## local development - server backend

```java
# I needed to change the package.json node version to ">=12.13.0"

npm run install

npm run dev

http://localhost:8000/
```

## local development - client frontend

```java
cd client

npm run start

http://localhost:3000/
```

To build the client:

```java
npm run heroku-postbuild

http://localhost:3000/
```

## Heroku deployment of the backend

Use the heroku CLI to create a new app, give it a name:

```java
heroku create roomate-s3-mongodb
```

- Then go to the Heroku dashboard and connect to the GitHub repo
- Click to allow automatic deployment
- Then do another push and the changes will be picked up by Heroku
- That is for the server (backend)

Need to set the Heroku environment variables:

```java
Need to determine which variables to set
```

## Features

My second full-stack project. 😬

[View demo](http://roomiew.herokuapp.com/)

![Image of Roomie](https://github.com/lucasmrl/roomie/blob/master/ezgif.com-resize.gif?raw=true)

## Built With

- FE: React (Hooks, Context API, Router) + TailwindCSS
- BE: Node.js (Express.js) + MongoDB
- Hosted on Heroku / Images in AWS S3

## Versioning

v.1.0.0

## Authors

- **Lucas Lima** - [lucasmrl](https://github.com/lucasmrl)

L.L.
Posted on Jun 1, 2020 • Updated on Jun 3, 2020

# Second full-stack app: Roomie - Find a room to rent! Built with: React + TailwindCSS + Express + MongoDB + Heroku /

- S3
- react
- node
- javascript
- showdev

Hey, devs!

I've been studying for a few months now and after one month and 25 deploys, this is my second full-stack project: Roomie - a website to find rooms to rent or to list your place. 😅

I created this for the sake of learning only and since my first full-stack project was a simple CRUD app, it was a blast having this experience!

demo: https://roomiew.herokuapp.com/
repo: https://github.com/lucasmrl/roomie

Built with:

- FE: React (Hooks, Context API, Router) + TailwindCSS
- BE: Node.js (Express.js) + MongoDB

Hosted on Heroku / Images in AWS S3

What I tried to learn:

- Authentication (Sign up, Log in, Log out, Reset password)
- API Filtering, Sorting, Pagination (Even though it is not implemented in the FE)
- Send e-mails from back-end
- Upload pictures to S3
- Security
- TailwindCSS (first time using it)
- Agile methodology (tried to organize my user stories, sprints, daily stand-up meeting, ...)

Definitely it is far from perfect, but it helped me a least to get my hands dirty. I appreciate any feedback!
