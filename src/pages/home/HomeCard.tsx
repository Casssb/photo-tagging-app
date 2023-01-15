import { Button, Card, Group, Image, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface HomeCardProps {
  imageSrc: string;
  name: string;
  id: string;
}

const HomeCard = ({ imageSrc, name, id }: HomeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageSrc} height={300} alt={name} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Title weight={500} order={3}>
          {name}
        </Title>
      </Group>

      <Button
        variant="light"
        color="grape"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => navigate(`game/${id}`)}
      >
        Play
      </Button>
    </Card>
  );
};

export default HomeCard;
