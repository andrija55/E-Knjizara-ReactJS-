import Knjiga from "./Knjiga";

export default function MojeKnjige(props) {
  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          height: "4rem",
          textAlign: "center",
          
        }}
      >
        Moje knjige:
      </h1>
      <div
        style={{
          display: "flex",
          

        }}
      >
        {props.knjige.map((knjiga) => (
          <Knjiga
            naslov={knjiga.naslov}
            pisac={knjiga.pisac}
            godina={knjiga.godina}
            knjigaPrikaz={true}
          />
        ))}
      </div>
    </>
  );
}