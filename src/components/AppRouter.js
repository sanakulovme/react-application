import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const';

const AppRouter = () => {
    const user = false;
    return (
        <Routes>
            {user ? (
                <>
                    {privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
                </>
            )}
        </Routes>
    );
}

export default AppRouter;
