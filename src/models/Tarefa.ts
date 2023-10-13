// import { Model, DataTypes } from "sequelize";
// import { sequelize } from '../instances/pg';

// export interface TarefaAttributes {
//     id: number;
//     nome: string;
//     done: boolean;
//     descricao: string | null; 
//     data: Date;
// }

// export interface TarefaInstance extends Model<TarefaAttributes>, TarefaAttributes {}

// const Tarefa = sequelize.define<TarefaInstance>('Tarefa', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nome: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     done: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: false
//     },
//     descricao: {
//         type: DataTypes.TEXT,
//         allowNull: true
//     },
//     data: {
//         type: DataTypes.DATE,
//         allowNull: false
//     }
// });

// export default Tarefa;
