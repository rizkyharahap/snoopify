import {
  AppShell,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      padding={0}
      fixed
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
    >
      <Header fixed={false} height={70} p='md'>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(o => !o)}
              size='sm'
              color={theme.colors.gray[6]}
              mr='xl'
            />
          </MediaQuery>

          <Text>Application header</Text>
        </div>
      </Header>
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default App;