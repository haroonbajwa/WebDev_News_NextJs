import PostItem from './PostItem'
import articleStyles from '../styles/Article.module.css'


const PostsList = ({ posts }) => {
    return (
        <div className={articleStyles.postsgrid}>
            {posts.map(post => (
                < PostItem post={post} />
            ))}
        </div>
    )
}

export default PostsList
