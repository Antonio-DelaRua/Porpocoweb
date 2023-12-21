import { DataTypes} from 'sequelize';
import db from '../db/connectiondb';

const Empleado = db.define('empleados', {
    name: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    fechaDalta: {
        type: DataTypes.STRING
    },
    obra: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    numeroSS: {
        type: DataTypes.STRING
    },
    herramientas: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default Empleado;