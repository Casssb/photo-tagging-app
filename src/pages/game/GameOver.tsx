import { useAppSelector } from '../../redux/hooks/hooks';
import { game } from '../../redux/slices/gameData';

interface GameOverProps {
  game: game;
}

const GameOver = ({ game }: GameOverProps) => {
  const { winningTime } = useAppSelector((state) => state.game);
  return (
    <div>{`You finished ${game.id} (${game.name}) in ${winningTime} seconds`}</div>
  );
};

export default GameOver;
