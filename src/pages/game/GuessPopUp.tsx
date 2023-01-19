import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { LocationProps } from './Game';
import { guessPopUp } from '../../redux/slices/gameData';

interface GuessPopUpProps {
  screenPos: LocationProps | null;
  details: guessPopUp;
}

const GuessPopUp = ({ details, screenPos }: GuessPopUpProps) => {
  return (
    <Notification
      icon={
        details.isGuessCorrect ? <IconCheck size={18} /> : <IconX size={18} />
      }
      color={details.isGuessCorrect ? 'teal' : 'red'}
      title={details.isGuessCorrect ? 'Well Done!' : 'Nope!'}
      disallowClose
      sx={{
        display: `${details.isOpen ? 'flex' : 'none'}`,
        width: 'max-content',
        position: 'absolute',
        top: `${screenPos?.y}px`,
        left: `${screenPos?.x}px`,
      }}
    >
      {details.message}
    </Notification>
  );
};

export default GuessPopUp;
