CREATE DATABASE vegTrip;
USE vegTrip;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(90),
    senha VARCHAR(20),
    genero CHAR(1),
    dtNac DATE,
    dataRegistro DATETIME default current_timestamp,
    experiencia VARCHAR(45),
     CONSTRAINT chkSexo CHECK (genero IN ('F','M', 'O')),
     CONSTRAINT chkExp CHECK (experiencia IN ('iniciante', 'pouco', 'medio', 'experiente'))
);


ALTER TABLE usuario ADD COLUMN fkAdm INT;
ALTER TABLE usuario ADD CONSTRAINT const_fkAdm FOREIGN KEY (fkAdm) REFERENCES usuario (idUsuario);


CREATE TABLE tipoDieta (
	idTipoDieta INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

ALTER TABLE usuario ADD COLUMN fkTipoDieta INT;
ALTER TABLE usuario ADD CONSTRAINT const_fkTipoDieta FOREIGN KEY (fkTipoDieta) 
	REFERENCES tipoDieta(idTipoDieta);

CREATE TABLE receitas(
	idReceitas INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    descricao TEXT,
    foto VARCHAR(255),
    modo_preparo TEXT,
    dt_criacao DATETIME default current_timestamp,
    fkTipoDieta_receitas INT,
    ingredientes TEXT,
    CONSTRAINT const_fkTipoDietaReceita FOREIGN KEY (fkTipoDieta_receitas) 
		REFERENCES tipoDieta (idTipoDieta)
);


INSERT INTO tipoDieta VALUES 
	(NULL, 'Lacto-ovo-vegetariana'),
    (NULL, 'Ovo-vegetariana'),
    (NULL, 'Lacto-vegetariana'),
    (NULL, 'Vegana');
    
UPDATE usuario SET fkAdm = 1 WHERE idUsuario = 1;
