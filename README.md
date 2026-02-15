# 🎮 LearnX – Gamified Learning and Quiz Platform

## 📌 Hackathon Project – HC-303

LearnX is an interactive gamified learning platform that enhances student engagement through quizzes, leaderboards, and performance analytics.

---

## 🚀 Features

### 👨‍🎓 Student Features
- Start quiz with username
- Real-time question loading from backend
- Instant answer validation
- Progress bar tracking
- Final score display
- Leaderboard ranking
- Performance stored for analytics

### 👩‍🏫 Teacher Features
- View total quiz attempts
- Check average score
- Track best score
- View recent attempts
- Monitor student engagement

---

## 🏗️ Tech Stack

### 🔹 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

### 🔹 Backend
- Node.js
- Express.js
- REST APIs
- JSON Data Handling

---

## 📂 Project Structure

```
learnx-project/
│
├── learnx-backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   └── models/
│
├── learnx-frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── leaderboard.html
│   ├── script.js
│   └── style.css
│
└── .gitignore
```

---

## 🔗 API Endpoints

### Get Quiz Questions
```
GET /api/quiz
```

### Submit Quiz Results
```
POST /api/results
```

### Get All Results (Teacher Dashboard)
```
GET /api/results
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd learnx-project
```

---

### 2️⃣ Run Backend

```bash
cd learnx-backend
npm install
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

### 3️⃣ Run Frontend

Open:

```
learnx-frontend/index.html
```

in your browser.

---

## 🎯 Problem Statement

Traditional learning platforms lack engagement and performance tracking.

LearnX solves this by:
- Introducing gamified quizzes
- Creating leaderboard competition
- Providing teacher analytics
- Enabling scalable backend architecture

---

## 🔮 Future Improvements

- JWT Authentication (Student & Teacher roles)
- MongoDB Atlas integration
- Adaptive difficulty algorithm
- AI-based personalized feedback
- Graph-based analytics dashboard
- Cloud deployment (Render / Netlify)

---

## 👨‍💻 Role & Contribution

**Backend Developer**
- Designed REST APIs
- Built quiz retrieval endpoint
- Implemented result storage logic
- Integrated frontend with backend
- Structured project architecture

---

## 📜 License

This project is built for hackathon purposes.

---

## ⭐ Conclusion

LearnX transforms traditional static learning into an interactive, competitive, and data-driven experience for both students and teachers.

