import Lista from "./Lista";

const ListaForm = ({ lista }) => {
  const { listas } = lista;

  return (
    <div className="mt-5 w-full bg-white rounded-md h-full border-slate-300 shadow-md p-5">
      <h1 className="text-xl">Tareas de la lista</h1>
      <hr className="py-3 mt-3" />
      {listas.map((lista) => (
        <Lista key={lista.id} lista={lista} />
      ))}
    </div>
  );
};

export default ListaForm;
