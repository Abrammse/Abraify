import { createContext } from "react";


export const AppContext = createContext()


const AppContextProvider=(props)=>{
    const [user, setUser] = useState(null);

    const value = {
        user, setUser
    }
      return(
<AppContext.Provider>
{props}
</AppContex.Providert>

      )

}