import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TaskModel = db.define("task",{
    state: {type: DataTypes.SMALLINT},
    task: {type: DataTypes.STRING},
    type_task: {type: DataTypes.SMALLINT},
    id_user: {type: DataTypes.SMALLINT}
})

export default TaskModel