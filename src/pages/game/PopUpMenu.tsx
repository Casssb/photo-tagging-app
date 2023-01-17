import { Box, Button } from '@mantine/core';
import { character } from '../../redux/slices/gameData';

interface PopMenuProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  screenPos: {
    x: number;
    y: number;
  } | null;
  characters: Array<character>;
}

const PopUpMenu = ({
  characters,
  menuOpen,
  screenPos,
  setMenuOpen,
}: PopMenuProps) => {
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
