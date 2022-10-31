import axios from "axios";

const getUnidades = async () => {
  const unidad = await axios(`${process.env.REACT_APP_SERVER_URL}/unidad`);
  return unidad.data;
};

export { getUnidades };
