import { Box, Button, Container, Flex, Text, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const Info = () => {
  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title order={1}>Thanks for checking out my game!</Title>
          <Title order={2}>
            All credit for the main art goes to the wonderful folks at the
            <Text
              span
              inherit
              variant="gradient"
              gradient={{ from: 'red', to: 'purple', deg: 45 }}
              component="a"
              href="https://pixeljoint.com/"
              target="_blank"
              sx={{ cursor: 'pointer' }}
            >
              {' '}
              PixelJoint
            </Text>{' '}
            forums
          </Title>
          <Title order={3}>
            The SVG's were all taken from{' '}
            <Text
              span
              inherit
              variant="gradient"
              gradient={{ from: 'blue', to: 'green', deg: 45 }}
              component="a"
              href="https://www.pngwing.com/"
              target="_blank"
              sx={{ cursor: 'pointer' }}
            >
              PNG Wing
            </Text>
          </Title>
          <Flex>
            <Button
              rightIcon={<IconBrandGithub />}
              color="grape"
              variant="outline"
              mt={'2rem'}
              component="a"
              href="https://github.com/Casssb/photo-tagging-app"
              target="_blank"
            >
              Code
            </Button>
          </Flex>
        </Box>
      </Container>
    </main>
  );
};

export default Info;
