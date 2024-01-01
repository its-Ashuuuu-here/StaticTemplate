
import './App.css';
import { Container } from './components/styles/ContainerStyled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import Card from './components/Card';
import content from './content';
function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '780px',
  }
  return (
<ThemeProvider theme = {theme} >
    <>
    <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
