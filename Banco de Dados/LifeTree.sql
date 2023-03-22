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
	perfil varbinary(max)null,
	statusCliente varchar(20)not null,
	primary key(id)
)

create table Endereco(
	id int identity,
	Lagradouro varchar(250)not null,
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
	perfil2 varbinary(MAX)null,
	CNPJ varchar(199)not null,
	Email varchar(150)not null,
	Tel char(13)not null,
	Informacao varchar(250)null,
	CEP char(8)not null,
	City varchar(50)not null,
	Bairro varchar(100)not null,
	statusFornecedor varchar(20)not null,
	primary key(id)
)

create table Entregador
(	id int identity,
	Nome varchar(150)not null,
	Perfil varbinary(MAX)not null,
	CNH varchar(11)not null,
	Tp_Veiculo Varchar(70)not null,
	statusEntregador varchar(20),
	primary key(id)
)

create table tpProduto
(	id int identity,
	TipodeProduto varchar(150)not null,
	primary key(id)
)

insert into tpProduto(TipodeProduto)
values('Chá e Infusões');
insert into tpProduto(TipodeProduto)
values('A Granel');
insert into tpProduto(TipodeProduto)
values('Vitaminas e Suplementos');
insert into tpProduto(TipodeProduto)
values('Mercearia e Empório');
insert into tpProduto(TipodeProduto)
values('Bem estar e Beleza');
insert into tpProduto(TipodeProduto)
values('Refrigferados');
insert into tpProduto(TipodeProduto)
values('Promoções');
insert into tpProduto(TipodeProduto)
values('Sem Açucar');
insert into tpProduto(TipodeProduto)
values('Sem Glútem');
insert into tpProduto(TipodeProduto)
values('Sem Lactose');
insert into tpProduto(TipodeProduto)
values('Orgânico');
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
	layout varchar(MAX),
	Marca varchar(100)not null,
	Disponibilidade int,
	Fornecedor_id int not null,
	tpProduto_id int not null,
	mcProduto_id int not null,
	Complemento varchar(250)not null
	primary key(id),
	foreign key(Fornecedor_id) 
		references Fornecedor(id),
	foreign key(tpProduto_id)
		references tpProduto(id),
	foreign key(mcProduto_id)
		references mcProduto(id)
)

create table Imagem(
	id int identity,
	Nome_arquivo varchar(100)not null,
	caminho varchar(max)not null,
	statusImage varchar(20)not null,
	produto_id int not null,
	primary key(id),
	foreign key(produto_id)
	references Produto(id)
)

create table Form_Pagamento
(	id int identity,
	Fm_pagamento varchar(50)not null,
	statusPagamento varchar(20)not null,
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


create table Entrega
(	id int identity,
	Entregador_id int not null,
	Cliente_id int not null,
	itemVenda_id int not null,
	Endereco_id int not null,
	statusEntrega varchar(20)not null,
	primary key(id),
	foreign key(Entregador_id)
		references Entregador(id),
	foreign key(Cliente_id)
		references Cliente(id),
	foreign key(itemVenda_id)
		references ItemVenda(id),
	foreign key(Endereco_id)
		references Endereco(id)
)

--Consulta todos os(*) campos
--E todos os registros da tabela
--select*from tpProduto
