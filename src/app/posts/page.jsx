import { getPost } from "@/services/postsAPi";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata={
    title:{
        absolute:"posts"
    },
    description:"posts data is included"
}



const PostsPage =async () => {
    const postsData=await getPost()
    // console.log(postsData)

    // ---------------- redirect route --------------
    // if(postsData){
    //     redirect(`/posts/${postsData[0].id}`)
    // }

    return (
        <div >
            <h1 className="text-center text-3xl text-yellow-500 my-8">this is posts page</h1>
            <div className="grid grid-cols-4 gap-2">
            {
                postsData.slice(0,20).map(post=><div key={post.id} className="border border-green-400 p-8">
                    <h1>title : {post.title}</h1>
                    <p>description : {post.body}</p>
                    <button className="bg-green-400 px-4 py-2"><Link href={`/posts/${post.id}`}>see details</Link></button>
                </div>)
            }
            </div>
        </div>
    );
};

export default PostsPage;