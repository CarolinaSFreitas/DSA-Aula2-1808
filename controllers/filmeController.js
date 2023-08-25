import { Filme } from "../models/Filme.js"

export async function filmeIndex(req, res) {
    try {
        const filmes = await Filme.findAll()
        res.status(200).json(filmes)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de create

export async function filmeCreate(req, res) {
    const { titulo, genero, duracao, preco, datalan } = req.body

    if (!titulo || !genero || !duracao || !preco || !datalan) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const filme = await Filme.create({
            titulo, genero, duracao, preco, datalan
        })
        res.status(201).json(filme)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de update/alterar

export async function filmeUpdate(req, res) {
    const { id } = req.params

    const { titulo, genero, duracao, preco, datalan } = req.body

    if (!titulo || !genero || !duracao || !preco || !datalan) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const filme = await Filme.update({
            titulo, genero, duracao, preco, datalan
        }, {
            where: { id }
        })
        res.status(200).json(filme)
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de deletar

export async function filmeDelete(req, res) {
    const { id } = req.params

    try {
        await Filme.destroy({
            where: { id }
        })
        res.status(200).json({ msg: "Ok! Removido com sucesso :)" })
    } catch (error) {
        res.status(400).send(error)
    }
}

