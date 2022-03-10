import './App.css';
import { useState } from 'react';
import Boton from "./Boton.js"
import CarouselHumilde from "./CarouselHumilde"
import CarouselContainer from "./CarouselContainer"

function App() {


// const persona = {
//   nombre: "Eliana", 
//   edad: 18, 
//   tieneMascotas: true
// }

// console.log(persona)
// console.log(Object.keys(persona))
// console.log(Object.values(persona))

// Object.keys(persona).map(keys => console.log(keys))
// Object.values(persona).map(valor => console.log(valor))

// // Object.keys--> agarra todas las claves de un objeto y las mete en un array

// // Object.values --> agarra todos los valors de un objeto y los mete en un array

  const initialState = { nombre: '', edad: '', genero: '', provincia: '' };
  
  const [datosFormulario, setDatosFormulario] = useState(initialState);
  const [errors, setErrors] = useState({initialState});

  const handleChange = e => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let errores = {...initialState}
    Object.keys(datosFormulario).map(key => {
      if (datosFormulario[key] == "") {
        errores = {
          ...errores, 
          [key]: `El campo ${key} no puede estar vacio`
        }
      }
    })

    setErrors({...errores})
  };

  const handleBlur  = () => {
    console.log("me hicieron foco")
  }

  return (
    <div className="App">

    <CarouselHumilde />
      <h1>Adopte un gato</h1>

      <CarouselContainer />

      <Boton 
        deshabilitado={true}
        
      />
      <Boton 
        deshabilitado={false}
      />

      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Nombre
          <input
            className={errors.nombre ? "error" : "input"}
            onBlur={handleBlur}
            type="text"
            name="nombre"
            onChange={handleChange}
            value={datosFormulario.nombre}
          ></input>

          {errors.nombre && <h3>{errors.nombre}</h3>}
        </label>

        <label>
          {' '}
          Edad
          <input
            className={errors.edad ? "error" : "input"}
            onBlur={handleBlur}
            type="number"
            name="edad"
            onChange={handleChange}
            value={datosFormulario.edad}
          ></input>

          {errors.edad && <h3>{errors.edad}</h3>}
        </label>

        <label>
          {' '}
          <p className={errors.genero ? "error" : "input"}>Genero del gatito buscado</p>
          <p>Indistinto</p>
          <input
            type="radio"
            onBlur={handleBlur}
            value="indistinto"
            name="genero"
            onChange={handleChange}
            checked={datosFormulario.genero === 'indistinto'}
          />
          <p>Masc</p>
          <input
            type="radio"
            onBlur={handleBlur}
            value="masculino"
            name="genero"
            onChange={handleChange}
            checked={datosFormulario.genero === 'masculino'}
          />
          <p>Fem</p>
          <input
            type="radio"
            onBlur={handleBlur}
            value="femenino"
            name="genero"
            onChange={handleChange}
            checked={datosFormulario.genero === 'femenino'}
          />

          {errors.genero && <h3>{errors.genero}</h3>}
        </label>

        <label>
          provincia
          <select
              className={errors.provincia ? "error" : "input"}
            name="provincia"
            onChange={handleChange}
            value={datosFormulario.provincia}
            onBlur={handleBlur}
          >
            <option value="">Seleccionar opcion</option>
            <option value="ba">BA</option>
            <option value="mdz">Mendoza</option>
            <option value="cba">Cba</option>
          </select>

          {errors.provincia && <h3>{errors.provincia}</h3>}
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
