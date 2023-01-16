import React from 'react';
import { Box, Container } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { GlassMagnifier } from 'react-image-magnifiers';

const Game = () => {
  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement;
    const x = (e.nativeEvent.offsetX / node.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / node.offsetHeight) * 100;
    console.log(x, y);
  };

  return (
    <main>
      <Container>
        <Box onClick={(e) => handleClick(e)}>
          <GlassMagnifier
            imageSrc={game.imageSrc}
            largeImageSrc={game.imageSrcLg}
            imageAlt={game.name}
            magnifierSize={'10%'}
            magnifierBorderColor="black"
            square
          />
        </Box>
      </Container>
    </main>
  );
};

export default Game;
