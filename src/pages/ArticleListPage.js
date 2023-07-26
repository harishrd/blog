import articles from "./article-content";
import ArticleList from "../components/ArticleList";


const ArticleListPage = () => { 
    return (
        <>
            <h3>Articles</h3>
            <ArticleList articles={articles}/>
        </>
    );
};


export default ArticleListPage; 