const Universidad = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          fontWeight: "bold",
          color: "green",
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "5vw",
        }}
      >
        Mision y Vision
      </div>
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "larger",
            textAlign: "center",
            color: "green",
          }}
        >
          MISIÓN
        </div>
        <div style={{ padding: "10px" }}>
          Somos una Institución Pública de Educación Superior socialmente
          responsable, que contribuye al desarrollo regional y nacional mediante
          la formación integral de seres humanos competentes y comprometidos con
          la sustentabilidad de su entorno.
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src="./img1.jpg"
            class="img-fluid"
            alt="..."
            style={{ width: "10vw" }}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "larger",
            textAlign: "center",
            color: "green",
            marginTop: "10px"
          }}
        >
          VISIÓN
        </div>
        <div style={{ padding: "10px" }}>
          Ser una Institución Pública de Educación Superior socialmente
          responsable y sustentable, reconocida a nivel global por sus egresados
          competentes, programas educativos acreditados, cuerpos académicos
          consolidados y de vinculación certificados por su calidad y que
          contribuyen al desarrollo regional y nacional.
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src="./img2.jpg"
            class="img-fluid"
            alt="..."
            style={{ width: "10vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Universidad;
