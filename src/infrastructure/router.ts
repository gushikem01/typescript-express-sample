import express = require('express');
let router = express.Router();
console.log("router");

type Tasks = {
  id?: number,
  name?: string
}

const tasks: Tasks[] = [
  {
    id: 1, name: "task1"
  },{
    id: 2, name: "task2"
  },{
    id: 3, name: "task3"
  }
]
router.get('/tasks',
  async(req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(tasks));
  }
)
export default router;
