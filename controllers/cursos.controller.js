const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const CursoController = {
    cadastrarCurso(req, res) {
        const {id, titulo, descricao, professor} = req.body;

        if(!id || !titulo || !descricao || !professor) {
            return res
            .status(400)
            .json({error: "Você precisa passar os atributos corretamente"});
        }
        listaDeCursos.push ({
            id,
            titulo,
            descricao,
            professor,
        })

        fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

        res.status(201).json({message: "Cadastro efetuado com sucesso!"})
    },
    listarCursos(req, res) {

        fs.readFileSync("./models/cursos.json");
        res.status(200);
        res.json(listaDeCursos);

    },
    deletarCurso(req, res) {
        const {id} = req.params;

        const novaListaDeCursos = listaDeCursos.filter((curso) => {
            return curso.id != id;
        })

        fs.writeFileSync("./models/cursos.json", JSON.stringify(novaListaDeCursos));

        res.status(201).json({message: "Item deletado com sucesso!"})
    }
};

module.exports = CursoController;
