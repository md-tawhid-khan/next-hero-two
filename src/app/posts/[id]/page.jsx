import React from 'react';

const getSingleDataDetails=async(id)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=res.json()
    return data
}

export const generateMetadata = async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postDetails= await res.json()
return {
    title:{
        absolute:`${postDetails.title}`
    },
   description:postDetails.body,
   keywords:postDetails.body.split(' ')
}
}

const PostDetailsPage = async({params}) => {
      const {title, body , userId}=await getSingleDataDetails(params.id)
    return (
        <div>
            <h1>userId: {userId}</h1>
            <h1>title : {title} </h1>
            <p>description : {body}</p>
        </div>
    );
};

export default PostDetailsPage;