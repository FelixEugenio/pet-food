import React from "react"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.png"

export const SignUp = () => {

    return (
        <div className="Container-fluid h-100 bg-primary">
            <div className="col-12">
                <img src={logo}  alt="Logo" />
            </div>
            <div className="row">
               
            <div className="col-6">
                <img src={bg}  alt="Logo" />
            </div>

            <div className="col-6">
            <div className="box">
                <h2>Falta pouco pra fazer pra seu pet feliz.</h2>
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome completo" />
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Email" />
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone" />
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Nif" />
                <input type="date" className="form-control form-control-lg mb-3" placeholder="data de nascimento" />
                <button className="btn btn-primary btn-lg btn-block">Cadastrar</button>
           </div>
            </div>

            </div>

           
        </div>
    )
}