/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Illustration from '../../assets/illustration.png';
import { Header } from '../../components/header';
export const SignUp = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
              
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
             
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="NIF"
              
            />

            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"

            />

            
              Finalizar Pedido
           
          </div>
        </div>
      </div>
    </div>
  );
};


