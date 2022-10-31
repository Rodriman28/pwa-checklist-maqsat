import { useEffect, useState } from "react";
import { getConductores } from "../api/conductor.js";
import { getUnidades } from "../api/unidad.js";
import { getListas } from "../api/lista.js";
import ListaForm from "./ListaForm.jsx";

const InicioChofer = () => {
  const [confirmado, setConfirmado] = useState(false);
  const [conductores, setConductores] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [listas, setListas] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      const conductor = await getConductores();
      setConductores(conductor);
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    const obtenerDatos = async () => {
      const unidad = await getUnidades();
      setUnidades(unidad);
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    const obtenerDatos = async () => {
      const lista = await getListas();
      setListas(lista);
    };
    obtenerDatos();
  }, []);

  const confirmarSeleccion = (e) => {
    e.preventDefault();
    if (confirmado) {
      console.log("Cambiar seleccion");
    } else {
      setConfirmado(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full bg-white rounded-md h-full border-slate-300 shadow-md p-5">
        <form onSubmit={confirmarSeleccion}>
          <div className="mb-3 flex flex-col">
            <label htmlFor="conductor" className="px-3 py-2 text-lg">
              Conductor
            </label>
            <select
              className="px-3 py-2 rounded-md bg-slate-200"
              name="conductor"
              id="condutor"
            >
              <option value="" disabled selected>
                -- Seleccionar --
              </option>
              {conductores.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="unidad" className="px-3 py-2 text-lg">
              Unidad
            </label>
            <select
              className="px-3 py-2 rounded-md bg-slate-200"
              name="unidad"
              id="unidad"
            >
              <option value="" disabled selected>
                -- Seleccionar --
              </option>
              {unidades.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="lista" className="px-3 py-2 text-lg">
              Lista
            </label>
            <select
              className="px-3 py-2 rounded-md bg-slate-200"
              name="lista"
              id="lista"
            >
              <option value="" disabled selected>
                -- Seleccionar --
              </option>
              {listas.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.nombre}
                </option>
              ))}
              s
            </select>
          </div>
          <div className="flex justify-center">
            <input
              className={`mt-3 text-center text-white ${
                confirmado ? "bg-orange-400" : "bg-[#558b2f]"
              }  px-3 py-2 rounded-md`}
              type="submit"
              value={`${confirmado ? "Cambiar Lista" : "Confirmar"}`}
            />
          </div>
        </form>
      </div>
      {confirmado && <ListaForm />}
    </div>
  );
};

export default InicioChofer;
