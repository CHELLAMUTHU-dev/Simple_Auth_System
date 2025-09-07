
# Simple Authentication System

This project was build a simple authentication system with these features:

1. **Register (Sign Up):** User creates account with email & password.
2. **Login:** User logs in using registered credentials.
3. **Session:** Stay logged in with cookies/session.
4. **Logout:** Clear session & redirect to login.
5. **(Optional):** Protected `/dashboard` route only accessible when logged in.

## Tech Stack

- **Frontend:** React.js (with fetch/axios for API calls)
- **Backend:** Node.js + Express.js
- **Database:** SQLite (lightweight, file-based DB)
- **Password Hashing:** bcrypt
- **Session Handling:** express-session + cookie-parser

# Project Setup


## Installation


```bash
  git init
  git clone https://github.com/CHELLAMUTHU-dev/Simple_Auth_System.git

```
  ## Frontend
   
   ```bash
   cd frontend
   npm install    //install dependencies
   npm run dev   // start the server
```
  ## Backend
   
   ```bash
   cd server
   npm install    //install dependencies
   npm start   // start the server
```

