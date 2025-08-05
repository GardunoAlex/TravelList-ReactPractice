
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
    return(
      <form className="add-form">
        <h3>What do youneed for your trip?</h3>
        <select>
          {/*
          array.from: basically creating an array in place I believe
          lenght of 20, idek what the _ is supposed to represent. 
          then you do the .map - so everything before it is just treated as an array
          num is the name of each item in the array. 
          */}
          {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>
            {num}
          </option> )}
        </select>
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
