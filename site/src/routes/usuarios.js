var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/totalUsuarios", function (req, res) {
    usuarioController.totalUsuarios(req, res);
});

router.get("/desempenhoGeral", function (req, res) {
    usuarioController.desempenhoGeral(req, res);
});

router.get("/segmentadoPorGenero", function (req, res) {
    usuarioController.segmentadoPorGenero(req, res);
});

router.get("/segmentadoPorIdade", function (req, res) {
    usuarioController.segmentadoPorIdade(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;