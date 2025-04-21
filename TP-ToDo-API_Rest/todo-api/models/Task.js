
import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  estado: { type: String, enum: ["pendiente", "en progreso", "completado"], default: "pendiente" },
  fechaLimite: { type: Date, required: true },
  color: String
})

export default mongoose.model("Task", TaskSchema)
