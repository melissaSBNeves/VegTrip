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
CREATE VIEW view_desempenho_geral AS
SELECT DATE_FORMAT(dataRegistro, '%m-%d') AS mes_registro,
		count(idUsuario) AS qtd_registro FROM usuario GROUP BY mes_registro;

SELECT * FROM view_desempenho_geral;
        

-- QUANTIDADE DE USUÁRIOS POR GÊNERO
SELECT genero AS genero, count(idUsuario) FROM usuario GROUP BY genero;

-- QUANTIDADE DE USUÁRIOS POR IDADE 
CREATE VIEW view_segmentado_idade AS
SELECT timestampdiff(YEAR, dtNac, now()) AS idade, count(idUsuario) AS totalUsuario
	FROM usuario GROUP BY idade ORDER BY totalUsuario DESC
    limit 5;
    
SELECT * FROM view_segmentado_idade;

DESC receitas;

CREATE VIEW view_receitas AS
	SELECT receitas.nome as nomeReceita,
			descricao as descricao,
            foto as foto,
            modo_preparo,
            ingredientes,
            tipoDieta.nome FROM receitas JOIN tipoDieta 
            ON idTipoDieta = fkTipoDieta_receitas;
	
SELECT * FROM view_receitas;
            


SELECT receitas.nome as nomeReceita,
			descricao as descricao,
            foto as foto,
            modo_preparo,
            ingredientes,
            tipoDieta.nome as dieta FROM receitas JOIN tipoDieta 
            ON idTipoDieta = fkTipoDieta_receitas
            WHERE idReceitas = 5;