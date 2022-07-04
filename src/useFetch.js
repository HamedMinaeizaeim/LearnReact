import { useEffect, useState } from "react"



const useFetch=(url) =>{
    const [Data, setData] = useState(null )
    const [isPending, setisPending] = useState(true)

    const deleteBlog=(id)=>{
        const newBlog = Data.filter(data => data.id !== id)
        setData(newBlog)
   }


    useEffect(()=>{
        fetch(url).
        then((res) => {
           
            return res.json();
           
        }).then(Data => {setData(Data)
        });
        setisPending(false);
     },[url])

     return {Data, isPending, deleteBlog}



}

export default useFetch;