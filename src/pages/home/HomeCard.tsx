import { Button, Card, Flex, Group, Image, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { gameOn } from '../../redux/slices/gameSlice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { character } from '../../redux/slices/gameData';

interface HomeCardProps {
  imageSrc: string;
  name: string;
  id: string;
  characters: Array<character>;
}

const HomeCard = ({ imageSrc, name, id, characters }: HomeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageSrc} height={300} alt={name} />
      </Card.Section>

      <Flex direction={'column'} gap={'0.5rem'}>
        <Title
          weight={500}
          order={2}
          my={'1rem'}
          variant="gradient"
          gradient={{ from: 'grape', to: 'orange', deg: 45 }}
        >
          {name}
        </Title>
        <Flex gap={'0.5rem'}>
          {characters.map((char) => (
            <div
            key={char.name}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Image
                radius="md"
                src={char.imageSrc}
                alt={char.name}
                caption={char.name}
                height={70}
                fit="contain"
              />
            </div>
          ))}
        </Flex>
      </Flex>

      <Button
        variant="light"
        color="grape"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          navigate(`game/${id}`);
          dispatch(gameOn(id));
        }}
      >
        Play
      </Button>
    </Card>
  );
};

export default HomeCard;
