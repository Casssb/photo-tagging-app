import { Center, Container, Loader } from '@mantine/core';

type Props = {};

const Loading = (props: Props) => {
  return (
    <Container>
      <Center h={'80vh'}>
        <Loader color="grape" size="lg" />
      </Center>
    </Container>
  );
};

export default Loading;
