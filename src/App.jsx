import Provider from './Provider';
import Layout from '@/components/Layout';
import IndexRoutes from './routes';

const App = () => (
  <Provider>
    <Layout>
      <IndexRoutes />
    </Layout>
  </Provider>
);

export default App;
