import { useParams } from "react-router-dom";
import { useState } from "react";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => { 
    const { articleId } = useParams();
    // const articleId = "learn-react";

    const article = articles.find(article => article.name === articleId);
    if (article === undefined) {
        return <NotFoundPage />;
    }

    // const article = articles[0];

    return (
        <>
            <h1>hello</h1>
            <h1>article.title</h1>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
};


export default ArticlePage; 