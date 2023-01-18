import { Box, Button } from '@mantine/core';
import { character } from '../../redux/slices/gameData';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { LocationProps } from './Game';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setCharFound, checkForWin } from '../../redux/slices/gameSlice';

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
  const dispatch = useAppDispatch();
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
        const charId = char.id;
        dispatch(setCharFound({ gameId, charId }));
        dispatch(checkForWin());
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
        {characters.map((char) => {
          if (!char.isFound) {
            return (
              <Button
                key={char.name}
                variant="default"
                onClick={() => {
                  setMenuOpen(false);
                  getCharInfo(char, guess);
                }}
              >
                {char.name}
              </Button>
            );
          }
        })}
      </Button.Group>
    </Box>
  );
};

export default PopUpMenu;
