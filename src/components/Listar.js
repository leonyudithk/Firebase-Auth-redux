import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteEmailSync } from '../redux/actions/actionAgendar';

const Listar = () => {
   const dispatch = useDispatch()
    // el que va entre {es el nonbre del estado que viene desl reducers}
    //el que esta (es el nombre del estado que se manaja en la store dentro del combineRredcers)
  const { agendaCitas} = useSelector(store => store.agendarCitaStore)

  const handleDelete = (email)=>{
      alert('vamos a eliminar', email)
      dispatch(actionDeleteEmailSync(email))

  }
console.log(agendaCitas)
    return (
        <div  style={{margin: '5%', marginLeft: '10%', marginRight: '10%'}}>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Síntoma</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {
                    agendaCitas.map((cita, index)=>(
                        <tr key={index} style={{textAlign: 'center'}}>
                        <td>{cita.nombre}</td>
                        <td>{cita.email}</td>
                        <td>{cita.fecha}</td>
                        <td>{cita.hora}</td>
                        <td>{cita.telefono}</td>
                        <td>{cita.sintomas}</td>
                        <td>
                            <Button type="button" className="btn btn-danger" onClick={()=>handleDelete(cita.email)}>X</Button>
                        </td>
                    </tr>
                    ))
                }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Listar;