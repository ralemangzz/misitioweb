import React, { useEffect, useState } from "react";
import Repo from './repo';

export default () => {

    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect(()=>{

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.lenght);

            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/ralemangzz/repos");
            let myRepos = await response.json();
            setReposCount(myRepos.lenght);

            sessionStorage.setItem("repos", JSON.stringify(myRepos) );
            
            setRepos(myRepos);
         }


         fetchRepos();
       
    },[]);

 return (
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
};