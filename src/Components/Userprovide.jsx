import { useState } from "react";
import Usercontext from "./Usercontext";

export default function UserProvider({children}) {
    const[user,setUser] = useState(null)

    return (<Usercontext.Provider value={{user, setUser}}>
        {children}
    </Usercontext.Provider>)
}