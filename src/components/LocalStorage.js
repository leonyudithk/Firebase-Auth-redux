

//----Guardarla la información
export const guardarDatos =(stateAgendarCita)=>{
        localStorage.setItem('AgendaCitas', JSON.stringify(stateAgendarCita))
}

//---- Obtener o leer la información
export const obtenerDatos =()=>{
    const citasLocalStorage = localStorage.getItem("AgendaCitas")
    return JSON.parse(citasLocalStorage)

}