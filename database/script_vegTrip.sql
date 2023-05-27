CREATE DATABASE vegTrip;
USE vegTrip;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(90),
    senha VARCHAR(20),
    sexo CHAR(1),
    dtNac DATE,
    experiencia VARCHAR(45)
);

ALTER TABLE usuario ADD CONSTRAINT chkSexo CHECK (sexo IN ('F','M'));
ALTER TABLE usuario ADD CONSTRAINT chkExp CHECK (experiencia IN ('iniciante', 'pouco', 'medio', 'experiente'));

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
    foto VARCHAR(45),
    modo_preparo TEXT,
    dt_criacao DATETIME default current_timestamp,
    fkTipoDieta_receitas INT,
    CONSTRAINT const_fkTipoDietaReceita FOREIGN KEY (fkTipoDieta_receitas) 
		REFERENCES tipoDieta (idTipoDieta)
);

INSERT INTO tipoDieta VALUES 
	(NULL, 'Lacto-ovo-vegetariana'),
    (NULL, 'Ovo-vegetariana'),
    (NULL, 'Lacto-vegetariana'),
    (NULL, 'Vegana');
