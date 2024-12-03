import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelect: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelect, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "All Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
        <MenuItem onClick={() => onSelect(null)}>All Platforms</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
