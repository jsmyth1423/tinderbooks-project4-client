import axios from 'axios';

export const getRandomGame = async () => {
  const options = {
    method: 'GET',
    url: 'https://jordangamesapp.herokuapp.com/games/random'
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllGames = async () => {
  const options = {
    method: 'GET',
    url: 'https://jordangamesapp.herokuapp.com/games'
  };

  const { data } = await axios.request(options);
  return data;
};

export const getGameDetail = async (gameId) => {
  const options = {
    metho: 'GET',
    url: `https://jordangamesapp.herokuapp.com/games/detail/${gameId}`
  };
  const { data } = await axios.request(options);
  return data;
};