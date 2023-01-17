import React, { useState } from 'react';
import { Box, Container, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { GlassMagnifier } from 'react-image-magnifiers';
import PopUpMenu from './PopUpMenu';

interface LocationProps {
  x: number;
  y: number;
}

const Game = () => {
  const [guess, setGuess] = useState<LocationProps | null>(null);
  const [screenPos, setSreenPos] = useState<LocationProps | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement;
    const x = (e.nativeEvent.offsetX / node.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / node.offsetHeight) * 100;
    setGuess({ x: Math.floor(x), y: Math.floor(y) });
    setSreenPos({ x: e.pageX, y: e.pageY });
    setMenuOpen(true);
  };

  return (
    <main>
      <Container>
        <Box>
          <Title>{`${guess?.y}, ${guess?.x}`}</Title>
        </Box>
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
        <PopUpMenu
          characters={game.characters}
          menuOpen={menuOpen}
          screenPos={screenPos}
          setMenuOpen={setMenuOpen}
        />
      </Container>
    </main>
  );
};

export default Game;
