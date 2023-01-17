import { Box, Button } from '@mantine/core';
import { character } from '../../redux/slices/gameData';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { LocationProps } from './Game';

interface PopMenuProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  screenPos: LocationProps | null;
  guess: LocationProps | null;
  characters: Array<character>;
  gameId: string;
}

const PopUpMenu = ({
  gameId,
  characters,
  menuOpen,
  screenPos,
  guess,
  setMenuOpen,
}: PopMenuProps) => {
  const getCharInfo = async (char: character, guess: LocationProps | null) => {
    const querySnapshot = await getDocs(collection(db, 'games'));
    querySnapshot.forEach((doc) => {
      const details = doc.data();
      const targetChar = details[gameId][char.id];
      if (
        targetChar.x < guess!.x + 5 &&
        targetChar.x > guess!.x - 5 &&
        targetChar.y < guess!.y + 5 &&
        targetChar.y > guess!.y - 5
      ) {
        console.log(`you found ${char.name}`);
      }
    });
  };

  return (
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
        {characters.map((character) => (
          <Button
            key={character.name}
            variant="default"
            onClick={() => {
              setMenuOpen(false);
              getCharInfo(character, guess);
            }}
          >
            {character.name}
          </Button>
        ))}
      </Button.Group>
    </Box>
  );
};

export default PopUpMenu;
