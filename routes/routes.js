import express from "express"
import { getAllTasks, createTask, editTask, deleteTask, getOneTasks } from "../controllers/TaskController.js"
import { getAllUsers, getUser, createUser, editUser, deleteUser } from "../controllers/UserController.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.post("/", createUser)
router.put("/:id", editUser)
router.delete("/:id", deleteUser)


router.get("/tasks/:id", getAllTasks)
router.get("/task/:id", getOneTasks)
router.post("/tasks/:id", createTask)
router.put("/tasks/:id", editTask)
router.delete("/tasks/:id", deleteTask)

export default router
