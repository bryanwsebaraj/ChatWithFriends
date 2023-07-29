import { createContext } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username,setUsername] = useState(null);
    const [id,setID] = userState(null);
    return (
        <UserContext.Provider value={{username, setUsername, id, setID}}>
            {children}
        </UserContext.Provider>
    );
}