import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import {
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Table,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import formatTime from '../../utils/helpers';

interface scoreProps {
  name: string;
  time: number;
}

const Scoreboard = () => {
  const [scores, setScores] = useState<scoreProps[]>();

  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedGame] = useAppSelector((state) =>
    state.game.games.filter((game) => game.id === id)
  );
  const games = useAppSelector((state) => state.game.games);

  const createScoreTableRows = (scores: scoreProps[]) => {
    return scores
      .sort((a, b) => a.time - b.time)
      .map((score, index) => (
        <tr key={score.name}>
          <td>{index + 1}</td>
          <td>{score.name}</td>
          <td>{formatTime(score.time)}</td>
        </tr>
      ));
  };

  useEffect(() => {
    const getScores = async (id?: string) => {
      try {
        const docRef = doc(db, 'scores', 'scores');
        const docSnap = await getDoc(docRef);
        const gameData = docSnap.data();
        if (id) {
          setScores(gameData![id]);
        } else {
          setScores(gameData!['game1']);
        }
      } catch (e) {
        console.log('Error getting doc', e);
      }
    };
    selectedGame ? getScores(id) : getScores();
  }, [selectedGame]);

  console.log(id, selectedGame, scores);
  return (
    <main>
      <Container>
        <Flex align={'center'} justify={'center'} direction={'column'}>
          <Group align={'center'}>
            {games.map((game, index) => {
              if (!id) {
                if (index === 0) {
                  return (
                    <Button
                      variant="outline"
                      color="grape"
                      compact
                      key={game.id}
                      onClick={() => navigate(`/scoreboard/${game.id}`)}
                    >
                      {game.name}
                    </Button>
                  );
                } else {
                  return (
                    <Button
                      variant="light"
                      color="grape"
                      compact
                      key={game.id}
                      onClick={() => navigate(`/scoreboard/${game.id}`)}
                    >
                      {game.name}
                    </Button>
                  );
                }
              } else {
                if (game.id === id) {
                  return (
                    <Button
                      variant="outline"
                      color="grape"
                      compact
                      key={game.id}
                      onClick={() => navigate(`/scoreboard/${game.id}`)}
                    >
                      {game.name}
                    </Button>
                  );
                } else {
                  return (
                    <Button
                      variant="light"
                      color="grape"
                      compact
                      key={game.id}
                      onClick={() => navigate(`/scoreboard/${game.id}`)}
                    >
                      {game.name}
                    </Button>
                  );
                }
              }
            })}
          </Group>
          <Title
            mt={'1rem'}
            variant="gradient"
            gradient={{ from: 'red', to: 'purple', deg: 45 }}
          >
            {selectedGame ? selectedGame.name : games[0].name}
          </Title>
          <Stack spacing={'xs'} w={'100%'} mt={'1rem'}>
            {scores && (
              <Table striped withColumnBorders withBorder>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>{createScoreTableRows(scores)}</tbody>
              </Table>
            )}
          </Stack>
        </Flex>
      </Container>
    </main>
  );
};

export default Scoreboard;
