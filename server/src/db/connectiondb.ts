import { Sequelize} from 'sequelize';

const sequelize = new Sequelize( 'almacen', 'rua', '*****', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;