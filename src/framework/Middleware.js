import { useContext, useEffect, useState, } from "react"
import User from "../project/models/User";
import Routes from "../project/routes";
import Framework from "./Framework";
import AppContext from "./helpers/AppContext";
import General from '../project/models/General';

export default function Middleware(props) {
    const myContext = useContext(AppContext);
    const { asyncLocalStorage } = useContext(Framework);
    const [checked, setChecked] = useState(false);

    async function getRule() {
        var currentRoute = window.location.pathname.substring(1).split('/')[0];
        return new Promise(resolve => {
            Routes.guest.map((route) => {
                if (currentRoute === route) {
                    return resolve('guest')
                }
                return false;
            })

            Routes.auth.map((route) => {
                if (currentRoute === route) {
                    return resolve('auth')
                }
                return false;
            })

            Routes.any.map((route) => {
                if (currentRoute === route) {
                    return resolve('any')
                }
                return false;
            })
        });
    }

    function applyRule() {
        getRule().then((rule) => {
            var token = myContext.token;
            switch (rule) {
                case 'any':
                    myContext.setChecked(true)
                    break;
                case 'auth':
                    if (!token)
                        window.location.href = '/login';
                    else
                        myContext.setChecked(true)
                    break;
                case 'guest':
                    if (token)
                        window.location.href = '/dashboard';
                    else
                        myContext.setChecked(true)
                    break;
                default:
                    myContext.setChecked(true)
                    break;
            }
        })

    }

    async function checkToken() {
        return asyncLocalStorage.getItem('TOKEN').then((token) => {
            if (token) {
                return User.check(token).then((valid) => {
                    if (valid) {
                        myContext.setToken(token)

                    } else {
                        asyncLocalStorage.removeItem('TOKEN')
                    }
                })
            }
        });
    }

    useEffect(() => {

        if (!checked && !myContext.token) {
            checkToken().then(() => {
                General.Header().then((data) => {
                    myContext.setHeader(data)
                    setChecked(1)
                })
            })
        } else if (myContext.token && !myContext.userinfos) {
            User.getinfo(myContext.token).then((infos) => {
                if (infos) {
                    var userInfos = {};
                    infos.infos.map((bo) => {
                        userInfos[bo.key] = bo;
                    });
                    infos.infos = userInfos;
                    myContext.setUserinfos(infos)
                    setChecked(2)
                }
            })

        }
        else if (myContext.token && myContext.userinfos) {
            applyRule()

        } else {
            applyRule()
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked])

    return props.children
}