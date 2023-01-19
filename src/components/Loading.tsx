import { Center, Container, Loader } from '@mantine/core';

const Loading = () => {
  return (
    <Container>
      <Center h={'80vh'}>
        <Loader color="grape" size="lg" />
      </Center>
    </Container>
  );
};

export default Loading;
