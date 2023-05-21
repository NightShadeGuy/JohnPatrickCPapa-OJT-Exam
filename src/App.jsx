import React, { useState } from 'react'
import Header from "./components/Header"
import ReadFull from './components/ReadFull'
import jsonData from "./MOCK_DATA.json"

export default function App() {
  const [data, setData] = useState(jsonData);
  //const [listIndex, setListIndex] = useState([]); 
  //console.log(data);

  const updatedItems = [...data];

  function handleDelete(index, show) {
    //console.log(show);
 
    if(!show.checkedItem) {
       updatedItems.splice(index, 1);
       setData(updatedItems);
    }  
  }

  function handleRemove() {
    updatedItems.shift();
    setData(updatedItems);
    
  }

  const readList = data.map((data, index) => {
    return (
              <ReadFull  key={data.id}
                         id={data.id}
                         author={data.author}
                         title={data.title}
                         content={data.content}
                         date={data.date}
                         index={index}
                         handleDelete={handleDelete}              
              />
    )
  })

    return (
      <div className="container">
          <Header  handleRemove={handleRemove} />
          {readList}
      </div>
    )
}


