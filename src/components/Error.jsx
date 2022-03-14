import react from "react"


// Children es una palabra clave de react, podria poner mje y mje, tanto en este archivo como en el que lo estoy llamando
// lo que cambiaria es en formulario, en vez de ponerlo asi:
{/* <Error  mensaje = "Todos los campos dan erros"  /> */}
// Lo pone asi;
{/* <Error> Todos los campos dan error</Error> */}
const Error = ({children}) => {
  return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
          {children}
        </div>
  )
}

export default Error
