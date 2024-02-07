# HFG FRONTEND
[Backend](https://github.com/MinhMXC/HFG-BackEnd)

This is my submission for [HackForGood2024](https://dsc.comp.nus.edu.sg/hack4good), done during Jan-Feb 2024 in two weeks.
My group and I chose to tackle Problem Statement 1, which is to "Develop a cost-effective system
for volunteers to enroll, manage activities, and request certificates, while enabling nonprofit administrators
to efficiently handle forms, attendance, and generate detailed reports."

Welcome to the Frontend Repository!

This is built using React Typescript and Material UI, with React Router v6.

## How to setup

### Things to note

Because the app is supposed to be run in conjunction with the [Backend](https://github.com/MinhMXC/HFG-BackEnd),
running it alone will not load any data and raise errors.

The **default user** is ```email: imnotminh@gmail.com``` and ```password: 123456```

### IDE / Code Editor
1. Clone the repository.
2. Install Node.js, if you haven't.
3. CD into the project folder.
4. Run ```npm install``` to install all dependencies.
5. Run ```npm start``` to start the project in development mode.

### Docker
1. The project comes with a Dockerfile that can be easily build into an image and run.

## Integration with Backend
1. This requires [Docker](https://www.docker.com/) and Docker Compose.
2. Clone both [FrontEnd](https://github.com/MinhMXC/HFG-FrontEnd) and [Backend](https://github.com/MinhMXC/HFG-BackEnd)
   into an empty folder.
3. Using VSCode or any editor, create a file docker-compose.yml in the folder.
4. Open docker-compose.yml, paste these codes into the file and save.
```yml
version: "3"

services:
  db:
    image: postgres:16.1
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: 123456
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  backend:
    build: ./HFG-BackEnd
    volumes:
      - ./HFG-BackEnd:/usr/src/app
    ports:
      - 5000:5000
    depends_on:
      db:
        condition: service_healthy

  frontend:
    build: ./HFG-FrontEnd
    volumes:
      - ./HFG-FrontEnd:/usr/src/app
    ports:
      - 3000:3000
    depends_on:
      - backend

volumes:
  postgres:
```
5. Using the terminal, CD into the folder and run ```docker compose up```.
6. Wait a while for all the images to be built and run.
7. If there is no errors, the website will be hosted at localhost:3000 and can the Backend is exposed at localhost:5000.
8. The **default user** is ```email: imnotminh@gmail.com``` and ```password: 123456```


## Technical Documentation

Please click on ```TechnicalDocs.md```