USE vegTrip;

-- LISTAR USUÁRIOS 
CREATE VIEW view_listar_usuarios AS
SELECT idUsuario AS 'id',
		usuario.nome AS 'nome',
        email AS 'email',
        genero AS 'genero',
        timestampdiff(YEAR, dtNac, now()) AS 'idade',
        experiencia AS 'experiencia',
        tipoDieta.nome AS 'tipoDieta' FROM usuario JOIN tipoDieta ON fkTipoDieta = idTipoDieta;
        
SELECT * FROM view_listar_usuarios;


    


-- TOTAL USUÁRIOS 
SELECT count(idUsuario) AS 'totalUsuarios'FROM usuario;



-- QUANTIDADE DE USUÁRIOS POR DIA 
SELECT DATE_FORMAT(dataRegistro, '%m-%d') AS mes_registro,
		count(idUsuario) AS qtd_registro FROM usuario GROUP BY mes_registro;

-- QUANTIDADE DE USUÁRIOS POR GÊNERO
SELECT genero AS genero, count(idUsuario) FROM usuario GROUP BY genero;

-- QUANTIDADE DE USUÁRIOS POR IDADE 
SELECT timestampdiff(YEAR, dtNac, now()) AS 'idade', count(idUsuario) AS totalUsuario
	FROM usuario GROUP BY idade ORDER BY totalUsuario DESC
    limit 5;
    

