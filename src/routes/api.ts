import { Router } from "express"

import * as ProjetoController from '../controllers/projeto.controller';
// import * as TarefaController from '../controllers/tarefa.controller'; 

const router = Router()

router.get('/projeto', ProjetoController.all)
router.post('/projeto', ProjetoController.add)
router.put('/projeto/:id', ProjetoController.update)
router.delete('/projeto/:id', ProjetoController.remove)


// router.get('/projeto/:id/tarefa', TarefaController.all); 
// router.post('/projeto/:id/tarefa', TarefaController.add); 
// router.put('/projeto/:idProjeto/tarefa/:idTarefa', TarefaController.update); 
// router.delete('/projeto/:idProjeto/tarefa/:idTarefa', TarefaController.remove); 

export default router