import { combineReducers, createStore } from "redux";
import { guardarDatos } from "../../components/LocalStorage";
import { citasReducers } from "../reducers/citasReducers";
import { loginReducers } from "../reducers/loginReducers";

const reducers = combineReducers({
    agendarCitaStore: citasReducers,
    loginStore: loginReducers
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
    guardarDatos({
        cita: store.getState().agendarCitaStore
    })
})