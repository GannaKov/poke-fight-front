import axios from "axios";

const BASEURL = "http://localhost:3000";
//const BASEURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({ baseURL: BASEURL });

export const getAllGamesScoreLoder = async () => {
  const { data } = await instance.get("/game");
  console.log(data);
  return data;
};

export const postBattleStatistics = async (values) => {
  const { data } = await instance.post(`/game/save`, values);

  return data;
};

export const getAllPokemonsLoder = async () => {
  const { data } = await instance.get("/pokemon");

  return data.data;
};

export const getSinglePokemonLoader = async ({ params }) => {
  try {
    const { data } = await instance.get(`/pokemon/${params.id}`);
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const customError = {
        response: {
          statusText: `There is no pokemon with id ${params.id} `,
          status: 404,
        },
      };
      throw customError;
    } else {
      throw error;
    }
  }
};

export const getPokemonInfoByTypeLoader = async ({ params }) => {
  try {
    const { data } = await instance.get(`/pokemon/${params.id}/${params.info}`);

    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const customError = {
        response: {
          statusText: `There is no any pokemon with id ${params.id}  with info ${params.info} `,
          status: 404,
        },
      };
      throw customError;
    } else {
      throw error;
    }
  }
};
