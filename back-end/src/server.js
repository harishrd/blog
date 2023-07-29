import express from 'express';


let articleInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'my-thoughts-on-resumes',
        upvotes: 0,
        comments: [],
    }
];

const app = express();

app.use(express.json());

app.put('/api/articles/:articleName/upvote', (req, res) => {
    const { articleName } = req.params;  // object destructuring
    const article = articleInfo.find(a => a.name === articleName);
    if (article) {
        article.upvotes += 1;
        res.status(200).send(`${articleName} now has ${article.upvotes} upvotes`);
    } else {
        res.send(`The article ${articleName} doesn't exist`);
    }
});

app.post('/api/articles/:articleName/add-comment', (req, res) => {
    const { articleName } = req.params;
    const { username, text } = req.body;
    const article = articleInfo.find(a => a.name === articleName);

    if (article) {
        article.comments.push({ username, text });
        res.status(200).send(article);
        console.log(article.comments);
    } else {
        res.send(`The article ${articleName} doesn't exist`);
    }
}); 

// app.listen(8000, hostname, backlog);

app.get('/', (req, res) => { 
    res.send("Hi there, hello!");
});

app.listen(8000, () => {
    console.log("server is running");
})