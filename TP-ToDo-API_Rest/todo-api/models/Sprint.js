
import mongoose from "mongoose"

const SprintSchema = new mongoose.Schema({
  fechaInicio: { type: Date, required: true },
  fechaCierre: { type: Date, required: true },
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  color: String
})

export default mongoose.model("Sprint", SprintSchema)
