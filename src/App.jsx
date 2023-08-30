import preguntastennisTrivia from "./preguntas";
import { useState, useEffect } from "react";
import "./global.css";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(40);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntastennisTrivia.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(40);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 30000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);
  var puntiacionuno = puntuación;
  if (puntiacionuno <= 3) {
    if (isFinished) {
      return (
        <>
          <main className="contendor-principal-juego-cuestionario-tennis">
            <div className="juego-terminado">
              <h4>Tu eres todo un rokero</h4>
              <p className="tyc-juego-tennis">
                Eres una persona llena de estilo mas clasico
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="boton-continuar-cuestionario"
              >
                {" "}
                Ver los productos
              </button>
            </div>
          </main>{" "}
        </>
      );
    }
  }

  var puntiacionDos = puntuación;
  if (puntiacionDos === 4) {
    if (isFinished) {
      return (
        <>
          <main className="contendor-principal-juego-cuestionario-tennis">
            <div className="juego-terminado">
              <h4>Tu eres toda una Nea</h4>
              <p className="tyc-juego-tennis">
                Eres una persona llena de estilo mas clasico
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                <br />
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="boton-continuar-cuestionario"
              >
                {" "}
                Ver los productos
              </button>
            </div>
          </main>
        </>
      );
    }
  }
  var puntiacionTres = puntuación;
  if (puntiacionTres === 5) {
    if (isFinished) {
      return (
        <main className="contendor-principal-juego-cuestionario-tennis">
          <div className="juego-terminado">
            <h4>Tu eres todo un casual</h4>
            <p className="tyc-juego-tennis">
              Eres una persona llena de estilo mas clasico
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              <br />
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="boton-continuar-cuestionario"
            >
              {" "}
              Ver los productos
            </button>
          </div>
        </main>
      );
    }
  }

  if (answersShown)
    return (
      <>
        <main className="contendor-principal-juego-cuestionario-tennis">
          <div className="imagen-cuestionario-tennis">
            <div className="lado-izquierdo"></div>
            <div className="numero-pregunta">
              <span> Pregunta {preguntaActual + 1} de</span>{" "}
              {preguntastennisTrivia.length}
            </div>
            <div className="titulo-pregunta">
              {preguntastennisTrivia[preguntaActual].titulo}
            </div>
            <div>
              {
                preguntastennisTrivia[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].textoRespuesta
              }
            </div>
            <button
              onClick={() => {
                if (preguntaActual === preguntastennisTrivia.length - 1) {
                  window.location.href = "/";
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
              className="boton-continuar-cuestionario"
            >
              {preguntaActual === preguntastennisTrivia.length - 1
                ? "Ver los productos"
                : "Siguiente"}
            </button>
          </div>
        </main>
      </>
    );

  return (
    <>
      <div className="titulo-regalo-ideal-cuestionario-tennis">
        <h1>EL REGALO IDEAL</h1>
      </div>
      <div className="imagen-principal-tennis-cuestionario">
        <img
          src="https://tennis.vtexassets.com/assets/vtex.file-manager-graphql/images/ec1508cb-2bf8-4dbe-8211-33e33fa6444d___aa29dd82c7e8875995264021213ec236.svg"
          alt="imagen principal"
        ></img>
      </div>
      <main className="contendor-principal-juego-cuestionario-tennis">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span>{" "}
            {preguntastennisTrivia.length}
          </div>
          <div className="titulo-pregunta">
            {preguntastennisTrivia[preguntaActual].titulo}
          </div>
          <div>
            {!areDisabled ? (
              <span className="tiempo-restante">
                Tiempo restante: {tiempoRestante}{" "}
              </span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === preguntastennisTrivia.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
                className="boton-continuar-cuestionario"
              >
                Continuar
              </button>
            )}
          </div>
        </div>
        <div className="lado-derecho">
          {preguntastennisTrivia[preguntaActual].opciones.map((respuesta) => (
            <button
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
              className="boton-continuar-cuestionario"
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
