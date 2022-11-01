import { useEffect, useState, useRef } from "react";
import { getListaId } from "../api/lista";

const ListaForm = ({ lista }) => {
  const { listas } = lista;
  const [file, setFile] = useState(null);

  const inputRef = useRef(null);

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleEliminarImagen = () => {
    const eliminar = window.confirm("Desea eliminar la imagen");
    if (eliminar) {
      inputRef.current.value = null;
      setFile(null);
    }
  };

  return (
    <div className="mt-5 w-full bg-white rounded-md h-full border-slate-300 shadow-md p-5">
      <h1 className="text-xl">Tareas de la lista</h1>
      <hr className="py-3 mt-3" />
      {listas.map((l, index) => (
        <div key={index}>
          <p className="py-3 text-lg font-semibold">{l}</p>
          <div className="flex justify-between py-3">
            <label htmlFor="estado" className="px-2">
              Estado
            </label>
            <select
              name="estado"
              id="estado"
              className="bg-slate-200 py-1 px-3 rounded-md"
            >
              <option value="" selected>
                Seleccionar
              </option>
              <option value="Bueno">Bueno</option>
              <option value="Regular">Regular</option>
              <option value="Malo">Malo</option>
              <option value="Grave">Grave</option>
            </select>
          </div>
          <div className="py-3">
            <label htmlFor="comentarios" className="px-2">
              Comentarios
            </label>
            <textarea
              name="comentarios"
              id="comentarios"
              cols="10"
              rows="2"
              className="border-2 w-full mt-3 rounded-md"
            ></textarea>
          </div>
          <div className="py-3 flex gap-5 justify-center border-2 shadow-md rounded-md bg-[#558b2f] text-white font-semibold">
            <label htmlFor="adjunto">Adjuntar foto</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            <input
              ref={inputRef}
              accept="image/png, image/jpeg, image/jpg"
              type="file"
              id="adjunto"
              className="hidden"
              onChange={handleFile}
            />
          </div>
          <img src={file} alt="" onClick={handleEliminarImagen} />
          <hr className="py-3 mt-5" />
        </div>
      ))}
    </div>
  );
};

export default ListaForm;
