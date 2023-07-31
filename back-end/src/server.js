import express from 'express';
import { db, connectToDB } from './db.js';
// import articles from '../../front-end/src/pages/article-content.js';


// let articleInfo = 

const app = express();
app.use(express.json());

app.get("/api/articles/:articleName", async (req, res) =>  { 
    const { articleName } = req.params; // like useParams() in React
    const articles = await db.collection('articles').findOne({ name: articleName })
    
    if (articles) {
        const articles = req.json(articles);
        res.status(200).send(articles); // send back to the api
    } else {
        res.sendStatus(404);
    }
});

app.put('/api/articles/:articleName/upvote', async (req, res) => {
    const { articleName } = req.params;  // object destructuring
    
    console.log("upvoted article: " + articleName);

    // wait for the database to update
    await db.collection('articles').updateOne(
        { articleName },
        { $inc: { upvotes: 1 } }
    );

    // wait for the database to respond
    const article = await db.collection('articles').findOne({ name: articleName });

    if (article) {
        res.send(`${articleName} now has ${article.upvotes} upvotes`);
    } else {
        res.send(`The article ${articleName} doesn't exist`);
    }
});

app.post('/api/articles/:articleName/add-comment', async (req, res) => {
    const { articleName } = req.params;
    const { username, text } = req.body;

    await db.collection('articles').updateOne(
        { name: articleName },
        {
            $push: {
                comments: { username, text }
            }
        }
    );

    const article = await db.collection('articles').findOne({ name: articleName });

    if (article) {
        res.send(article.comments);
    } else {
        res.send(`The article ${articleName} doesn't exist`);
    }
}); 

// app.listen(8000, hostname, backlog);

app.get('/', (req, res) => { 
    res.send("Hi there, hello!");
});


connectToDB(() => {
    console.log("connected to database..");
    app.listen(8000, () => {
        console.log("(port: 8000) server is running..");
    });
});

