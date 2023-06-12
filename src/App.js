import './App.css';
import Sayac from "./components/Sayac";
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [tema, setTema] = useState("Açık");
  const [showForm, setShowForm] = useState(true);

  return (
    <div className={`anasayfa ${tema === "Açık" ? "acik" : "koyu"}`}>
      <div className='btn-group'>
        <button className='btn btn-warning' onClick={() => setShowForm(true)}>Form</button>
        <button className='btn btn-primary' onClick={() => setShowForm(false)}>Sayaç</button>
      {/* {showForm ? "Formu Göster" : "Sayacı Göster"} */}
      </div>

       {showForm === true ? <Form/> : <Sayac tema = {tema} setTema = {setTema}/>}
    </div>
  );
}

export default App;
