import { useEffect } from "react";
import TasksCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas</h1>;
    return tasks.map((task) => <TasksCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl py-8 text-white font-bold text-center">Tareas</h1>
      <div className="grid grid-cols-3 gap-4">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
