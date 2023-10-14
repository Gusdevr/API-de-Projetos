
import { Request, Response } from 'express'
import { Projeto } from '../models/Projeto'

export const all = async (req: Request, res: Response) => {
    try {
        const list = await Projeto.findAll();
        res.json({ list });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao recuperar projetos.' });
    }
}

export const findById = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        let projeto = await Projeto.findByPk(id);

        if (projeto) {
         
            res.json({ item: projeto });
        } else {
            res.status(404).json({ erro: 'Projeto não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao recuperar o projeto' });
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        const { nome, descricao, data_inicio } = req.body;
        const novoProjeto = await Projeto.create({
            nome,
            descricao,
            data_inicio,
            done: req.body.done ? true : false
        });
        res.status(201).json(novoProjeto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao adicionar projeto.' });
    }
}



export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        let projeto = await Projeto.findByPk(id);

        if (projeto) {
            if (req.body.nome) {
                projeto.nome = req.body.nome;
            }

            if (req.body.done !== undefined) {
                projeto.done = req.body.done === 'true' || req.body.done === '1';
            }

            await projeto.save();
            res.json({ item: projeto });
        } else {
            res.status(404).json({ erro: 'Projeto não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar o projeto' });
    }
}

export const remove = async (req: Request, res: Response) => {
    let id: string = req.params.id
    let projeto = await Projeto.findByPk(id)
    if(projeto) {
     await projeto.destroy() 
     res.json(true)

    } else {
        res.json(false)
    }
   
 }
