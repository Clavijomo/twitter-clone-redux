import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
} from "../types";

// Muestra la alerta
export function mostrarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch(crearAlerta(alerta));
  }
}

const crearAlerta = alerta => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})