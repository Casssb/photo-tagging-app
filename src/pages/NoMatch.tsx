import { Box, Container, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <main>
      <Container>
        <Box
          mt={'5rem'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title order={1} variant="gradient">
            404
          </Title>
          <Title order={2}>Oops, no such page exists!</Title>
          <Title order={2}>Sending you back to the home page...</Title>
        </Box>
      </Container>
    </main>
  );
};

export default NoMatch;
