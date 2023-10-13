import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg'; 

export interface ProjetoInstance extends Model {
    id: number;
    nome: string;
    done: boolean;
    descricao: string | null; 
    data: Date;
}

export const Projeto = sequelize.define<ProjetoInstance>('Projeto', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER 
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'projetos',
    timestamps: false
});
