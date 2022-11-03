import { useEffect, useState } from "react";
import { getConductores } from "../api/conductor.js";
import { getUnidades } from "../api/unidad.js";
import { getListas, getListaId } from "../api/lista.js";
import ListaForm from "./ListaForm.jsx";
import Error from "./Error.jsx";

const InicioChofer = () => {
  const [confirmado, setConfirmado] = useState(false);
  const [conductores, setConductores] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [listas, setListas] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState("");
  const [unidadSeleccionada, setUnidadSeleccionada] = useState("");
  const [conductorSeleccionado, setConductorSeleccionado] = useState("");
  const [error, setError] = useState(false);
  const [lista, setLista] = useState({});

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

  useEffect(() => {
    const getLista = async () => {
      const listaId = await getListaId(listaSeleccionada);
      setLista(listaId);
    };
    getLista();
  }, [listaSeleccionada]);

  const confirmarSeleccion = (e) => {
    e.preventDefault();
    if (
      listaSeleccionada === "" ||
      conductorSeleccionado === "" ||
      unidadSeleccionada === ""
    ) {
      setError(true);
    } else {
      setConfirmado(true);
      setError(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full bg-white rounded-md h-full border-slate-300 shadow-md p-5">
        {error && (
          <Error>
            <p>La lista no puede estar vacía</p>
          </Error>
        )}
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
              onChange={(e) => setListaSeleccionada(e.target.value)}
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
          <div className="flex justify-center ">
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
      {confirmado && <ListaForm lista={lista} />}
    </div>
  );
};

export default InicioChofer;
