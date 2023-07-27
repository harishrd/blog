import { Link } from "react-router-dom";
import articles from "./article-content";


const ArticleListPage = () => { 
    return (
        <>
            {articles.map((article, key) => (
                <Link key={article.name} to={`/articles/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    );
};


export default ArticleListPage; 