import React, { useState } from "react"
import PopUp from "./PopUp"

export default function ReadFull(props) {
    const [show, setShow] = useState(
        {
           popup: false,
           checkedItem: false
        }
    );
    //console.log(show)

    const overlay = document.createElement('div');
    function toggle() {
        setShow(prevShow => {
            return {
                ...prevShow,
                popup: true,
            }
        })   
        overlay.classList.add('overlay');
        document.body.append(overlay);
    }

    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay');
        document.body.removeChild(overlay);
        setShow(prevShow => ({...prevShow, popup: false}));
    })

       
    function handleChange(event) {
        const {name, checked} = event.target;
         setShow(prevShow => {
            return {...prevShow, [name]: checked }
         });
         //console.log(show);
    }

    return (
        <div className="read--container" key={props.id}>
             
            <div className="topside">
               <i className="fa-solid fa-grip-vertical"></i>
                <input type="checkbox"
                       name="checkedItem"
                       checked={show.checkedItem}
                       onChange={handleChange}
                       onClick={() => props.handleDelete(props.index, show)}/>
                <p className="topside--title">{props.title}</p>                   
            </div>

            <div className="middle">
                <i className="fa-solid fa-user"></i>
                <p>{props.author}</p>
                <i className="fa-regular fa-calendar"></i>
                <p>{props.date}</p>
            </div>

            <div className="bottom" onClick={toggle}>
                <p className="bottom--content">{props.content.slice(0, 50) + "..."}</p> 

                { show.popup === false &&
                <div>
                   <i className="fa-solid fa-eye"></i>
                   <span >Read Full</span>
                </div> }

               { show.popup &&
                <div>
                   <i className="fa-solid fa-eye-slash"></i>
                   <span >Hide</span>
                </div>}
            </div>
            
            <div className="category">
                 <button>#Sports</button>
                 <button>#Worldwide</button>
                 <button>#Local</button>            
            </div>

            { show.popup &&
                  <PopUp  key={props.id}
                          author={props.author}
                          title={props.title}
                          content={props.content}
                          date={props.date}
                  />}     

        </div>
    )
}