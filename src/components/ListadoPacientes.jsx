import {useEffect} from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // useEffect(()=>{
  //   if (Object.keys(paciente).length > 0) {
  //     setNombre(paciente,nombre)
  //     setPropietario(paciente,propietario)
  //     setEmail(paciente,email)
  //     setFecha(paciente,fecha)
  //     setSintomas(paciente,sintomas)
          
  //   }
  // }, [pacienteS])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map( (paciente, index) => (
              <Paciente 
                  key={paciente.id}
                  paciente = {paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
              />
          ))} 
        </>
        ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Cominza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
        )
      }
    </div>
  )
}

export default ListadoPacientes