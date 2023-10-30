import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function QWE() {
  const { pathname } = useLocation();

  return (
    <div>

      <Link
        to="/FDS/ZXC"    
        id="234"
        className={pathname.match("/FDS/CXZ") ? "SDF" : ""}
      >
        DSA
      </Link>

      <Link
        to="/FDS/CXZ"
        id="123"
        className={pathname.match("/FDS/ZXC") ? "ASD" : ""}
      >
        FDS
      </Link>
    </div>
  );
}

export default QWE;
