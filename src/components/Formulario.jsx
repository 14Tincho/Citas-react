import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  // Estas const llamados hook solo se ponen adentro del componente y arriba de todo, tampoco se ponen en un IF
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(()=>{
    if ( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarID = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }
    // Esto es para que dsp de llenar el Formulario, te lo pone false de nuevo
    setError(false)

    // objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
      // id: generarID()
    }
    if( paciente.id ){
        // Editando el registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})

    }else{
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente])      
    }

    // el "...pacientes" permite no modificar el objeto original

    //reiniciamos el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }



  return (
    <div className="md:w-1/2 lg:w-2/5">
      
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {''}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
      </p>

      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
        action="" 
        method="post">

        {/* El &&, indica que si error es true, imprime eso, si pones el html entre parentesis como lo puse, se puede colocar en diferentes líneas */}
        {error && <Error><p> Tiene que completar todos los campos </p></Error>}

          {/******************* Input nombre mascota *********************/}
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
              Nombre Mascosta
            </label>
            <input
              id="mascota"
              type="text" 
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          {/******************* Input Propietario *********************/}
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text" 
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          {/******************* Input Email *********************/}
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email" 
              placeholder="Email Contacto Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/******************* Input Alta *********************/}
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          {/******************* Input Textarea *********************/}
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
              Sintomas
            </label>
            <textarea 
              name="" 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Describir los Sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          {/******************* Boton de Enviar *********************/}
          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
            value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />

      </form>

    </div>
  )
}

export default Formulario