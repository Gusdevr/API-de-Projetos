import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface TarefaAttributes {
    id?: number; // Torna a propriedade id opcional
    projeto_id: number;
    titulo: string;
    descricao: string | null;
    data_conclusao: Date;
    concluida: boolean;
}

export interface TarefaInstance extends Model<TarefaAttributes>, TarefaAttributes {}

const Tarefa = sequelize.define<TarefaInstance>('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    projeto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_conclusao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    concluida: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'tarefas',
    timestamps: false
});

export default Tarefa;
