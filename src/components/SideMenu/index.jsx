import { Box, VStack, Text } from '@chakra-ui/react';

import Link from '@/components/Link';

const SideMenu = () => (
  <Box w="100%">
    <VStack spacing={4} align="start">
      <Box>
        <Text fontSize="2xl">Collection</Text>
      </Box>
      <VStack spacing={4} align="start">
        <Box pl="6">
          <Link to="/collection/final-touches">最後の仕上げ</Link>
        </Box>
      </VStack>
    </VStack>
  </Box>
);

export default SideMenu;
