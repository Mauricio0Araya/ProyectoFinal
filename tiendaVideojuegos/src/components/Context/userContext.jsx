import { createContext, useState } from "react";
import Usuarios from '../../assets/json/usuarios.json'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
        const [user, setUser] = useState("test");
        const [usuariolista, setUsuarioLista] = useState(Usuarios)

        return (
            <UserContext.Provider value= {{user, setUser, usuariolista, setUsuarioLista}}>
                {children}
            </UserContext.Provider>
        );

    };

export default UserProvider;