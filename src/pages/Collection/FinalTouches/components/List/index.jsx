import {
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

import useEnemyList from '../../hooks/useEnemyList';

const LoadingBody = () => (
  <Tr>
    <Td>...Loading</Td>
    <Td></Td>
  </Tr>
);

const List = () => {
  const { data, isFetching, onChange } = useEnemyList();
  return (
    <Box p={6} shadow="md" borderWidth="1px" w="xl">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                {/* <Popover placement="right">
                  <PopoverTrigger>
                    <>
                      ソート: 昇順 <TriangleDownIcon />
                    </>
                  </PopoverTrigger>
                  <PopoverContent p={5}>AAA</PopoverContent>
                </Popover> */}
              </Th>
              <Th>Monster Name</Th>
              <Th>Check</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isFetching ? (
              <LoadingBody />
            ) : (
              data.map(({ id, name, src, isChecked }) => (
                <Tr key={id}>
                  <Td>
                    {src && <Image src={src} alt={name} boxSize="80px" />}
                  </Td>
                  <Td>{name}</Td>
                  <Td>
                    <Checkbox
                      id={id}
                      colorScheme="green"
                      isChecked={isChecked}
                      onChange={onChange}
                      size="lg"
                    ></Checkbox>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
