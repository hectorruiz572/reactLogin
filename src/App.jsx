import { useState } from "react";
import { login } from "./services/api";
import { test } from "./services/api";

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [usuarios, setUsuarios] = useState([]);

  const getUsers = () => {
    test()
      .then((response) => {
        console.log("Respuesta de la API:", response);
        setUsuarios(response.data);
      })
      .catch((err) => {
        console.error("Error en test:", err);
        setUsuarios([]);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => login(username, password)}>
        Iniciar Sesión
      </button>
      <button onClick={() => getUsers()}>Mostrar Usuarios</button>

      <div>
        <h1>Usuarios</h1>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
