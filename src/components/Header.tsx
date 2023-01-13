import { Container, Flex, Text, Title } from '@mantine/core';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Container size={'xl'}>
        <Flex justify={'space-around'}>
            <Title
              order={1}
              variant="gradient"
              gradient={{ from: 'purple', to: 'red', deg: 45 }}
            >
              Testing this should be a pixel font
            </Title>
            <Text>This should not</Text>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
