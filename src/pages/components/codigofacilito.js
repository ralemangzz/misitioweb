import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`{
    codigoFacilitoJson {
              data {
                certificates {
                  title
                  score
                  code
                 }
                 courses {
                    title
                    progress
                    url
                  } 
            }
        }          
    }`)

    console.log(data)
    return (
      <section>
          <div className="mt-24">
              <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center">Mis certificados online en CódigoFacilito</h2>
              <div className="flex mt-8">
                  {
                      data.codigoFacilitoJson.data.certificates.map(certificate => (
                          <div className="shadow p-8 bg-white mr-4">
                              <h4 className="font-bold">{certificate.title}</h4>
                              <div className="text-center">
                                <span className="inline-block bg-indigo-300 text-blue-700 p-2 mt-2 radius">Calificación: {certificate.score}</span>
                              </div>
                          </div>
                      ))
                  }
              </div>

              <h2 className="text-3xl font-bold text-center mt-12">Mis cursos</h2>
              <div className="flex mt-8">
                  {
                      data.codigoFacilitoJson.data.courses.map(course => (
                          <div className="shadow p-8 bg-white mr-4 rounded">
                              <h4 className="font-bold h-40">
                                  <a href={course.url} target="_blank">{course.title}</a>
                              </h4>
                              <div className="text-center">
                                <span className="inline-block bg-indigo-300 text-blue-700 p-2 mt-2 radius">Progreso: {parseInt(course.progress)}%</span>
                              </div>
                          </div>
                      ))
                  }
              </div>
              </div>
          </div>
      </section>
    );
}