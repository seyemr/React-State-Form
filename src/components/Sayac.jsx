import { useState } from "react";

const Sayac = ({tema, setTema}) => {

    const [sayi, setSayi] = useState(0);

    function artiSayac(){
        setSayi(sayi + 1);
    }

    function eksiSayac(){
        setSayi(sayi - 1);
    }


    function degisTema(){
        setTema (tema === "Açık" ? "Koyu" : "Açık")
    }

    return(
        <div >
            <h1 className="my-4">SAYAÇ</h1>
            <button className="btn btn-danger" onClick={eksiSayac}>Azalt</button>
            <span > {sayi} </span> 
            {/* <span> {tema} </span> */}
            <button className="btn btn-success" onClick={artiSayac}>Artır</button><br />
            <button className="btn btn-info my-4" onClick={degisTema}>{tema}</button>
        </div>
    )
}

export default Sayac;