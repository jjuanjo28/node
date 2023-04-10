import { Sequelize } from "sequelize";

const db = new Sequelize("usariosapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  define: {
    timestamps: false,
  },
});

export default db;
