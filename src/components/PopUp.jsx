import React from "react"

export default function PopUp(readFullProps) {
    return (
            <div className="popup" key={readFullProps.id} >
                <div className="popup--topside">
                    <h3 className="popup--title">{readFullProps.title}</h3>
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <div className="popup--middle">
                    <p>{readFullProps.author}</p>
                    <p>|</p>
                    <p>{readFullProps.date}</p>
                </div>

                <div className="container-content">
                    <p>{readFullProps.content}</p>
                </div>  

                <div className="popup--bottom">
                    <button className="popup--publish">Publish</button>
                    <button className="popup--delete">Delete</button>
                </div>
            </div>
    )
}