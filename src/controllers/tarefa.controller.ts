import { Request, Response } from 'express';
import Tarefa from '../models/Tarefa';

export const all = async (req: Request, res: Response) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.json({ tarefas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao recuperar tarefas.' });
    }
};

export const add = async (req: Request, res: Response) => {
    try {
        const { projeto_id, titulo, descricao, data_conclusao, concluida } = req.body;
        const novaTarefa = await Tarefa.create({
            projeto_id,
            titulo,
            descricao,
            data_conclusao,
            concluida: concluida ? true : false
        });
        res.status(201).json(novaTarefa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao adicionar tarefa.' });
    }
};

export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        let tarefa = await Tarefa.findByPk(id);

        if (tarefa) {
            if (req.body.titulo) {
                tarefa.titulo = req.body.titulo;
            }

            if (req.body.descricao) {
                tarefa.descricao = req.body.descricao;
            }

            if (req.body.data_conclusao) {
                tarefa.data_conclusao = req.body.data_conclusao;
            }

            if (req.body.concluida !== undefined) {
                tarefa.concluida = req.body.concluida === 'true' || req.body.concluida === '1';
            }

            await tarefa.save();
            res.json({ item: tarefa });
        } else {
            res.status(404).json({ erro: 'Tarefa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar a tarefa' });
    }
};

export const remove = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        const tarefa = await Tarefa.findByPk(id);

        if (tarefa) {
            await tarefa.destroy();
            res.json({});
        } else {
            res.status(404).json({ erro: 'Tarefa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao excluir a tarefa' });
    }
};
