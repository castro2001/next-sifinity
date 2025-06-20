"use client";
import React, { useEffect, useState } from "react";
import { WidgetContext,htmlAttributes } from "@progress/sitefinity-nextjs-sdk";
import { CardEntity } from "./Card.entity";
import {ICard} from "./ICard";
import "./Card.css";
export  function Card(props: WidgetContext<CardEntity>) {
      const url = "https://localhost:5001/api/default";
    //  const url = "https://stephen-king-api.onrender.com/api/books";

    const [books,SetBooks] = useState<CardEntity[]>([]);
    const [imagen,SetImage] = useState<ICard[]>([]);

    const fetchBooks = async (url: string)=>{
        try {
           
            const response = await fetch( `${url}/libros`);
            if (!response.ok) throw new Error("Error en la respuesta");
            const data = await response.json();
            SetBooks(data.value); // o data.value, según tu API
            const imagenesTemp: ICard[] = [];
            // Iterar sobre cada libro para obtener su imagen usando el ID
            for (const libro of data.value) {
                const imageResponse = await fetch(`${url}/libros(${libro.Id})/Imagen`);
                if (imageResponse.ok) {
                    const imageData = await imageResponse.json();
                
                    imagenesTemp.push({
                        Id:imageData.value[0]?.Id,
                        Title: libro.Title,
                        Url: imageData.value[0]?.Url 
                    });

                } else {
                    console.warn(`No se pudo cargar imagen para el libro ${libro.Id}`);
                }
            }
            SetImage(imagenesTemp);
        } catch (error) {
            console.error("Error al cargar libros:", error);
        }
    }


     useEffect(()=>{
        fetchBooks(url)  
    },[]);


    return(
        
        <section className="Container">
            {/* <h1>Prueba de APIS</h1> */}
        <section className="Container-fluid p-5">
            <div className="row  row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {books.map((book,index) => (
                <section className="col" key={book.Id}>
                    <section className="card h-100 d-flex flex-column" >
                        {imagen[index]?.Url && (
                            <img src={imagen[index].Url} className="card-img-top rounded image  " alt={book.Title} />
                        )}
                        <div className="card-body p-4 flex-grow-1">
                            <h5 className="card-title">{book.Title} </h5>
                            <p className="card-text"> Precio: ${book.Price}</p>
                    
                               
                        </div>
                        <div className="card-footer text-center ">
                               <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#bookModal-"+book.Id} >
                            Ver más
                            </button> 
                        </div>

                    </section>
                </section>
                    ))}
            </div>
        </section>

        {books.map((book,index) => (

       <div className="modal fade" id={"bookModal-" + book.Id}  key={book.Id} data-bs-backdrop="static" data-bs-keyboard="false"  tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <section className="modal-dialog">
                <section className="modal-content">
                    <header className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{book.Title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </header>

                    <section className="modal-body">
                        <section className="row g-0">
                            <figure className="col-md-4">
                                {imagen[index]?.Url && (
                                    <img src={imagen[index].Url} className="img-fluid h-100 rounded-start mt-2 "  alt={book.Title} />
                                )}
                            </figure>
                            <section className="col-md-8">
                            <ul className="list-group">
                                    <li className="list-group-item">
                                        <p><strong>Descripcion:</strong> {book.Description}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p><strong>Precio:</strong> ${book.Price}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p><strong>ISBN</strong> {book.ISBN}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p><strong>Publicado:</strong> {book.Published}</p>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </section>

                    {/* <footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </footer> */}
                </section>
            </section>
        </div>
        ))}

        </section>
    );
}

