import { server } from '../config';
import PostsList from '../components/PostsList';

export default function Home({ posts }) {
  
  return (
    <div>    
      <PostsList posts={posts} />
    </div>
  )
}


//fetching data from jsonplaceholder

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}