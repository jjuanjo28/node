import TaskModel from "../models/TaskModel.js"

// mostar Todas las Tareas de un usuario

export const getAllTasks = async (req, res) => {
    
    try {
        const taskTest = await TaskModel.findAll()
        let task =  taskTest.filter((e)=> e.id_user == req.params.id)
        res.json(task);
            
    } catch (error) {
        res.json({ message: error.message });
    }
  };
    
    // crear una nuevo Task
    
    export const createTask = async (req, res) => {
      try {
        await TaskModel.create(req.body);
        res.json({
          message: "Tarea Creada Correctamente",
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    };

    // Mostrar una Tarea

    export const getOneTasks = async (req, res) => {
      try {
        const taskTest = await TaskModel.findAll()
        let task =  taskTest.filter((e)=> e.id == req.params.id)
        res.json(task);
            
    } catch (error) {
        res.json({ message: error.message });
    }
    }
    
    
    // actualizar una Tarea
    
    export const editTask = async (req, res) => {
      try {
        await TaskModel.update(req.body, {
          where: { id: req.params.id }, 
        });
        res.json({
          message: "Tarea Editada Correctamente",
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    };
    
    // eliminar un user
    
    export const deleteTask = async (req, res) => {
      try {
        await TaskModel.destroy({
          where: { id: req.params.id },
        });
        res.json({
          message: "Tarea Eliminada",
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    };
    