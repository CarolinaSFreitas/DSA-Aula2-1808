import { Filme } from "../models/Filme.js"

export async function filmeIndex(req, res) {
    try {
        const filmes = await Filme.findAll()
        res.status(200).json(filmes)
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function filmeCreate(req, res) {
    const { titulo, genero, duracao, preco, datalan } = req.body()

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