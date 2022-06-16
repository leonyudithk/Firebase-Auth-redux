import { typesAgendar } from "../types/types"


export const actionAddAgendaSync = (formValue) =>{
    return {
        type: typesAgendar.add,
        payload: formValue
    }

}

export const actionDeleteEmailSync = (email)=>{
    return {
        type: typesAgendar.delete,
        payload: email
    }
}