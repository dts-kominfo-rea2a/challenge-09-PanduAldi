import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
   
  const arrData = contacts.map((dt) => {
    return <Contact gambar={dt.photo} nama={dt.name} noHp={dt.phone} email={dt.email} />
  })

  const dt = contacts[0];
  
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
        <Header />
        {[...arrData]}
    </div>
  );
}

export default App;
