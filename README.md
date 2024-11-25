# Nannies service

You can check out the live version of the application here:

Visit the live site: [Nannies service](https://nannies-service-six.vercel.app/)

## Design Draft

You can check out the design draft for the Nannies Service on Figma:  
[View Design Draft on Figma](https://www.figma.com/design/u36ajEOsnwio2GDGiabVPD/Nanny-Sevices?node-id=0-1&node-type=canvas&t=pxPBlhGCcW6hWyvs-0)

## Table of Contents

1. [Project Description](#project-description)
2. [Features](#features)
3. [Installation](#installation)
4. [Database](#database)
5. [Technologies](#technologies)
6. [Author](#author)
7. [Contacts](#contacts)

## Project Description

Welcome to the **Nannies Service** project, a platform designed to connect families with professional nannies. This web application allows users to find a nanny.

## Features

- **Filter Nannies**: Users can filter nannies based on price, rating, and other criteria.
- **Authentication**: Secure login and signup functionality using Firebase Authentication, allowing users to manage their profiles.
- **Favorites**: Authenticated users can add and remove nannies from their favorites list.
- **Color Theme**: Users can switch between different color themes (Red, Green, Blue) to personalize their experience.
- **Responsive Design**: The application is fully responsive and works on both mobile and desktop devices.
- **Dynamic Content**: The nanny list is dynamically populated, and user changes (like adding/removing favorites) are updated in real-time.

## Installation

Clone the repository:

```bash

git clone https://github.com/Kamila-Lohvynenko/nannies-service
```

Install the dependencies:

```bash
npm install
```

```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Database

You need to configure Firebase for the app to work properly. Create a Firebase project and add the credentials to your .env file.

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

## Technologies

- **Frontend**: TypeScript, React, Redux, SCSS
- **Backend**: Firebase (for authentication, database, and storage)
- **Hosting**: Vercel
- **State Management**: Redux Toolkit
- **Styling**: SCSS

## Author

Kamila Lohvynenko - Developer - [GitHub](https://github.com/Kamila-Lohvynenko)

## Contacts

For questions, suggestions, or feedback, feel free to reach out:

Email: kamila.lohvynenko@gmail.com
