

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];



export default function App(){
  return(
    <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
  );
  
}

  function Logo(){
    return (
      <h1>🌴 Far Away 🦇 </h1>
    );
  }
  function Form(){
    /**
     * description, this is the variable that we will use to update and show what the user is typing in the description box. 
     * quantity, this is the variable that we will use to update the quantity that the user chooses. 
     */
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);

    function handleSubmit(e){
      e.preventDefault();
      
      // if there was no description submitted, just return nothing -- do nothing basically. 
      if (!description){
        return;
      }

      // object for a new item
      const newItem = { description, quantity, packed: false, id: Date.now() };
      
      console.log(newItem);

      // setting the variables back to there initial states, so that the submit park
      setDescription("");
      setQuantity(1);
  
    }

    return(
    
      <form className="add-form" onSubmit={handleSubmit} >
        <h3>What do you need for your trip?</h3>

        {/**
         * For the "select" section -- where the user chooses a number -- we will assign the value of that sections as quantity. 
        * when the quantity changes, we activate the "onChange" fucntion. We then set the quantity to whatever the user chose -- e.target.value
        * We have to use the Number() function since e.target.value technically returns a string, not a num. 
         */}

        <select value={quantity} onChange={ (e) => setQuantity(Number(e.target.value))}>
          {/*

          (e) is the event. need to do more research on how events actually work. 


          array.from: basically creating an array in place I believe
          lenght of 20, idek what the _ is supposed to represent. 
          then you do the .map - so everything before it is just treated as an array
          num is the name of each item in the array. 
          */}
          {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>
            {num}
          </option> )}
        </select>
        {/*
        type, is the data type I think 
        placeholder, is what comes up in the type in box. 
        value, is the variable that we're assigning
        as the thing inside the box is changing, we are updating "value" and displaying it in the box. 
        That's what we're using setDescription() for in this case. 
        */}
        <input type="text" placeholder="Item..." value={description} onChange={ (e) => setDescription(e.target.value)}></input>
        <button >
          Submit
        </button>
      </form>

    );

  }
  function PackingList(){
    /*
    NEED to have the key for some reason, otherwise, react will complain. 
    */
    return(
      <div className="list">
        <ul >
          {initialItems.map( (item) => <Item item={item} key={item.id}/>)}
        </ul>
      </div>

      
    );


  }

  function Item({item}){
    return (
    <li>
      <span style={item.packed  ? {textDecoration: "line-through"} : {}}>
        {item.quantity}{item.description}
      </span>
      <button className="button">
        ❌
      </button>
      
    </li>)
  }
  function Stats(){
    return(
      <footer>
        <em>You have X items o you rlist, and you already packed X%</em>
        
      </footer>
    );
  }
