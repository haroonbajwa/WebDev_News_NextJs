import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const post = ({ post }) => {
    
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <div style={{width:"80%", marginTop: "50px"}}>
            <Meta title={post.title} description={post.body} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br/>
            <Link href="/posts">&larr; Go Back</Link>
        </div>
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
