
const users=[
    {id:1,name:"John"},
    {id:2,name:"Jane"},
    {id:3,name:"Bob"}
]


const  getUsers=(request, response)=>{
    response.json(users)

}

const createUsers=(request,response)=>{
    const user=request.body
    users.push(user)
    response.status(201).json(user)
}

const updateUsers=(request,response)=>{
    const {id}=request.params
    const {name}=request.body
    const userIndex=users.findIndex(user=>user.id===parseInt(id))
    if(userIndex){
        users[userIndex].name=name

        response.json(users[userIndex])
    }

}

const deleteUser=(request,response)=>{
    const {id}=request.params
    const userIndex=users.findIndex(user=>user.id===parseInt(id))
    users.splice(userIndex,1)

    response.status(404).json()

}

module.exports={
    getUsers,
    createUsers,
    updateUsers,
    deleteUser
}

