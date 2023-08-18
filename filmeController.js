import { Filme } from "../models/Filme.js"

export async function filmeIndex(req, res){
    try {
        const filmes = await Filme.findAll()
        res.status(200).json(filmes)
    } catch (error) {
        res.status(400).send(error)
    }


}