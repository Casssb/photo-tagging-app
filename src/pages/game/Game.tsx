import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import Magnifier from 'react-magnifier';

type Props = {};

const Game = (props: Props) => {
  const params = useParams();
  const [game] = useAppSelector((state: RootState) =>
    state.game.games.filter((game) => game.id === params.id)
  );
  console.log(game);
  return (
    <main>
      <Container>
        <Magnifier
          src={game.imageSrc}
          height={'80vh'}
          width={'100%'}
          mgShape="square"
          mgHeight={100}
          mgWidth={100}
          zoomFactor={2.5}
        />
      </Container>
    </main>
  );
};

export default Game;
