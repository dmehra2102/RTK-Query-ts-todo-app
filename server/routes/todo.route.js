
import express from "express";
import TODOMODEL from "../model/todo.model.js";

const router = express.Router();

router.get("/todos", async (req, res) => {
    try {
        const allTodos = await TODOMODEL.find();
        return res.status(200).json( allTodos );

    } catch (error) {
        return res.status(500).json({ error: true, errorMessage: error });
    }
});

router.post("/todo/add", async ( req,res)=>{
    try {
        const newTodo = await TODOMODEL.create(req.body);
        return res.status(201).json({ error: false, data: newTodo });

    } catch (error) {
        return res.status(400).json({ error: true, errorMessage: error });
    }
});

router.delete("/todo/:todoId", async ( req,res)=>{
    try {
        await TODOMODEL.findByIdAndDelete(req.params.todoId);
        return res.status(201).json({ error: false, data: "Todo item has been Deleted." });
        
    } catch (error) {
        return res.status(400).json({ error: true, errorMessage: error });
    }
})

export default router;