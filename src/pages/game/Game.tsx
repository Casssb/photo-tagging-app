import React, { useState } from 'react';
import { Box, Button, Container, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { GlassMagnifier } from 'react-image-magnifiers';

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
    setGuess({ x: x, y: y });
    setSreenPos({ x: e.pageX, y: e.pageY });
    setMenuOpen(true);
  };

  return (
    <main>
      <Container>
        <Box>
          <Title>{`${guess?.y}, ${guess?.x}`}</Title>
          <Title>{`${screenPos?.y}, ${screenPos?.x}`}</Title>
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
        <Box>
          <Button.Group
            orientation="vertical"
            sx={{
              display: `${menuOpen ? 'flex' : 'none'}`,
              width: 'min-content',
              position: 'absolute',
              top: `${screenPos?.y}px`,
              left: `${screenPos?.x}px`,
            }}
          >
            {game.characters.map((character) => (
              <Button
                key={character.name}
                variant="default"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {character.name}
              </Button>
            ))}
          </Button.Group>
        </Box>
      </Container>
    </main>
  );
};

export default Game;
