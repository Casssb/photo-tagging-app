import { useAppSelector } from '../../redux/hooks/hooks';
import { Box, Container, Grid, Image, Title } from '@mantine/core';
import HomeCard from './HomeCard';
import puzzleIcon from '../../assets/images/puzzle-icon.png';

const Home = () => {
  const games = useAppSelector((state) => state.game.games);

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '300px',
            }}
          >
            <Image src={puzzleIcon} />
          </div>
          <Title
            order={1}
            variant="gradient"
            gradient={{ from: 'red', to: 'purple', deg: 45 }}
          >
            Pixel Seek
          </Title>
          <Title order={2}>Find all 3 characters to complete each level</Title>
          <Title order={3}>The clock is ticking</Title>
          <Title order={3} mb={'5rem'}>
            See if you can beat the high score!
          </Title>
        </Box>
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
