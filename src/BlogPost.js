import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogPost = () => {

const {id} = useParams()
const {Data: blog, isPending } = useFetch('http://localhost:8000/blogs/'+id)
    console.log(id)
    console.log(blog)
    return ( 
<div className="blogpost"> 
     <h1>Blog Post {id}</h1>
     {isPending && <div>Is louding</div>  }
     {blog && (
          <article>
              <h1>{blog.title}</h1>
              <p>wiriten by {blog.author}</p>
              <div>{blog.body}</div>
          </article>


     )}
</div>
        

     );
}
 
export default BlogPost;