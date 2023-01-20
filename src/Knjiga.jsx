
export default function Knjiga(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3rem",
        border: "solid",
        borderRadius: "10px",
        backgroundColor: "coral",
      }}
    >
      
      <p style={{ fontSize: "x-large" }}>Naslov: {props.naslov}</p>
      <p style={{ fontSize: "x-large" }}>Pisac: {props.pisac}</p>
      <p style={{ fontSize: "x-large" }}>Godina objavljivanja: {props.godina}</p>
      
    </div>
  );
}
