import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

const Provider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <>
      <ChakraProvider>{children}</ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  </QueryClientProvider>
);

export default Provider;
