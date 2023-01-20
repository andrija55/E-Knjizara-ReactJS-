import Knjiga from "./Knjiga";
import { useState } from "react";

export default function Home(props) {
  const [txtState, setTxtState] = useState("");
  const [knjigaNaslov, setKnjigaNaslov] = useState("");
  const [knjigaPisac, setPisac] = useState("");
  const [message, setMessage] = useState("");
  const [knjigaGodina, setGodina] = useState("");
  const knjigaPrikaz = knjigaNaslov !== "";

  const getKnjiga = async function (naslov) {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${naslov}`
    );
    const responseJson = await response.json();
    setKnjigaNaslov(responseJson.docs[0].title);
    setPisac(responseJson.docs[0].author_name);
    setGodina(responseJson.docs[0].first_publish_year);
  };

  

  const dodajKnjigu = function () {
    props.dodajKnjige((prev) => [
      ...prev,
      {
        naslov: knjigaNaslov,
        pisac: knjigaPisac,
        godina: knjigaGodina,
      },
    ]);
    setMessage("Uspesno dodata knjiga!");
  };

  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          height: "4rem",
          textAlign: "center",
        }}
      >
        Pretraga naslova
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <input
          onClick={() => {
            setKnjigaNaslov("");
            setPisac("");
            setGodina("");
            setMessage("");
          }}
          type="text"
          value={txtState}
          onChange={(event) => setTxtState(event.target.value)}
        />
        <button style={{backgroundColor:"crimson",color:"white" }} onClick={() => getKnjiga(txtState)}>Pretrazi</button>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "large",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Knjiga
            naslov={knjigaNaslov}
            pisac={knjigaPisac}
            godina={knjigaGodina}
            setMessage={setMessage}
            knjigaPrikaz={knjigaPrikaz}
          />
        </div>

        <p style={{ marginTop: 15, fontSize: "x-large" }}>{message}</p>
        {knjigaPrikaz ? (
          <button
            style={{ width: "10rem", height: "3rem", marginBottom: "1rem",backgroundColor:"crimson",color:"white" }}
            onClick={dodajKnjigu}
          >
            Dodaj u omiljene
          </button>
          
        ) : (
          <></>
        )}
      </div>
    </>
  );
}