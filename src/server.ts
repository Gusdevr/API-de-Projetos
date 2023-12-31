import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
// server.use(express.urlencoded({ extended: true })); 

server.use(express.json());

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

const PORT = process.env.PORT || 4000; 

server.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
