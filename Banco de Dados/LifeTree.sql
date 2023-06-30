use master if exists(select * from SYS.databases where name = 'LifeTree')
drop database LifeTree
--criar banco de dados
create database LifeTree
GO
--Acessar bd
use LifeTree
Go
--criar tabela
CREATE TABLE Cupom(
	ID BIGINT IDENTITY,
	NOME VARCHAR(10)NOT NULL,
	STATUSCP VARCHAR(20)NOT NULL,
	Primary key(id)
)


create table Cliente
(	
	id bigint identity,
	Nome varchar(150)not null,
	CPF char(11)not null,
	dtNasc date not null,
	Tel char(13)not null,
	Email varchar(200)not null,
	senha varchar(150)not null,
	img varbinary(max)null,
	statusCliente varchar(20)not null,
	Cupom_id bigint not null,
	primary key(id),
	foreign key(Cupom_id)
		references Cupom(id)
)

create table Endereco(
	id bigint identity,
	Logradouro varchar(250)not null,
	CEP char(8)not null,
	NumCasa char(5)not null,
	Bairro varchar(180)not null,
	Cidade varchar(50)not null,
	UF char(2)not null,
	Complemento varchar(250)null,
	primary key(id),
	Cliente_id bigint not null,
	foreign key(Cliente_id) 
		references Cliente(id)
)

create table Funcionario
(	
   id   BIGINT IDENTITY,
   Nome VARCHAR(100)NOT NULL,
   CPF  CHAR(11)NOT NULL,
   RG VARCHAR(12)NOT NULL,
   Sexo CHAR(1)NOT NULL,
   dataNasc DATE NOT NULL,
   telefone VARCHAR(9)NOT NULL,
   Email VARCHAR(100) not NULL, 
   Senha varchar(150)not null,
   NivelAcess varchar(10)null,
   statusFunc varchar(20)not null,
   PRIMARY KEY (id)
)

create table tpProduto
(	id BIGint identity,
	TpProduto varchar(150)not null,
	primary key(id)
)

insert into tpProduto(TpProduto)
values('Ch� e Infus�es');
insert into tpProduto(TpProduto)
values('A Granel');
insert into tpProduto(TpProduto)
values('Vitaminas e Suplementos');
insert into tpProduto(TpProduto)
values('Mercearia e Emp�rio');
insert into tpProduto(TpProduto)
values('Bem-estar e Beleza');
insert into tpProduto(TpProduto)
values('Refrigerados');
insert into tpProduto(TpProduto)
values('Promo��es');
insert into tpProduto(TpProduto)
values('Sem A�ucar');
insert into tpProduto(TpProduto)
values('Sem Gl�ten');
insert into tpProduto(TpProduto)
values('Sem Lactose');
insert into tpProduto(TpProduto)
values('Org�nico');
insert into tpProduto(TpProduto)
values('Vegano');
insert into tpProduto(TpProduto)
values('Vegetariano');
insert into tpProduto(TpProduto)
values('Baixo carboidrato');


create table mcProduto
(	id bigint identity,
	Marca varchar(100)not null,
	primary key(id)
)

create table Produto
(	id bigint identity,
	Nome varchar(100)not null,
	Preco decimal(10,2)not null,
	Imagem varchar(MAX),
	Quantidade int,
	cod_barra varchar(13)not null,
	Peso decimal(6,2),
	tpProduto_id bigint not null,
	mcProduto_id bigint not null,
	Complemento varchar(250)not null
	primary key(id),
	foreign key(tpProduto_id)
		references tpProduto(id),
	foreign key(mcProduto_id)
		references mcProduto(id)
)

create table Imagem(
	id bigint identity,
	nomeImg varchar(100)not null,
	Img varchar(max)not null,
	StatusImg varchar(20)not null,
	produto_id bigint not null,
	primary key(id),
	foreign key(produto_id)
	references Produto(id)
)

create table Form_Pagamento
(	id bigint identity,
	Fm_pagamento varchar(50)not null,
	StatusPg varchar(20)null,
	primary key(id)
)
insert Form_Pagamento(Fm_pagamento)
values('Cart�o de Debito')
insert Form_Pagamento(Fm_pagamento)
values('Cart�o de Credito')
insert Form_Pagamento(Fm_pagamento)
values('Pix')
insert Form_Pagamento(Fm_pagamento)
values('Boleto 3x')
insert Form_Pagamento(Fm_pagamento)
values('Dinheiro')


create table Venda
(	id bigint identity,
	TT_compra decimal(10,2)not null,
	Dt_Venda date not null,
	Pagamento_id bigint not null,
	Cliente_id bigint not null,
	primary key(id),
	foreign key(Pagamento_id) 
		references Form_pagamento(id),
	foreign key(Cliente_id) 
		references Cliente(id)
)

create table ItemVenda(
	id bigint identity,
	Quant int not null,
	StatusItem varchar(20) not null,
	Produto_id bigint not null,
	Venda_id bigint not null,
	primary key(id),
	foreign key(Produto_id)
		references Produto(id),
	foreign key(Venda_id)
		references Venda(id)
)
