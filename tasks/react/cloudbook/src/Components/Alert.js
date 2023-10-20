import React from 'react'

function Alert({ alert }) {

    const capitalize = (word) => {

        if (word === "danger") {
            word = "error";
        }

        if (word === "primary") {
            word = "kindly"
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className='d-flex justify-content-center'>
            <div style={{ height: '80px', width: '50vw', marginTop: '10px', alignSelf: 'center' }}>
                {alert && <div className={`alert alert-${alert.type} alert-dismissible show" role="alert"t`}>
                    <strong>{capitalize(alert.type)}</strong> {alert.msg}
                </div>}
            </div>
        </div>
    )
}

export default Alert