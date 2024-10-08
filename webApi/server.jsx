const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Använd CORS för att tillåta anrop från din React-applikation
app.use(cors());

const articles = [
    { title: "Article 1", summary: "Summary of Article 1", link: "#" },
    { title: "Article 2", summary: "Summary of Article 2", link: "#" },
    { title: "Article 3", summary: "Summary of Article 3", link: "#" }
];

app.get('/api/articles', (req, res) => {
    res.json(articles);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
