import React from 'react';
import { getAllGames } from '../api/games';
import { getLoggedInUserId } from '../lib/auth';
import { getUser, updateUser } from '../api/auth';

const Card = () => {
  const [games, setGames] = React.useState(null);
  const [userSwiped, setUserSwiped] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const games = await getAllGames();
      setGames(games);
    };
    getData();
  }, []);


  const handleNoResponse = (e) => {
    const cardElement = e.target.parentElement.parentElement;
    cardElement.classList.toggle('show-card');

  };
  const handleYesResponse = async (gameId) => {
    const userId = await getLoggedInUserId();
    const user = await getUser(userId);
    const storedSwiped = user.swipedGames;
    const swipedArray = [...storedSwiped, gameId];
    setUserSwiped(swipedArray);
    updateUser(userId, swipedArray);
  };

  return (

    <>
      {games ? (
        <div className="column is-one-third is-offset-4">
          {games.map((game) => (
            <div className="card p-4 mt-4" key={game.id}>
              <h2 className='title has-text-centered'>{game.name}</h2>
              <h3 className='subtitle'>{game.genres.name}</h3>
              <figure className='image is-5by3'>
                <img src={game.image} alt={game.name} />
              </figure>
              <p className='card-content'>
                {game.description}
              </p>
              <p className='has-text-right'>Developed by: {game.developer.name}</p>
              <hr></hr>
              <div className="level">
                <button className='button is-rounded is-danger is-outlined level-left'
                  onClick={handleNoResponse}
                >No thanks</button>
                <button className='button is-rounded is-success is-outlined level-right'
                  onClick={() => handleYesResponse(game.id)}
                >I want this</button>
              </div>
            </div>
          ))}
        </div>

      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
export default Card;