import express from "express";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blogRoutes.js";



const PORT = 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", blogRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
