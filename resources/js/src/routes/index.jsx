import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// const LoginPage = React.lazy(() => import("../pages/common/login"));
// const Dashboard = React.lazy(() => import("../pages/private/home"));
// const RegisterPage = React.lazy(() => import("../pages/private/register"));
import PublicLayout from "../layouts/public";
import PrivateLayout from "../layouts/private";
import Loader from "../components/loader";
import { publicRoutes } from "./allRoute";
import { privateRoutes } from "./allRoute";

const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                {privateRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <React.Suspense
                                    fallback={
                                        <>
                                            <Loader />
                                        </>
                                    }
                                >
                                    <ElementPage />
                                </React.Suspense>
                            }
                        />
                    );
                })}
            </Route>

            <Route element={<PublicLayout />}>
                {publicRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <React.Suspense
                                    fallback={
                                        <>
                                            <Loader />
                                        </>
                                    }
                                >
                                    <ElementPage />
                                </React.Suspense>
                            }
                        />
                    );
                })}
            </Route>
        </Routes>
    );
};

export default MainRoutes;
