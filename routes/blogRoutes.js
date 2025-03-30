import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid'; // this creates new id 

let posts = []; // Temporary storage for blog posts

// Home route - Display all blogs
router.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

// New post form
router.get("/new", (req, res) => {
    res.render("new.ejs");
});

// Handle new post submission
router.post("/add", (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: uuidv4(), title, content });
    res.redirect("/");
});

// Edit post form
router.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.redirect("/");
    res.render("edit.ejs", { post });
});

// Handle post update
router.post("/update/:id", (req, res) => {
    const { title, content } = req.body;
    posts = posts.map(post =>
        post.id === req.params.id ? { ...post, title, content } : post
    );
    res.redirect("/");
});

// Handle post deletion
router.post("/delete/:id", (req, res) => {
    posts = posts.filter(post => post.id !== req.params.id);
    res.redirect("/");
});

export default router;
