import React ,{useState} from 'react';

function FetchApii() {
    const [data,setData] = useState([]);
  const apiGet = () => { 
    fetch('https://apimocha.com/quicksell/data')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
      
      
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch Api</button>
      <br/>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default FetchApii;