"use client";
import React from "react";
import { WidgetContext,htmlAttributes } from "@progress/sitefinity-nextjs-sdk";
import {JumbotronEntity} from "./Jumbotron.entity";

export function Jumbotron(props: WidgetContext<JumbotronEntity> ){

    // Se necesitan atributos para que el widget sea visible en el modo de edición
    const dataAttributes = htmlAttributes(props);
    // Obtener el tipo de botón, usando 'primary' como valor predeterminado
    const btnColor = props.model.Properties.BtnColor || "primary";
    const btnType = props.model.Properties.BtnTypeButton || "btn";

    const handleClick = ()=>{
        location.href = props.model.Properties.BtnLink
    }

    return(
      <div className="container mt-5">
          <section className="p-5 mb-4 p-3 mb-5 bg-body-tertiary shadow " {...dataAttributes}> 
            <div className="container-fluid py-5" >  
                <h1 className="display-5 fw-bold">{props.model.Properties.Title}</h1> 
                <p className="col-md-8 fs-4">  {props.model.Properties.Description}.</p> 
                <button className= {` btn ${btnType+"-" +btnColor} btn-lg`} type="button" onClick={handleClick }>{props.model.Properties.BtnText}</button>
            </div> 
        </section>
      </div>
    );
}
