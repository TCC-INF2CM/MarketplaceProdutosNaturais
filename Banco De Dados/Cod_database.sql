create database LifeTree
use LifeTree
create table Cliente
(	id int identity,
	Nome varchar(100)not null,
	CPF char(11)not null,
	dtNasc date not null,
	Tel char(13)not null,
	Email varchar(150)not null,
	Lagradouro varchar(250)not null,
	CEP char(8)not null,
	NumCasa char(5)not null,
	Bairro varchar(180)not null,
	City varchar(50)not null,
	UF char(2)not null,
	Complemento varchar(250)null,
	primary key(id)
)

create table Fornecedor
(	id int identity,
	Nome varchar(150)not null,
	CNPJ varchar(199)not null,
	Email varchar(150)not null,
	Tel char(13)not null,
	Informacao varchar(250)null,
	CEP char(8)not null,
	City varchar(50)not null,
	Bairro varchar(100)not null,
	primary key(id)
)

create table tpProduto
(	id int identity,
	TipodeProduto varchar(150)not null,
	primary key(id)
)

create table Produto
(	id int identity,
	Nome varchar(100)not null,
	Preco decimal(10,2)not null,
	Fornecedor_id int not null,
	tpProduto_id int not null,
	Complemento varchar(250)not null
	primary key(id),
	foreign key(Fornecedor_id) 
		references Fornecedor(id),
	foreign key(tpProduto_id)
		references tpProduto(id)
)

create table Form_Pagamento
(	id int identity,
	Fm_pagamento varchar(50)not null,
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

create table Venda
(	id int identity,
	TT_compra decimal(10,2)not null,
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
