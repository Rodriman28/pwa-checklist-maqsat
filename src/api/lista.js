import axios from "axios";

const getListas = async () => {
  const listas = await axios(`${process.env.REACT_APP_SERVER_URL}/lista`);
  return listas.data;
};

const getListaId = async (id) => {
  const listaId = await axios(
    `${process.env.REACT_APP_SERVER_URL}/lista/${id}`
  );
  return listaId.data;
};

export { getListas, getListaId };
