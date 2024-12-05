import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import useGameStore from "./store";

const App = () => {
  const { gameQuery } = useGameStore();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      {/* Wrap aside GridItem with Show for conditional display */}
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"} padding="10px">
        <GameHeading />
        <HStack spacing={5} marginBottom="3">
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
