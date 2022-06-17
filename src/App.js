import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  
  const arrData = contacts.map((dat) => {
     return <Contact data={dat}/>
   }
  );

  return (
    <div className="App">
        <Header />
        {[... arrData]}
    </div>
  );
}

export default App;
