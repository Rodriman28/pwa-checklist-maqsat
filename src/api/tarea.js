import axios from "axios";

const nuevaTarea = async () => {
  const conductor = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/tareas`
  );
  return conductor.data;
};

export { getConductores };
