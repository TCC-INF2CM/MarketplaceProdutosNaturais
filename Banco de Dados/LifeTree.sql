use master if exists(select * from SYS.databases where name = 'LifeTree')
drop database LifeTree
--criar banco de dados
create database LifeTree
GO
--Acessar bd
use LifeTree
Go

--criar tabela

create table Cargo(
	id int identity,
	nmCargo varchar(100) not null,
	primary key(id)

)

create table ADM
(
	id int identity,
	Nome varchar(150)not null,
	Email varchar(200)not null,
	senha varchar(150)not null,
	primary key(id),
	cargo_id INT NOT NULL,
	FOREIGN KEY (cargo_id) REFERENCES Cargo(id)
)

create table Cliente
(	
	id int identity,
	Nome varchar(150)not null,
	CPF char(11)not null,
	dtNasc date not null,
	Tel char(13)not null,
	Email varchar(200)not null,
	senha varchar(150)not null,
	img varbinary(max)null,
	statusCliente varchar(20)not null,
	primary key(id)
)

create table Endereco(
	id int identity,
	Logradouro varchar(250)not null,
	CEP char(8)not null,
	NumCasa char(5)not null,
	Bairro varchar(180)not null,
	Cidade varchar(50)not null,
	UF char(2)not null,
	Complemento varchar(250)null,
	primary key(id),
	Cliente_id int not null,
	foreign key(Cliente_id) 
		references Cliente(id)
)

create table Funcionario
(	
   id   INT IDENTITY,
   Nome VARCHAR(100)NOT NULL,
   CPF  CHAR(11)NOT NULL,
   RG VARCHAR(12)NOT NULL,
   Sexo CHAR(1)NOT NULL,
   dataNasc DATE NOT NULL,
   Img VARBINARY(MAX)NULL,
   telefone VARCHAR(9)NOT NULL,
   Email VARCHAR(100)NULL, 
   Logradouro VARCHAR(100)NOT NULL, -- nome da rua, avenida e etc
   Numero_resid VARCHAR(10)NOT NULL,
   Complemento VARCHAR(100)NULL,
   CEP CHAR(8)NOT NULL,
   Bairro VARCHAR(100)NOT NULL,
   Cidade VARCHAR(100)NOT NULL,
   UF CHAR(2)NOT NULL,
   cargo_id INT NOT NULL,

   PRIMARY KEY (id),
   FOREIGN KEY (cargo_id) REFERENCES Cargo(id)
)

create table tpProduto
(	id int identity,
	TpProduto varchar(150)not null,
	primary key(id)
)

insert into tpProduto(TpProduto)
values('Chá e Infusões');
insert into tpProduto(TpProduto)
values('A Granel');
insert into tpProduto(TpProduto)
values('Vitaminas e Suplementos');
insert into tpProduto(TpProduto)
values('Mercearia e Empório');
insert into tpProduto(TpProduto)
values('Bem-estar e Beleza');
insert into tpProduto(TpProduto)
values('Refrigerados');
insert into tpProduto(TpProduto)
values('Promoções');
insert into tpProduto(TpProduto)
values('Sem Açucar');
insert into tpProduto(TpProduto)
values('Sem Glúten');
insert into tpProduto(TpProduto)
values('Sem Lactose');
insert into tpProduto(TpProduto)
values('Orgânico');
insert into tpProduto(TpProduto)
values('Vegano');
insert into tpProduto(TpProduto)
values('Vegetariano');
insert into tpProduto(TpProduto)
values('Baixo carboidrato');


create table mcProduto
(	id int identity,
	Marca varchar(100)not null,
	primary key(id)
)

create table Produto
(	id int identity,
	Nome varchar(100)not null,
	Preco decimal(10,2)not null,
	Imagem varchar(MAX),
	Quantidade int,
	cod_barra varchar(13)not null,
	Peso decimal(6,2),
	tpProduto_id int not null,
	mcProduto_id int not null,
	Complemento varchar(250)not null
	primary key(id),
	foreign key(tpProduto_id)
		references tpProduto(id),
	foreign key(mcProduto_id)
		references mcProduto(id)
)

create table Imagem(
	id int identity,
	nomeImg varchar(100)not null,
	Img varchar(max)not null,
	StatusImg varchar(20)not null,
	produto_id int not null,
	primary key(id),
	foreign key(produto_id)
	references Produto(id)
)

create table Form_Pagamento
(	id int identity,
	Fm_pagamento varchar(50)not null,
	StatusPg varchar(20)null,
	primary key(id)
)
insert Form_Pagamento(Fm_pagamento)
values('Cartão de Debito')
insert Form_Pagamento(Fm_pagamento)
values('Cartão de Credito')
insert Form_Pagamento(Fm_pagamento)
values('Pix')
insert Form_Pagamento(Fm_pagamento)
values('Boleto 3x')
insert Form_Pagamento(Fm_pagamento)
values('Dinheiro')


create table Venda
(	id int identity,
	TT_compra decimal(10,2)not null,
	Dt_Venda date not null,
	Pagamento_id int not null,
	Cliente_id int not null,
	Produto_id int not null,
	primary key(id),
	foreign key(Pagamento_id) 
		references Form_pagamento(id),
	foreign key(Cliente_id) 
		references Cliente(id),
	foreign key(Produto_id)
		references Produto(id)
)

create table ItemVenda(
	id int identity,
	Quant int not null,
	StatusItem varchar(20) not null,
	Produto_id int not null,
	Venda_id int not null,
	Cliente_id int not null,
	primary key(id),
	foreign key(Cliente_id) 
		references Cliente(id),
	foreign key(Produto_id)
		references Produto(id),
	foreign key(Venda_id)
		references Venda(id)
)

CREATE TABLE CUPOM(
	ID INT IDENTITY,
	NOME VARCHAR(10)NOT NULL,
	STATUSCP VARCHAR(20)NOT NULL,

	
)

--Consulta todos os(*) campos
--E todos os registros da tabela
--select*from tpProduto
