import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platfrom } from "./hooks/useGames";
import SortSelecter from "./components/SortSelecter";

export interface GameQuery {
  genre: Genre | null;
  platform: Platfrom | null;
  sortOder: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelecter
            selectedPlatform={gameQuery.platform}
            onSelectPlatfrom={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelecter
            sortOrder={gameQuery.sortOder}
            onSelectSortOrder={(sortOder) =>
              setGameQuery({ ...gameQuery, sortOder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
