import axios from "axios";

const getListas = async () => {
  const listas = await axios(`${process.env.REACT_APP_SERVER_URL}/lista`);
  return listas.data;
};

export { getListas };
