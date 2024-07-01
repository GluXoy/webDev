import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "./PostIdPage";
import {privateRoutes, publicRoutes} from "./UI/router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                    exact={route.exact}
                />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                    exact={route.exact}
                />
            )}
        </Routes>
)};

export default AppRouter;