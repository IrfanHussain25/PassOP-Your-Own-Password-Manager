# PassOP - Your Own Password Manager

A simple and secure Password Manager application built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. This application allows users to manage their passwords for various websites with features like adding, editing, and deleting password entries. Passwords are securely stored in a MongoDB database.

## Features

- **Add New Entry**: Save a new password entry with fields for the URL, Username, and Password.
- **Show/Hide Password**: Toggle visibility of the password to easily view or hide sensitive information.
- **Copy Password**: Quickly copy passwords to the clipboard using a convenient copy icon next to each password field.
- **Toast Notifications**: Receive toast notifications to confirm successful actions, like saving or copying passwords.
- **Edit Entry**: Update the URL, Username, or Password of any existing entry.
- **Delete Entry**: Remove any entry from the password list.
- **Responsive Design**: Styled with Tailwind CSS to provide a clean, responsive interface.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud)

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/irfanhussain25/PassOP-Your-Own-Password-Manager.git
   ```

2. **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**:
    ```
    npm install
    ```

4. **Configure Environment Variables**: In the backend folder, create a .env file and add your MongoDB URI:
    ```
    MONGO_URI = mongodb://localhost:27017
    ```
5. **Run the Application**:
    Open two terminal windows:
    - Start the server:
        ```
        cd backend
        node --watch server.js
        ```
    - Start the frontend:
        ```
        npm run dev
        ```
Access the Application: Open your browser and go to http://localhost:5173.

## Usage
1. **Add New Password**: Click the "Add Password" button and fill in the URL, Username, and Password fields. A toast notification will confirm if the password was successfully saved.
2. **Show/Hide Password**: Use the eye icon next to the password field to toggle between showing and hiding the password.
3. **Copy Password:** Click the copy icon next to a password to copy it directly to your clipboard, with a toast notification confirming the copy.
4. **Edit Password**: Click the "Edit" button on any entry to update the URL, Username, or Password.
5. **Delete Password**: Click the "Delete" button to remove an entry.

With this setup, you’ll have the Password Manager running locally, ready for you to manage passwords securely!