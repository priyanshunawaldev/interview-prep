<div align="center">

### 🚀 Tech Stack

<img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-0d9488?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/-Firebase-F57C00?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
<img src="https://img.shields.io/badge/-Vapi-22c55e?style=for-the-badge&logoColor=white" alt="Vapi AI" />
<img src="https://img.shields.io/badge/-Zod-1e293b?style=for-the-badge&logoColor=white" alt="Zod" />
<img src="https://img.shields.io/badge/-shadcn_ui-7c3aed?style=for-the-badge&logoColor=white" alt="shadcn/ui" />

</div>

# 🎯 Prepwise – AI-Powered Job Interview Preparation Platform

Prepwise is a full-stack web application designed to simulate real-time job interviews powered by Vapi AI Voice Agents and Google Gemini. It aims to help users prepare for interviews with AI-driven feedback, all wrapped in a modern and responsive UI.

---

## ⚙️ Tech Stack

- **Frontend & Backend:** Next.js  
- **Styling:** Tailwind CSS, shadcn/ui  
- **Authentication & Data Storage:** Firebase  
- **AI & Voice Agents:** Vapi AI, Google Gemini  
- **Validation:** Zod  

---

## ✨ Features

- 🔒 Authentication: Secure email/password sign-up and sign-in via Firebase  
- 🎤 AI-Powered Interviews: Create and participate in mock interviews with voice agents  
- 🧠 Instant AI Feedback: Receive detailed feedback on your responses after each interview  
- 📊 Dashboard: Manage, track, and revisit your interview history easily  
- 💻 Responsive Design: Works smoothly on desktops, tablets, and mobile devices  
- ♻️ Modular Code Architecture: Emphasizes reusability and maintainability  

---

## 🧠 Learning & Development

This project was inspired by the YouTube tutorial:  
**[Build and Deploy a Full Stack Real Time AI Voice Agent Interview Platform](https://youtu.be/8GK8R77Bd7g)** by **@JavaScript Mastery**.

I rebuilt the app from the ground up to deepen my understanding of:

- Next.js full-stack capabilities  
- Real-time AI and voice integration  
- Firebase authentication and database design  
- Advanced UI styling with Tailwind CSS and component libraries  
- Structuring scalable, reusable React components

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Git  
- Node.js  
- npm  

### Steps

1. Clone the repo  
   ```bash
   git clone https://github.com/priyanshunawaldev/interview-prep.git
   cd interview-prep
   ```

2. Install dependencies

   ```bash
   npm install
   ```
3. Create `.env.local` file in the project root with your credentials:

   ```env
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=

   GOOGLE_GENERATIVE_AI_API_KEY=

   NEXT_PUBLIC_BASE_URL=

   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=

   FIREBASE_PROJECT_ID=
   FIREBASE_CLIENT_EMAIL=
   FIREBASE_PRIVATE_KEY=
   ```
4. Run the development server

   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📬 Connect with Me

* GitHub: [@priyanshunawaldev](https://github.com/priyanshunawaldev)
* LinkedIn: [Priyanshu Nawal](https://linkedin.com/in/priyanshunawal)

---

*This project represents my journey to build real-world full-stack applications powered by AI, moving beyond tutorials to independent, thoughtful development.*
