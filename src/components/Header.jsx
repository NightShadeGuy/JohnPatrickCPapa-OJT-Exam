import React from "react"

export default function Header(props) {
  
    return (
        <div>
            <h2 className="title">News Articles</h2>
            <div className="same--section">
                <div className="left--section">
                    <input type="checkbox"/>
                    <button className="publish">Publish</button>
                    <button className="delete" onClick={props.handleRemove}>Delete</button>
                </div>
                <input type="text" className="search" placeholder="Search..." onChange={props.handleSearch}/>
            </div>
        </div>
    )
}