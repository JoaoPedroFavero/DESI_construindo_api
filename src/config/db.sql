CREATE DATABASE lojinha;
USE lojinha;

CREATE TABLE produtos(
	id_produto INT AUTO_INCREMENT UNIQUE NOT NULL PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    marca VARCHAR(250) NOT NULL,
    preco DECIMAL(10,2) CHECK(preco > 0)
);

INSERT INTO produtos (nome, marca, preco) VALUES
('Notebook', 'Samsumg', 4500.00),
('Mouse', 'Dell', 100.00),
('Teclado', 'Redragon', 380.00);

SELECT * FROM produtos;

CREATE TABLE clientes(
	id_cliente INT AUTO_INCREMENT UNIQUE NOT NULL PRIMARY KEY,
    nome VARCHAR(250) NOT NULL, 
    email VARCHAR(250) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

INSERT INTO clientes (nome, email, telefone) VALUES
('Alfredo', 'alfredo@gmail.com', '1111111111'),
('Bento', 'bento@gmail.com', '2222222222');