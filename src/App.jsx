import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./user/providers/UserProvider";
import CustomThemeProvider from "./utils/providers/CustomThemeProvider";
import SnackbarProvider from "./utils/providers/SnackbarProvider";



function App() {


  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <SnackbarProvider>
          <UserProvider>
            <Layout>

              <Router />

            </Layout>
          </UserProvider>
        </SnackbarProvider>
      </CustomThemeProvider>
    </BrowserRouter>

  );
}

export default App
