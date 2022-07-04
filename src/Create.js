import { useState } from "react";




const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"}, 
        body: Json.stringify(blog)}
        ). then(

        )

    }

    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
             <label>Blog Title: </label>
             <input 
             type="text" 
             required
             value={title}
             onChange  = {(e) => setTitle(e.target.value)}
              />

            <label>Blog Body </label>
             <textarea
             required
             value={body}
             onChange  = {(e) => setBody(e.target.value)}
             ></textarea>

             <label>
                 <select
                 value={author}
                 onChange ={(e)=>setAuthor(e.target.value)}
                 >
                     <option value='Mario'>Mario</option>
                     <option value='yoshi'>Yoshi</option>
                 </select>
                 <button>add Blog</button>
                 
                 
             </label>   


            
            </form>


        </div>


    );
}
export default Create;