"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Empleado = connectiondb_1.default.define('empleados', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    fechaDalta: {
        type: sequelize_1.DataTypes.STRING
    },
    obra: {
        type: sequelize_1.DataTypes.STRING
    },
    dni: {
        type: sequelize_1.DataTypes.STRING
    },
    numeroSS: {
        type: sequelize_1.DataTypes.STRING
    },
    herramientas: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Empleado;
