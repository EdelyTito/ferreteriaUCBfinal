-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-06-04 20:55:26.648

-- tables
-- Table: Categorias
CREATE TABLE Categorias (
    id_categoria int  NOT NULL,
    nombre_categoria varchar(20)  NOT NULL,
    CONSTRAINT Categorias_pk PRIMARY KEY (id_categoria)
);

-- Table: Productos
CREATE TABLE Productos (
    id_producto int  NOT NULL,
    nombre_producto varchar(50)  NOT NULL,
    descripcion varchar(200)  NOT NULL,
    cantidad_inventario int  NOT NULL,
    precio decimal(6,2)  NOT NULL,
    id_categoria int  NOT NULL,
    CONSTRAINT Productos_pk PRIMARY KEY (id_producto)
);

-- Table: admin
CREATE TABLE admin (
    id_admin int  NOT NULL,
    usuario varchar(20)  NOT NULL,
    contrasena varchar(2)  NOT NULL,
    CONSTRAINT admin_pk PRIMARY KEY (id_admin)
);

-- foreign keys
-- Reference: Productos_Categorias (table: Productos)
ALTER TABLE Productos ADD CONSTRAINT Productos_Categorias FOREIGN KEY Productos_Categorias (id_categoria)
    REFERENCES Categorias (id_categoria);

-- End of file.

