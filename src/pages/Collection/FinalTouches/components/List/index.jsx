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
  Button,
  VStack,
  StackDivider,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

import useEnemyList from '../../hooks/useEnemyList';
import { SORT_STATUS } from '../../data';

const LoadingBody = () => (
  <Tr>
    <Td>...Loading</Td>
    <Td></Td>
  </Tr>
);

const formatSortName = (status) => {
  if (status === SORT_STATUS.acquired) return '獲得済み';
  if (status === SORT_STATUS.unacquired) return '未獲得';
  if (status === SORT_STATUS.default) return 'デフォルト';
};

const List = () => {
  const { data, isFetching, onChange, status, onChangeSort } = useEnemyList();
  return (
    <>
      <Box pb={6} w="xl">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">
              <span>ソート: {formatSortName(status)}</span>
              <Box ml={1}>
                <TriangleDownIcon />
              </Box>
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={3}
              align="stretch"
            >
              <Box h="40px" w="100%">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  onClick={() => onChangeSort(SORT_STATUS.acquired)}
                >
                  獲得済み
                </Button>
              </Box>
              <Box h="40px" w="100%">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  onClick={() => onChangeSort(SORT_STATUS.unacquired)}
                >
                  未獲得
                </Button>
              </Box>
              <Box h="40px" w="100%">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  onClick={() => onChangeSort(SORT_STATUS.default)}
                >
                  デフォルト
                </Button>
              </Box>
            </VStack>
          </PopoverContent>
        </Popover>
      </Box>
      <Box p={6} shadow="md" borderWidth="1px" w="xl">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
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
    </>
  );
};

export default List;
