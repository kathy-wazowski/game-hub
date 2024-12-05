import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import useSelectedPlatform from "../hooks/useSelectedPlatform";
import useGameStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  const gameQuery = useGameStore((s) => s.gameQuery);
  const setPlatform = useGameStore((s) => s.setPlatform);
  const selectedPlatform = useSelectedPlatform(gameQuery.platformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "All Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatform(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
        <MenuItem onClick={() => setPlatform()}>All Platforms</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
