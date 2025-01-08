export async function PATCH(request,{params}){
    const body =await request.json()
    // console.log(params)
    const index=comments.findIndex(c=>c.id===parseInt(params.id))
    // console.log(index)

    comments[index]={
        id: params.id,
        text:body.text
    }

return Response.json({
 message:'updated successfully',
 comments
})
}

export async function DELETE(request, {params}){
    const newComments= comments.filter(c=>c.id !== parseInt(params.id))
    return Response.json({
        message :"delete successfully",
        newComments
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