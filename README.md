## 🏥 The Health Nexus - MERN Stack Hospital Management System

**The Health Nexus** is an integrated healthcare management and doctor appointment booking platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless experience for patients to book appointments, consult with doctors (online/video), and manage their medical records.

---

## 🚀 Features

- 🔐 Secure User Authentication (JWT-based)
- 🩺 Doctor Appointment Booking
- 📆 Slot Availability & Rescheduling
- 👨‍⚕️ Online / Video Consultation Support
- 📁 Patient Health Report Storage
- 🧾 Admin Panel for Managing Doctors & Appointments
- 🌐 Fully Responsive UI

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- CSS
- Axios

**Backend**:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication

**Other Tools**:
- dotenv
- cookie-parser
- nodemon

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/agarg2004/The-health-nexus.git
cd The-health-nexus
````

### 2. Setup Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRES=30d
FRONTEND_URL_ONE=http://localhost:4000
FRONTEND_URL_TWO=http://localhost:5173
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Run the Application

#### Start Backend

```bash
cd ../backend
npm run dev
```

#### Start Frontend

```bash
cd ../frontend
npm start
```

---

## 📸 Screenshots

![WhatsApp Image 2025-07-23 at 15 56 18_7d8c3874](https://github.com/user-attachments/assets/3464cd13-b839-4ba1-83a3-b5032e0969f4)

---

## 📂 Project Structure

```
/backend
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── utils/
  └── server.js

/frontend
  ├── src/
     ├── components/
     ├── pages/
     ├── services/
     └── App.js
```

---

## 👨‍💻 Author

**Anirudh Garg**
📧 [anirudhgarg794@gmail.com](mailto:anirudhgarg794@gmail.com)
🔗 [GitHub](https://github.com/agarg2004)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


