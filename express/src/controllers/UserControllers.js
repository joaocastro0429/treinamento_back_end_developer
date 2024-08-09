
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
]


const getUsers = (request, response) => {
    response.json(users)

}

const listUsers = (request, response) => {
    const { id } = request.params
    let found = false
    users.map((valor) => {
        if (valor.id == id) {
            found = true
            return response.json(valor)
        }
    })
    if (!found) {
        return response.status(404).json({ message: "id não encontrado" })
    }

}

const createUsers = (request, response) => {
    const user = request.body;
    const { name, id } = user;

    // Verifica se o nome foi fornecido
    if (!name) {
        return response.status(400).json({ message: "O nome do usuário é obrigatório" });
    }


    // Verifica se o usuário com o mesmo nome já existe
    const usuarioExistente = users.find(item => item.name === name);
    if (usuarioExistente) {
        return response.status(400).json({ message: "Usuário já existe" });
    }


    // Adiciona o novo usuário ao array
    users.push(user);
    response.status(201).json(user);
};

const updateUsers = (request, response) => {
    const { id } = request.params;  // ID do usuário a ser atualizado
    const { name } = request.body;  // Novo nome para o usuário

    // Verifica se o nome foi fornecido
    if (!name) {
        return response.status(400).json({ message: "O nome do usuário é obrigatório" });
    }
    // Encontra o índice do usuário a ser atualizado
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    // Se o usuário não for encontrado
    if (userIndex === -1) {
        return response.status(404).json({ message: "Usuário não encontrado" });
    }

    // Atualiza o nome do usuário
    users[userIndex].name = name;

    // Retorna o usuário atualizado
    response.json(users[userIndex]);

};


const deleteUser = (request, response) => {
    const { id } = request.params
    const userIndex = users.findIndex(user => user.id === parseInt(id))
    users.splice(userIndex, 1)

    response.status(404).json()

}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUser,
    listUsers
}

