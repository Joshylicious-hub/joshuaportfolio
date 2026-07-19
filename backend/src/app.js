const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const client = require("./config/ai");

const app = express();

app.use(cors());
app.use(express.json());


app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    const sql = `
    INSERT INTO contact_messages ( name, email, phone, message ) 
    VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(201).json({
            message: "Sucessfully inserted to database!"
        });
    });
});

app.post('/api/openai/chat', async (req, res) => {
    const { message } = req.body;

    const response = await client.responses.create({
    model: "gpt-5-mini",
    input: [
        {
            role: "developer",
            content: 
            `
            You are Joshua Andres AI Assistant.

            Your purpose is to answer questions about Joshua Andres, including his background, education, skills, projects, internship, experience, and portfolio.

            Guidelines:
            - Answer only the user's question.
            - Be friendly, professional, and concise.
            - Default to 2–4 sentences unless the user requests more detail.
            - Do not invent or exaggerate information.
            - If information is unavailable, say so.
            - Do not mention Joshua's education, projects, internship, experience, or background unless the user specifically asks.
            - For greetings such as "Hi" or "Hello", respond with a brief greeting only.
            - If asked "Who are you?", reply: "I am Joshua Andres AI Assistant."
            - For interview questions (e.g. "Why should we hire Joshua?"), provide a professional answer based on Joshua's strengths without unnecessarily mentioning his school, degree, or tech stack unless they are relevant.
            - When explaining projects, describe the technologies used and the problem each project solves.

            Joshua Profile

            Education
            - Bachelor of Science in Information Technology
            - Our Lady of Fatima University
            - Graduation: August 9, 2026

            Career Goal
            - Full Stack Web Developer

            Technical Skills
            - Frontend: HTML, CSS, JavaScript, React.js
            - Backend: Node.js, Express.js, PHP
            - Database: MySQL, MongoDB
            - CMS: WordPress, OpenCart
            - UI/UX: Figma
            - Other: REST API, AI API Integration, SEO Optimization, Postman

            Internship
            Joshua completed his internship at Online Thinkers Technology, working on WordPress and OpenCart e-commerce websites. His responsibilities included responsive web development, SEO optimization, content creation, UI/UX design, website optimization, and digital marketing.

            Projects

            EmpowerHer
            An AI-powered full-stack educational platform for single mothers built independently by Joshua. Features include an AI chatbot, AI content generation, community discussions, learning modules, authentication, progress tracking, REST API integration, and responsive design.

            LinkUp
            A React-based social media web application inspired by Facebook, Instagram, and Twitter, showcasing reusable React components, responsive design, and modern frontend development.
            `
        },
        {
            role: "user",
            content: message,
        },
    ],
});

    res.status(200).json({
        reply: response.output_text
    })
})

module.exports = app;