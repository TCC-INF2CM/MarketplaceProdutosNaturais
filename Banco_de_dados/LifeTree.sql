use master if exists(select * from SYS.databases where name = 'LifeTree')
drop database LifeTree
--criar banco de dados
create database LifeTree
GO
--Acessar bd
use LifeTree
Go

--criar tabela
create table Cliente
(	
	id int identity,
	Nome varchar(100)not null,
	CPF char(11)not null,
	dtNasc date not null,
	Tel char(13)not null,
	Email varchar(150)not null,
	imagem varchar(MAX)null,
	primary key(id)
)

create table Endereco(
	id int identity,
	Logradouro varchar(250)not null,
	CEP char(8)not null,
	NumCasa char(5)not null,
	Bairro varchar(180)not null,
	City varchar(50)not null,
	UF char(2)not null,
	Complemento varchar(250)null,
	primary key(id),
	Cliente_id int not null,
	foreign key(Cliente_id) 
		references Cliente(id)
)

create table Fornecedor
(	id int identity,
	Nome varchar(150)not null,
	imagem varchar(MAX)null,
	CNPJ varchar(199)not null,
	Email varchar(150)not null,
	Tel char(13)not null,
	Informacao varchar(250)null,
	CEP char(8)not null,
	Cidade varchar(50)not null,
	Bairro varchar(100)not null,
	primary key(id)
)

create table tpProduto
(	id int identity,
	TipodeProduto varchar(150)not null,
	primary key(id)
)

insert into tpProduto(TipodeProduto)
values('Ch� e Infus�es');
insert into tpProduto(TipodeProduto)
values('A Granel');
insert into tpProduto(TipodeProduto)
values('Vitaminas e Suplementos');
insert into tpProduto(TipodeProduto)
values('Mercearia e Emp�rio');
insert into tpProduto(TipodeProduto)
values('Refrigferados');
insert into tpProduto(TipodeProduto)
values('Promo��es');
insert into tpProduto(TipodeProduto)
values('Sem A�ucar');
insert into tpProduto(TipodeProduto)
values('Sem Gl�tem');
insert into tpProduto(TipodeProduto)
values('Sem Lactose');
insert into tpProduto(TipodeProduto)
values('Org�nico');
insert into tpProduto(TipodeProduto)
values('Vegano');
insert into tpProduto(TipodeProduto)
values('Vegetariano');
insert into tpProduto(TipodeProduto)
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
	imagem varchar(MAX),
	Quantidade int,
	Fornecedor_id int not null,
	tpProduto_id int not null,
	mcProduto_id int not null,
	Complemento varchar(250)null
	primary key(id),
	foreign key(Fornecedor_id) 
		references Fornecedor(id),
	foreign key(tpProduto_id)
		references tpProduto(id),
	foreign key(mcProduto_id)
		references mcProduto(id)
)

create table Form_Pagamento
(	id int identity,
	Fm_pagamento varchar(50)not null,
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

create table ItemVenda(
	id int identity,
	Quant int not null,
	StatusItem int not null,
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
 
create table Entrega
(	id int identity,
	Cliente_id int not null,
	itemVenda_id int not null,
	Endereco_id int not null,
	primary key(id),
	foreign key(Cliente_id)
		references Cliente(id),
	foreign key(itemVenda_id)
		references ItemVenda(id),
	foreign key(Endereco_id)
		references Endereco(id)
)

create table Entregador
(	id int identity,
	Nome varchar(150)not null,
	imagem varchar(MAX)not null,
	CNH varchar(11)not null,
	Tp_Veiculo Varchar(70)not null,
	Entrega_id int not null,
	primary key(id),
	foreign key(Entrega_id)
		references Entrega(id)
)

--Insert mcProduto(Marca)
--Values ('Le�o')
--Insert mcProduto(Marca)
--Values ('Dr.Oetker')
--Insert mcProduto(Marca)
--Values ('Desinch�')
--Insert mcProduto(Marca)
--Values ('Qualit�')
--Insert mcProduto(Marca)
--Values ('M�eTerra')

--Insert Produto(Nome, Complemento, Quantidade, Preco, tpProduto_id, mcProduto_id )
--Values ('Ch� Mate pcte/10Un', '', 20, 15.67, 1, 1 )
--Insert Produto(Nome, Complemento, Quantidade, Preco, tpProduto_id, mcProduto_id )
--Values ('Castanha d/ Par�', '5g por pacote', 500, 2.50, 2, 4 )


----select * from mcProduto
----select * from tpProduto
--select * from Produto