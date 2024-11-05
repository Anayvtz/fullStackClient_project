import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import LoginPage from "../user/pages/LoginPage";
import YarnsPage from "../yarns/pages/YarnsPage";

export default function Router() {
    return (
        <Routes>
            {
               <Route path={ROUTES.LOGIN} element={<LoginPage />} />

                <Route path={ROUTES.YARNS} element={<YarnsPage />} />
                /*
                 <Route path={ROUTES.ROOT} element={<YarnsPage />} />
                

                
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                
                <Route path={ROUTES.MY_CART} element={<MyCartPage />} />
                <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
                <Route path={ROUTES.YARN_INFO + "/:id"} element={<YarnDetailsPage />} />
                <Route path={ROUTES.CREATE_YARN} element={<AddYarnPage />} />
                <Route path={ROUTES.MY_ORDERS} element={<MyOrdersPage />} />
                <Route path={ROUTES.EDIT_YARN + "/:id"} element={<EditYarnPage />} />
                <Route path={ROUTES.STOCKS} element={<StocksPage />} />
                <Route path={ROUTES.EDIT_STOCK + "/:id"} element={<EditStockPage />} />
                <Route path="*" element={<ErrorPage />} /> */
            }
        </Routes>
    );
}