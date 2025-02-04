import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        boxSize="60px"
        src="https://raw.githubusercontent.com/mosh-hamedani/game-hub/refs/heads/main/src/assets/logo.webp"
      ></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
