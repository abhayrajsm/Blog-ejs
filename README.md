# Comic-Style Blog Website

A fun and dynamic **comic-themed blog website** built using **Node.js, Express.js, EJS, and pure CSS**. This project allows users to **create, edit, and delete blog posts**, with data stored in an **array** (no database used for now). 🎨💥

## 🛠 Tech Stack Used
- **Node.js** – Server-side JavaScript
- **Express.js** – Backend framework for routing
- **EJS** – Templating engine for dynamic pages
- **HTML, CSS, JavaScript** – Frontend development
- **Custom CSS** – Designed in a **comic-book style**

## 🚀 Features
- 📝 **Create, Edit, and Delete Blog Posts**
- 📄 **Dynamic Routing** for individual posts
- 🎨 **Comic-Style UI** using custom fonts & vibrant colors
- 🏗 **Header with Logo** ("Abhayraj") & **Footer with Social Links**
- 💾 **Data Stored in an Array** (No MongoDB used)

## 📂 Project Structure
```
📦 comic-blog-website
├── 📂 public        # Static files (CSS, images)
├── 📂 views         # EJS templates
│   ├── 📂 partials  # Header & Footer
│   ├── index.ejs    # Homepage
│   ├── new.ejs      # Create new post
│   ├── edit.ejs     # Edit post
├── 📂 routes        # Express routes
├── server.js        # Main server file
├── README.md        # Project documentation
```

## 📖 Project Documentation
### 1️⃣ Setting Up the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/comic-blog.git
   cd comic-blog
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```
4. Open your browser and go to:
   ```sh
   http://localhost:3000
   ```

### 2️⃣ How It Works
- The server is built with **Node.js & Express.js**.
- Blog posts are stored in an **array** (not a database for now).
- **EJS templates** render the blog dynamically.
- Users can **add, edit, and delete** posts.
- A **comic-style UI** is designed with **custom fonts & CSS.**

### 3️⃣ Routes Breakdown
| Route            | Method | Description |
|-----------------|--------|-------------|
| `/`             | GET    | Homepage - Lists all blog posts |
| `/new`          | GET    | Shows form to create a new post |
| `/new`          | POST   | Handles new post submission |
| `/edit/:id`     | GET    | Shows form to edit a post |
| `/edit/:id`     | POST   | Updates the existing post |
| `/delete/:id`   | POST   | Deletes a post |

### 4️⃣ Next Steps
- 🔄 **Switch to MongoDB** for persistent data storage
- 🎭 **Add Animations & More Comic-Style Effects**
- 📢 **User Authentication & Comments Section**

💬 Feedback and contributions are welcome! 🚀🔥

---

📌 **Follow me on:**  
🔗 [LinkedIn](https://www.linkedin.com/in/abhayraj-motakpalli-307925174/) 
🔗 [GitHub](https://www.instagram.com/abhayyy_codes/) 
🔗 [Instagram](https://github.com/abhayrajsm)

