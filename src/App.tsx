import Drawer from 'components/drawer';
import Layout from 'components/layout';
import Nav from 'components/nav';
import HomePage from 'pages/home';
import { mainRoutes } from 'routes/mainRoutes';

function App() {
  return (
    <Layout>
      <Drawer>
        <Nav links={mainRoutes.private}></Nav>
      </Drawer>

      <HomePage />
    </Layout>
  );
}

export default App;
