import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-4">
      <Link
        to="/"
        className="text-white font-bold transition ease-in-out delay-150  hover:scale-150 scale-125  duration-700"
      >
        <h1>Lista de Tareas</h1>
      </Link>

      <ul className="flex gap-x-4">
        <li>
          <Link
            to="/"
            className="bg-slate-200 px-2 py-1 hover:bg-slate-400 transition duration-100 ease-in-out "
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/new"
            className="bg-slate-200 px-2 py-1 hover:bg-slate-400 transition duration-100 ease-in-out"
          >
            Crear Tarea
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
