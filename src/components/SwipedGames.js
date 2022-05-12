import React from 'react';
import { getUser } from '../api/auth';
import { getGameDetail } from '../api/games';
import { getLoggedInUserId } from '../lib/auth';

const Swipe = () => {
  const [swipedGamesIds, setSwipedGamesIds] = React.useState(null);
  const [Details, setDetails] = React.useState([]);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      const userId = await getLoggedInUserId();
      const swipedGamesIds = await getUser(userId);
      setUsername(swipedGamesIds.username);
      setSwipedGamesIds(swipedGamesIds.swipedGames);
      console.log(swipedGamesIds.swipedGames);
      const gameDetailsArray = swipedGamesIds.swipedGames.map(async (gameDetail) => {
        return await getGameDetail(gameDetail);
      });
      const Details = await Promise.all(gameDetailsArray);
      setDetails(Details);
      console.log(Details);
    };
    getData();
  }, []);

  const handleRemoveGame = async (gameId) => {
    const userId = await getLoggedInUserId();
    const user = await getUser(userId);
    const storedSwiped = user.swipedGames;
    const swipedArray = storedSwiped.splice(gameId, 1);
    console.log(swipedArray);
  };

  return (
    <>
      {swipedGamesIds ? (<h1 className='title has-text-centered mt-4'>Welcome <span className='has-text-info'>{username}</span> to your swiped games!</h1>
      ) : (<p className='title has-text-centered'>No swipes yet!</p>)}
      {Details ? (
        <div className="container">
          <div className="columns is-multiline">
            {Details.map((game) => (
              <div className="column card is-one-quarter p-1 m-4 swipe-cards" key={game.id}>
                <h2 className='title has-text-centered'>{game.name}</h2>
                <h3 className='subtitle'>{game.genres.name}</h3>
                <figure className='image is-5by3'>
                  <img src={game.image} alt={game.name} />
                </figure>
                <p className='has-text-right'>{game.developer.name}</p>
                <hr></hr>
                <div className="is-flex">
                  <a href={game.official_site} rel='noreferrer' target='_blank'>Get the game</a>
                  <button className='button is-justify-content-end is-rounded is-danger is-outlined mb-1 mt-4 ml-4'
                    onClick={handleRemoveGame}
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : (
        <p>No swipes yet!</p>
      )
      }
    </>
  );
};


export default Swipe;