import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box py={4} px={8}>
      <Flex alignItems="center" justify="space-between">
        <Flex>
          <Box px={2}>
            <Link to="/#shop">Shop</Link>
          </Box>
          <Box px={2}>
            <Link to="/about">About</Link>
          </Box>
        </Flex>

        <Box>
          <Text fontWeight="bold" fontSize="sm" textTransform="uppercase">
            The figma store
          </Text>
        </Box>

        <Flex>
          <Box px={2}>
            <Link bg="transparent" border="1px" borderRadius="20px">
              <Text textTransform="uppercase">Country</Text>
            </Link>
          </Box>
          <Box px={2}>
            <Link bg="transparent" border="1px" borderRadius="20px">
              <Text textTransform="uppercase">Cart 0</Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
