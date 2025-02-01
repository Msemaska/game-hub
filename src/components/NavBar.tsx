import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        boxSize="60px"
        src="https://raw.githubusercontent.com/mosh-hamedani/game-hub/refs/heads/main/src/assets/logo.webp"
      ></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
