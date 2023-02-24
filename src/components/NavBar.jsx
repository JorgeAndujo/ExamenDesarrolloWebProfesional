import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ width: "100%", display: "flex", padding: "10px" }}>
        <div style={{ width: "85vw" }}>
          <i className="bi bi-telephone-fill">
            <span style={{ fontWeight: "bold" }}>Teléfono: </span>
            <span>6444148687</span>
          </i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="bi bi-envelope-fill">
            <span style={{ fontWeight: "bold" }}>Correo Electrónico: </span>
            <span>comunicacion@uts.edu.mx</span>
          </i>
        </div>
        <div style={{ textAlign: "right", width: "inherit" }}>
          <i className="bi bi-facebook"></i>
          &nbsp;
          <i className="bi bi-twitter"></i>
          &nbsp;
          <i className="bi bi-youtube"></i>
          &nbsp;
          <i className="bi bi-instagram"></i>
        </div>
      </div>
      <div style={{ backgroundColor: "white", display: "flex", alignItems: "center", textAlign: "left" }}>
        <div style={{ width: "15vw" }}>
          <img src="./logoUts.png" class="img-fluid" alt="..." />
        </div>
        <div style={{ width: "65vw", textAlign: "right" }}>
            <NavLink to={"/"} className={(isActive) => isActive ? "active" : ""}>Inicio</NavLink>
            &nbsp;&nbsp;
            <NavLink to={"/universidad"} className={(isActive) => isActive ? "active" : ""}>Universidad</NavLink>
            &nbsp;&nbsp;
            <NavLink className={(isActive) => isActive ? "active" : ""}>Carreras</NavLink>
            &nbsp;&nbsp;
            <NavLink className={(isActive) => isActive ? "active" : ""}>Aspirantes</NavLink>
            &nbsp;&nbsp;
            <NavLink className={(isActive) => isActive ? "active" : ""}>Estudiantes</NavLink>
            &nbsp;&nbsp;
            <NavLink className={(isActive) => isActive ? "active" : ""}>Egresados</NavLink>
            &nbsp;&nbsp;
            <NavLink className={(isActive) => isActive ? "active" : ""}>Personal</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
