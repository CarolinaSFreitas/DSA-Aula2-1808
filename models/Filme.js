import { DataTypes } from "sequelize";
import { sequelize } from '../database/conecta.js'

export const Filme = sequelize.define('filme', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // Model attributes are defined here
titulo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(40),
    allowNull: false
    // allowNull defaults to true
  },
  duracao: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  preco:{
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  datalan:{
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});
