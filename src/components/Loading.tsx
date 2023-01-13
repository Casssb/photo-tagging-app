import { Flex, Loader } from '@mantine/core';

type Props = {};

const Loading = (props: Props) => {
  return (
    <Flex>
      <Loader color="grape" size="lg" />
    </Flex>
  );
};

export default Loading;
