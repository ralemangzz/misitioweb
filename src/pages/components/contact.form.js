import React from "react";


export default () => (
    <form className="mt-16 text-center">  
        <label htmlFor="contact-content" className="blok text-black text-sm font-bold mb-2">Cuéntame de esa idea que tienes pensado en hacer:</label>
    <div className="flex shadow rounded bg-white boder p-2">
        <textarea
         id="contact-content"
         name="contact-content"
         className="flex-1 py-2 px-3 text-black focus:outline-none focus:shadow-outline"></textarea>
        <button className="ml-4">Enviar</button>
    </div>
    </form>
);