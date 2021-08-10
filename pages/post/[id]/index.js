import Link from 'next/link'
import Meta from '../../../components/Meta'

const post = ({ post }) => {
    
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <>
        <div className="singlePostView">
            <Meta title={post.title} description={post.body} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br/>
            <Link href="/posts">&larr; Go Back</Link>
        </div>

        <style jsx>
            {`
                .singlePostView {
                    width:80%;
                    margin-top: 50px;
                }
                
            `}
        </style>

        </>
    )
}

//getting data from jsonplaceholder

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const post = await res.json();

    return {
        props: {
            post
        }
    }
}


//for static website
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const posts = await res.json();

    const ids = posts.map(post => post.id);

    const paths = ids.map(id => ({params: { id: id.toString() }}))

    return {
        paths,
        fallback: false
    }
}

export default post
