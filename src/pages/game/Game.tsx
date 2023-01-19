import React, { useState } from 'react';
import { Box, Container, Image } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { GlassMagnifier } from 'react-image-magnifiers';
import PopUpMenu from './PopUpMenu';
import GameOver from './GameOver';
import GuessPopUp from './GuessPopUp';
import { useMediaQuery } from '@mantine/hooks';

export interface LocationProps {
  x: number;
  y: number;
}

const Game = () => {
  const [guess, setGuess] = useState<LocationProps | null>(null);
  const [screenPos, setSreenPos] = useState<LocationProps | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 800px)');
  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );
  const { guessPopUp } = useAppSelector((state) => state.game);
  const { isGameOver } = useAppSelector((state: RootState) => state.game);

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
        {isGameOver ? (
          <>
            <GameOver game={game} />
          </>
        ) : (
          <>
            <Box onClick={(e) => handleClick(e)}>
              {isMobile ? (
                <Image src={game.imageSrc} alt={game.name} />
              ) : (
                <GlassMagnifier
                  imageSrc={game.imageSrc}
                  largeImageSrc={game.imageSrcLg}
                  imageAlt={game.name}
                  magnifierSize={'10%'}
                  magnifierBorderColor="black"
                  square
                />
              )}
            </Box>
            <PopUpMenu
              characters={game.characters}
              gameId={game.id}
              menuOpen={menuOpen}
              screenPos={screenPos}
              guess={guess}
              setMenuOpen={setMenuOpen}
            />

            <GuessPopUp screenPos={screenPos} details={guessPopUp} />
          </>
        )}
      </Container>
    </main>
  );
};

export default Game;
