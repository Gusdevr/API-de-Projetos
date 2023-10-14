import { Router } from "express"

import * as ProjetoController from '../controllers/projeto.controller';
import * as TarefaController from '../controllers/tarefa.controller'; 

const router = Router()

router.get('/projeto', ProjetoController.all)
router.get('/projeto/:id', ProjetoController.findById)
router.post('/projeto', ProjetoController.add)
router.put('/projeto/:id', ProjetoController.update)
router.delete('/projeto/:id', ProjetoController.remove)


router.get('/tarefa', TarefaController.all);
router.post('/tarefa', TarefaController.add);
router.put('/tarefa/:id', TarefaController.update);
router.delete('/tarefa/:id', TarefaController.remove);

export default router