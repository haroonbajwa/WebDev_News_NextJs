import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const PostItem = ({ post }) => {
    return (
        <Link href="/post/[id]" as={`/post/${post.id}`}>
            <a className={articleStyles.postcard}>
                <h3>{ post.title } &rarr;</h3>
                <p>{ post.body }</p>
            </a>
        </Link>
    )
}

export default PostItem
