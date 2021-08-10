import Link from 'next/link'
import Image from 'next/image'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                {/* <Image className={articleStyles.img} src={ article.articleImage} /> */}
                <Image width="500px" height="350px" className="image" src={ article.articleImage} />
                <h3>{ article.title } &rarr;</h3>
                <p>{ article.excerpt }</p>
            </a>
        </Link>
    )
}

export default ArticleItem
