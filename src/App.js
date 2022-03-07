import './App.css';
import Footer from './components/footer';
import Forms from './components/forms';
import Header from './components/header';
import CasosExitos from './components/casos';

//Change language
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="App">
      <Header t={t} i18n={i18n}/>
      {/* <CasosExitos/> */}
      <Forms/>
      <Footer/>
    </div>

  );
}

export default App;
