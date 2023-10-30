// Asd.js
import { useParams } from "react-router-dom";

function Asd({ cvb }) {
  const { asd, bnm } = useParams();


  return <h2>{parseInt(asd) + parseInt(bnm) - parseInt(cvb)}</h2>;
}

export default Asd;
