import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-slate-200 rounded-xl p-8">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-lg my-2">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-2 mt-4">
        <button
          className="bg-red-500 px-2 py-2 text-white hover:bg-red-700  rounded-md"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Borrar
        </button>
        <button
          className="bg-slate-500 px-2 py-2 text-white hover:bg-slate-700  rounded-md"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-green-500 px-2 py-2 text-white hover:bg-green-700  rounded-md"
          onClick={() => handleDone(task.done)}
        >
          Marcar Tarea
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
