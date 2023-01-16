import { useAppSelector } from '../../redux/hooks/hooks';
import { Container, Grid } from '@mantine/core';
import HomeCard from './HomeCard';

const Home = () => {
  const games = useAppSelector((state) => state.game.games);

  return (
    <main>
      <Container>
        <Grid>
          {games.map((game) => (
            <Grid.Col md={6} key={game.id}>
              <HomeCard
                imageSrc={game.imageSrc}
                name={game.name}
                id={game.id}
                characters={game.characters}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
