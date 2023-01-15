import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';

type Props = {};

const Home = (props: Props) => {
  const games = useAppSelector((state) => state.game.games[0].characters.find(char => char.name === 'Master Chief'));
  console.log(games);

  return <main>
    <img src={games?.imageSrc} alt={games?.name} />
    <h1>{games?.name}</h1>
  </main>;
};

export default Home;
