const db = require(`../config/database`);

const buscarTodos = async() =>{
    const [resultado] = await db.query(
        "SELECT * FROM clientes"
    );

    return resultado;
}

const buscarPorId = async(id) =>{
    const [resultado] = await db.query(
        "SELECT * FROM clientes WHERE id_cliente = ?",
        [id]
    );

    return resultado[0];
}

const criar = async(nome, email, telefone) => {
    const [resultado] = await db.query(
        "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)",
        [nome, email, telefone]
    );

    return {
        id: resultado.insertId,
        nome, 
        email, 
        telefone
    }
}

const editar = async(id, nome, email, telefone) => {
    await db.query(
        "UPDATE clientes SET nome=?, email=?, telefone=? WHERE id = ?",
        [nome, email, telefone, id]
    );

    return {
        id,
        nome, 
        email, 
        telefone
    }
}

const excluir = async(id) =>{
    const [resultado] = await db.query(
        "DELETE FROM clientes WHERE id_cliente = ?",
        [id]
    );

    return resultado.affectedRows;
}

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
}
