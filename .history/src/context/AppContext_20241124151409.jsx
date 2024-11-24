import { createContext } from "react";


export const AppContext = createContext()


const AppContextProvider=(props)=>{
    const [user, setUser] = useState\e(null);

    const value = {
        user, setUser
    }
      return(
<AppContext.Provider>
     {props.children}
</AppContext.Provider>

      )

}