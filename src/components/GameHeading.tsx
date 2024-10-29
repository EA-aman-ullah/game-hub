import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: ganres } = useGenres();
  const { data: platforms } = usePlatform();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = ganres.results.find((g) => g.id === genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = platforms?.results.find((p) => p.id === platformId);

  let heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
