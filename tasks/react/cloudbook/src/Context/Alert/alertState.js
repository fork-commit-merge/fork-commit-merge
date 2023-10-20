import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, typ) => {
        setAlert({
            msg: message,
            type: typ
        })

        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }

    return (
        <AlertContext.Provider value={{ alert, setAlert, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState