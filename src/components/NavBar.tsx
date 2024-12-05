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
import useGameStore from "../store";

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameStore((s) => s.setSearch);
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) setSearch(ref.current.value);
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
