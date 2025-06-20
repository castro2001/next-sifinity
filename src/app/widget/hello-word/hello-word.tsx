import React from "react";
import { WidgetContext,htmlAttributes } from "@progress/sitefinity-nextjs-sdk";
import {HelloWorldEntity} from "./hello-word.entity";

export function HelloWorld(props: WidgetContext<HelloWorldEntity> ){

    // Se necesitan atributos para que el widget sea visible en el modo de edición
    const dataAttributes = htmlAttributes(props);

    return(
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h1 {...dataAttributes}>{props.model.Properties.Content}</h1>
                </div>
            </div>

        </section>
    );
}
