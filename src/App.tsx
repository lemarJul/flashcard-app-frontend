import { ThemeProvider, CssBaseline } from '@mui/material';
import LandingPage from './components/LandingPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
