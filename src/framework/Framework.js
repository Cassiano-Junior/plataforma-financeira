import React from "react";
import swal from "./helpers/swal";
import api from "./helpers/api";
import asyncLocalStorage from './helpers/asyncLocalStorage'
import Loading from "../project/views/components/Loading";
import { env } from "../Config";


export const Framework = React.createContext({
    swal,
    Loading,
    api,
    asyncLocalStorage,
    env
});

export default Framework;
