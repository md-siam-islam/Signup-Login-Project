import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebaseinit";

export const Authprovider = createContext(null)

const Authcontext = ({children}) => {


    const signupHanlde = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInhandle = (email,password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const authinfo = {
        signupHanlde,
        signInhandle,
    }
    return (

        
        <Authprovider.Provider value={authinfo}>
            {children}
        </Authprovider.Provider>
    );
};

export default Authcontext;


