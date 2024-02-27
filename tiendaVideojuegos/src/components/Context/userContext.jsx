import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
        const [user, setUser] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q5QGdtYWlsLmNvbSIsImlhdCI6MTcwODU1NTg3OH0.E-qg0-0YoW_dgwiXpFWr78WYM7sTHNwiNWj4t8LuxRk");

        return (
            <UserContext.Provider value= {{user, setUser}}>
                {children}
            </UserContext.Provider>
        );

    };

export default UserProvider;