const express = require("express");
const router = express.Router();
const TodoModel = require("../model/Todo");


router.post("/todos", async (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })  
  .then(result => res.json(result))
  .catch (err => res.json(err))
});

router.get( "/get",async (req,res) =>
  {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
  }
)

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    
    // Find the todo by ID and toggle its 'completed' status
    TodoModel.findById(id)
      .then(todo => {
        todo.completed = !todo.completed;  // Toggle the completed status
        return todo.save();
      })
      .then(updatedTodo => res.json(updatedTodo))
      .catch(err => res.status(500).json(err));
  });
  
router.delete("/delete/:id" , async(req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router; 