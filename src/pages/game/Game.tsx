import React from 'react';
import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';

const Game = () => {
  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );
  console.log(game);
  return (
    <main>
      <Container></Container>
    </main>
  );
};

export default Game;
