import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcAbout, FcHome } from "react-icons/fc";
import { FiKey } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.400">
      <Box fontSize="3xl" color="white" fontweight="bold">
        <Link href="/" paddingLeft="2">
          Real-Estate
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <FcMenu
                style={{
                  backgroundColor: "white",
                  height: "25px",
                  width: "25px",
                }}
              />
            }
            variant="outLined "
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
