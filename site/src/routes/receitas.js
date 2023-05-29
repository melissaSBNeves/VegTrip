var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.get("/", function (req, res) {
    receitaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    receitaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    receitaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    receitaController.pesquisarDescricao(req, res);
});

router.post("/publicar", function (req, res) {
    receitaController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    receitaController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    receitaController.deletar(req, res);
});

module.exports = router;