import { Box, Grid, GridItem, Divider } from '@chakra-ui/react';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';

const Layout = ({ children }) => (
  <>
    {/* <Grid
      templateAreas={`"header header" "nav main"`}
      gridTemplateRows={'68px 1fr'}
      gridTemplateColumns={'260px 1fr'}
      h="100vh"
      gap="1"
    > */}
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={'68px 1fr'}
      gridTemplateColumns={'1fr'}
      h="100vh"
      gap="1"
    >
      <GridItem area={'header'}>
        <>
          <Box p="16px 32px">
            <Header />
          </Box>
          <Divider orientation="horizontal" />
        </>
      </GridItem>
      {/* <GridItem area={'nav'}>
        <Box p="16px">
          <SideMenu />
        </Box>
      </GridItem> */}
      <GridItem area={'main'}>
        <Box p="32px 64px">{children}</Box>
      </GridItem>
    </Grid>
  </>
);

export default Layout;
