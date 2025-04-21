
import mongoose from "mongoose"

const BacklogSchema = new mongoose.Schema({
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
})

export default mongoose.model("Backlog", BacklogSchema)
