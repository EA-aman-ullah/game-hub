import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platfrom } from "./hooks/useGames";

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platfrom | null>(
    null
  );

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
            selectedGenre={selectedGenres}
            onSelectGenre={(genre) => setSelectedGenres(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelecter
          selectedPlatform={selectedPlatform}
          onSelectPlatfrom={(platfrom) => setSelectedPlatform(platfrom)}
        />
        <GameGrid
          selectedPlatfrom={selectedPlatform}
          selectedGenre={selectedGenres}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
