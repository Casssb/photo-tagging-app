import { Flex, Image } from '@mantine/core';
import { useAppSelector } from '../../redux/hooks/hooks';

const CharAvatars = () => {
  const [activeGame] = useAppSelector((state) =>
    state.game.games.filter((game) => game.isActive === true)
  );

  return (
    <Flex gap={10}>
      {activeGame.characters.map((char) => {
        if (!char.isFound) {
          return (
            <Image
              radius={'md'}
              height={40}
              src={char.imageSrc}
              alt={char.name}
              fit="cover"
              key={char.name}
            />
          );
        }
      })}
    </Flex>
  );
};

export default CharAvatars;
