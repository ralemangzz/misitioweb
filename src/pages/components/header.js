import React from "react";
import ilustration from '../imgs/undraw_selecting_1lx3.svg';
import Form from './contact.form';

export default () => (

    <header className="bg-indigo-600">
       <div className="container mx-auto p-12 max-w-4xl">

        <div className="flex justify-center items-center">
        <div className="flex-1">  
       <h1 className="font-bold text-6xl">¡Hola! Soy Alan</h1>
       <p className="text-xl">Diseñador de páginas web y consultor.</p>
       </div>
       <img src={ilustration} alt="Hombre seleccionando un elemento de un grid" style={{height:"300px"}}></img>
      </div>
      <div>
         <Form />
      </div>

      
      </div>

   
    </header>
)