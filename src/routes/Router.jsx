import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import LoginPage from "../user/pages/LoginPage";
import YarnsPage from "../yarns/pages/YarnsPage";
import AboutPage from "../utils/pages/AboutPage";
import MyCartPage from "../user/pages/MyCartPage";
import SignupPage from "../user/pages/SignupPage";
import MyOrdersPage from "../orders/pages/MyOrdersPage";
import YarnEditPage from "../yarns/pages/YarnEditPage";
import AddYarnPage from "../yarns/pages/AddYarnPage";
import AllOrdersPage from "../orders/pages/AllOrdersPage";
import YarnDetailsPage from "../yarns/pages/YarnDetailsPage";
import StocksPage from "../stock/pages/StocksPage";
import EditStockPage from "../stock/pages/EditStockPage";
import ErrorPage from "../utils/pages/ErrorPage";
import AddStockPage from "../stock/pages/AddStockPage";

export default function Router() {
    return (
        <Routes>

            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            <Route path={ROUTES.YARNS} element={<YarnsPage />} />

            <Route path={ROUTES.ROOT} element={<YarnsPage />} />

            <Route path={ROUTES.ABOUT} element={<AboutPage />} />

            <Route path={ROUTES.MY_CART} element={<MyCartPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.MY_ORDERS} element={<MyOrdersPage />} />
            <Route path={ROUTES.ALL_ORDERS} element={<AllOrdersPage />} />
            <Route path={ROUTES.EDIT_YARN + "/:id"} element={<YarnEditPage />} />
            <Route path={ROUTES.CREATE_YARN} element={<AddYarnPage />} />
            <Route path={ROUTES.CREATE_STOCK} element={<AddStockPage />} />
            <Route path={ROUTES.YARN_INFO + "/:id"} element={<YarnDetailsPage />} />
            <Route path={ROUTES.STOCKS} element={<StocksPage />} />
            <Route path={ROUTES.EDIT_STOCK + "/:id"} element={<EditStockPage />} />

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    );
}