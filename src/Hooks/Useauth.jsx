import React, { useContext } from 'react';
import { Authcontex } from '../Authprovider/Authprovider';


const Useauth = () => {

    const Auth = useContext(Authcontex)
    return Auth
};

export default Useauth;