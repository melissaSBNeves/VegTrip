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

DESC receitas;	



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
    
SELECT * FROM receitas;	
UPDATE receitas SET   foto = '11f99281b48b1b03950152f1a0256b970f97e2fc11ddf45addd53a6dba91c3e19c921b1a9f32bdd055456248d46abc50100cb1611a6c4867990350279ed91137.jpg'   WHERE idReceitas = 3;



SELECT * FROM usuario;

SELECT * FROM usuario WHERE email = 'melissa@gmail.com' AND senha = 'melissa' AND fkAdm = 1;

UPDATE usuario SET fkAdm = 1 WHERE idUsuario = 1;
