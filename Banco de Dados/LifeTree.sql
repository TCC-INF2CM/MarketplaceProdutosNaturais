use master if exists(select * from SYS.databases where name = 'Livraria1')

USE Livraria1

create table cliente( 

id INT IDENTITY, 
nome VARCHAR(100)NOT NULL, 
cpf CHAR(11) NOT NULL, 
email VARCHAR(100) NOT NULL, 
cep CHAR(8) NOT NULL, 
senha VARCHAR(15) NOT NULL 
PRIMARY KEY (id) 

) 

CREATE TABLE Livros( 

id INT IDENTITY,  
ISBM VARCHAR(100) NOT NULL, 
sinopse CHAR(11) NOT NULL, 
estoque VARCHAR(100)NOT NULL, 
editora VARCHAR(30) NOT NULL, 
autor VARCHAR(30)NOT NULL 
PRIMARY KEY (id) 

) 

CREATE TABLE Editora(

Id INT IDENTITY, 
Livros_id INT  NOT NULL 
PRIMARY KEY(id), 
FOREIGN KEY (Livros_id)
REFERENCES Livros (id)

) 


CREATE TABLE FormaPagamento (

Id INT IDENTITY, 
formPgto VARCHAR(50) NOT NULL, 
dataComp DATE NOT NULL, 
PRIMARY KEY(id) 


) 

CREATE TABLE Venda( 

id INT IDENTITY, 
valor DECIMAL (10,2) NOT NULL, 
obs  VARCHAR(200) NULL, 
cliente_id INT NOT NULL, 
livro_id INT NOT NULL,
FormaPagamento_id INT NOT NULL
PRIMARY KEY(id) 
FOREIGN KEY (cliente_id) REFERENCES Cliente (id), 
FOREIGN KEY (FormaPagamento_id) REFERENCES FormaPagamento(id),
FOREIGN KEY (livro_id)  REFERENCES Livros(id) 

) 
create table ItemVenda(
	id int identity,
	Quant int not null,
	StatusItem varchar(20) not null,
	Livro_id int not null,
	Venda_id int not null,
	Cliente_id int not null,
	primary key(id),
	foreign key(Cliente_id) 
		references Cliente(id),
	foreign key(Livro_id)
		references Livros(id),
	foreign key(Venda_id)
		references Venda(id)
)