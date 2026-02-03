# TrackR - Job Application Tracker

[Live Demo](#): https://trackr-fjp7.onrender.com
## 📋 Overview

TrackR is a modern, full-stack job application tracking system built with the MERN stack. Designed to help job seekers stay organized, TrackR provides an intuitive interface for managing job applications, tracking interview schedules, and monitoring application statuses—all in one place.

---

## ✨ Key Features

- **🔐 Secure Authentication** - JWT-based login and registration system
- **📊 Interactive Dashboard** - Real-time statistics and visual analytics
- **📝 Job Management** - Add, edit, delete, and organize job applications
- **🔍 Advanced Filtering** - Search and filter jobs by status, type, and more
- **📈 Progress Tracking** - Monitor application statuses (pending, interview, declined)
- **🎨 Modern UI** - Clean, minimal, and responsive design
- **🌓 Dark Mode** - Toggle between light and dark themes
- **📱 Mobile Responsive** - Optimized for all devices

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Navigation and routing
- **Styled Components** - Component-level styling
- **Recharts** - Data visualization
- **React Query** - Server state management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Cloudinary** - Image storage and management

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Cloudinary account (for avatar uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd trackr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5100
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/trackr
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=1d
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm run setup-production-app
   node server
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:5100`

---

## 📁 Project Structure

```
trackr/
├── client/                # React frontend
│   ├── src/
│   │   ├── assets/       # Images, styles, wrappers
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Utility functions
│   │   └── App.jsx       # Main app component
│   └── public/           # Static files
├── server/               # Node.js backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Entry point
├── .env                 # Environment variables
└── package.json         # Dependencies
```

---

## 🔧 Configuration

### MongoDB Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Whitelist your IP address
4. Create a database user
5. Get your connection string and add it to `.env`

### Cloudinary Setup

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your credentials from the dashboard
3. Add them to your `.env` file

---


---

## 🎯 Usage

1. **Register** - Create a new account
2. **Login** - Access your dashboard
3. **Add Jobs** - Start tracking your applications
4. **Update Status** - Keep track of interview stages
5. **View Stats** - Monitor your progress with visual analytics
6. **Manage Profile** - Update your information and avatar

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 🌟 Acknowledgments

- Design inspiration from modern SaaS applications
- Built with guidance from MERN stack best practices
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---


<div align="center">
  Made with ❤️ by Harika Purma
</div>
