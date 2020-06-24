import React from "react";
import repos from '../data/repos';
import Repo from './repo';

export default () => (
 <div className="max-w-4xl mx-auto mt-12">
     <header className="text-center">
     <h2 className="text-3xl font-bold">Mi trabajo en Opern Source</h2>
     <p>Colaboración de código</p>
     </header>
     <ul>
         {
             repos.map((repo)=>{
             return <Repo repo={repo} key={repo.id} />
             })
         }
     </ul>
 </div>
);