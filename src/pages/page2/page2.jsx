import React from "react";
import './page2.css';
function Galeria() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const url = "https://swapi.dev/api/people/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);
  return (
    <div>
    <p></p>
    
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (

          <div className="card">
            <div className="container">
            
              <p></p>
              <p>Nome - {user.name}</p>
              <p>Sexo - {user.gender}</p>
              <p>Peso - {user.mass}</p>
              <p>Cor do cabelo - {user.hair_color}</p>
              <p>Cor da pele - {user.skin_color}</p>
              <p>Cor dos olhos{user.eye_color}</p>
              <p>Ano do Aniversário - {user.birth_year}</p>

            </div>
          </div>


        ))
      )}
    </div>
  );
}


export default Galeria;