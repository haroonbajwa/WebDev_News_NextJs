import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import Image from 'next/image'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
    
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <>
        <div className="mainContainer">
            <Meta title={article.title} description={article.excerpt} />
            
            <div className="contentSection">
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <br/>
                <Link href="/">&larr; Go Back</Link>
            </div>
            <div className="ArticleImageSection">
                <Image width="500px" height="350px" src={article.articleImage} alt="article image"/>
            </div>
        </div>

        <style jsx>
            {`
                .mainContainer {
                    width:90%;
                    margin-top:50px;
                    display:flex;
                }
                .contentSection {
                    border-radius: 20px;
                    margin: 10px;
                    width: 60%;
                    flex: 1;
                }
                .ArticleImageSection {
                    margin-left: 20px;
                    width: 40%;
                    margin-top: 50px;
                }

                @media (max-width: 780px) {
                    .mainContainer {
                        flex-direction: column-reverse;
                    }
                    .ArticleImageSection {
                        width: 100%;
                    }
                    .contentSection {
                        width: 100%;
                    }
                }
            `}
            </style>

        </>
    )
}

//getting data from api
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);

    const articles = await res.json();

    const ids = articles.map(article => article.id);

    const paths = ids.map(id => ({params: { id: id.toString() }}))

    return {
        paths,
        fallback: false
    }
}

export default article
