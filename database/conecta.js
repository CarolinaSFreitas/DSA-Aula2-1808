import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('primevideo', 'aluno', 'senacrs', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: 3306 
  });