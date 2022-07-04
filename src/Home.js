import { useState , useEffect} from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const  Home = () => {


   const {Data: blogs, isPending, deleteBlog} = useFetch('http://localhost:8000/blogs')



   

    return ( 
        <div className="home">
            

            {isPending && <div>is loauding .......</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>}
           
        </div>
     );
}
 
export default Home;