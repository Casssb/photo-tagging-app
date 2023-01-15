import React from 'react';
import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { GlassMagnifier } from 'react-image-magnifiers';

const Game = () => {
  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );
  console.log(game);
  return (
    <main>
      <Container>
        <GlassMagnifier
        style={{height: 'auto', width: 'auto'}}
          imageSrc={game.imageSrc}
          largeImageSrc={game.imageSrc}
          imageAlt={game.name}
          magnifierSize={'10%'}
          magnifierBorderColor='black'
          square
        />
      </Container>
    </main>
  );
};

export default Game;
