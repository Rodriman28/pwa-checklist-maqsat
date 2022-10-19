import React from "react";

const Grupos = () => {
  return (
    <div className="flex w-screen">
      <div className="bg-white w-[100%] h-96 shadow-md shadow-slate-300">
        <h1 className="text-xl font-bold mb-2 px-4 py-4">Ingresar</h1>
        <hr className="px-3 py-3 w-[90%] mx-auto" />
        <form>
          <div className="flex items-center gap-3 px-3 ">
            <label htmlFor="name" className="text-lg font-bold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="border-2 border-slate-400 rounded-md py-1 px-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Grupos;
