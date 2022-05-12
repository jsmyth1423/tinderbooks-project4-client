import axios from 'axios';

export const getRandomGame = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/games/random'
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllGames = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/games'
  };

  const { data } = await axios.request(options);
  return data;
};

export const getGameDetail = async (gameId) => {
  const options = {
    metho: 'GET',
    url: `http://localhost:8000/games/detail/${gameId}`
  };
  const { data } = await axios.request(options);
  return data;
};