import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children, ...props }) => (
  <ChakraLink as={RouterLink} {...props}>
    {children}
  </ChakraLink>
);

export default Link;
