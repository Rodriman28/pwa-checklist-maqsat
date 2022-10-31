import axios from "axios";

const getConductores = async () => {
  const conductor = await axios(
    `${process.env.REACT_APP_SERVER_URL}/conductor`
  );
  return conductor.data;
};

export { getConductores };
