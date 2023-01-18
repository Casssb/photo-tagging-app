import {
  Box,
  Container,
  Text,
  Title,
  TextInput,
  Button,
  Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { game } from '../../redux/slices/gameData';
import formatTime from '../../utils/helpers';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/slices/gameSlice';

interface GameOverProps {
  game: game;
}

const GameOver = ({ game }: GameOverProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { winningTime } = useAppSelector((state) => state.game);

  const form = useForm({
    initialValues: {
      name: '',
    },

    validate: {
      name: (value) =>
        value.length < 2
          ? 'Must have at least 2 characters'
          : value.length > 20
          ? 'Too long! (20 characters max)'
          : null,
    },
  });

  const handleSubmit = async (name: string, time: number | null) => {
    const docRef = doc(db, 'scores', 'scores');
    try {
      await updateDoc(docRef, {
        [game.id]: arrayUnion({
          name: name,
          time: time,
        }),
      });
    } catch (e) {
      console.log('error updating doc', e);
    }
    dispatch(reset());
    navigate(`/scoreboard/${game.id}`);
  };

  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <Title order={1}>Nice Job!</Title>
        <Title order={2}>
          You finished{' '}
          <Text
            span
            inherit
            variant="gradient"
            gradient={{ from: 'red', to: 'purple', deg: 45 }}
          >
            {game.name}
          </Text>{' '}
          in{' '}
          <Text span inherit variant="gradient">
            {formatTime(winningTime!)}
          </Text>
        </Title>
        <Title order={2}>Submit your time to the leaderboard?</Title>
        <Box sx={{ maxWidth: 300, marginTop: '2rem' }} mx="auto">
          <form
            onSubmit={form.onSubmit((values) =>
              handleSubmit(values.name, winningTime)
            )}
          >
            <TextInput
              label="Name"
              placeholder="your name"
              {...form.getInputProps('name')}
            />
            <Group position="left" mt="md">
              <Button
                type="submit"
                variant="gradient"
                gradient={{ from: 'red', to: 'purple', deg: 45 }}
              >
                Submit
              </Button>
            </Group>
          </form>
          <Group position="left" mt="xl">
            <Button
              color={'orange'}
              variant="outline"
              onClick={() => {
                dispatch(reset());
                navigate(`/`);
              }}
            >
              Home
            </Button>
            <Button
              color={'red'}
              variant="outline"
              onClick={() => {
                dispatch(reset());
                navigate(`/scoreboard/${game.id}`);
              }}
            >
              Scoreboard
            </Button>
          </Group>
        </Box>
      </Box>
    </Container>
  );
};

export default GameOver;
