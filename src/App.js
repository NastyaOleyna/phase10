import './App.css';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/system';
import  theme  from './styles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Cards />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
