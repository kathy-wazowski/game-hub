import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import { IoIosSearch } from "react-icons/io";
import { useRef, useState } from "react";

interface Props {
  onChangeSearch: (searchStr: string) => void;
}

const NavBar = ({ onChangeSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onChangeSearch(ref.current.value);
        }}
      >
        <InputGroup borderRadius="100%">
          <InputLeftElement pointerEvents="none">
            <IoIosSearch size="24" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search games..."
            borderRadius={20}
            variant="filled"
            ref={ref}
          />
        </InputGroup>
      </form>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
