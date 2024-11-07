import axios from "axios";

const i = axios.create({ baseURL: 'http://localhost:8080' });

export const login = async (username, password) => {
    const token = btoa(username + ":" + password);
    const response = await i.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + token,
        },
    });
   if(response.data.resp == "Login exitoso"){
        setAuth(btoa(username + ":" + password));
     
    }
}

export const setAuth = async (token) => {
    i.defaults.headers.common["Authorization"] = `Basic ${token}`;
};

export const test = () => {
  return i.get("/users");
};
