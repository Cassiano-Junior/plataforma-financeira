import { Component } from "react";
import Api from "../helpers/api";
import AsyncLocalStorage from '../helpers/asyncLocalStorage'

export class User extends Component {

    static logout(GLOBAL) {
        GLOBAL.setToken(null);
        AsyncLocalStorage.removeItem('TOKEN')
    }

    static async check(token) {
        return Api.get('check', [], token).then((response) => {
            if (response.status === 200) {
                return true
            }
            else {
                return false;
            }
        })
    }
}
