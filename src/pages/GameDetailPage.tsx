import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from 'react-router-dom'
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug)
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
