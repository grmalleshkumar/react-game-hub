import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
