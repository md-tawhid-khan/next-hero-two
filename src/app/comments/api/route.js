export async function GET(){
    return Response.json({
       comments
    },{
        headers:{
            'Set-Cookie':'theme=dark'
        }
    })
}
export async function POST(request){
    const newComments= await request.json()
    comments.push({
        id:comments.length+1,
        text: newComments.text 
    })
    return Response.json({
       comments
    })
}

const comments=[
    {
        id:1,
        text:'comment 1'
    },
    {
        id:2,
        text:'comment 2'
    },
    {
        id:3,
        text:'comment 3'
    },
    {
        id:4,
        text:'comment 4'
    },
]