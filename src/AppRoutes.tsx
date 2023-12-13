import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ServicesPage from "./pages/service";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import ForgotPasswordPage from "./pages/ResetPassword";
import RegistrationPage from "./pages/Registration";
import ProjectPage from "./pages/Project";
import AppContextProvider from "./context/AppContext/Provider";
import Theme from "./components/Theme";

const AppRoutes = () => {

    return (
        <AppContextProvider>
            <Theme>
                <Routes >
                    <Route path="/" Component={HomePage} />
                    <Route path="/services" Component={ServicesPage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/contact" Component={ContactPage} />
                    {/* <Route path="/blog" Component={BlogPage} /> */}
                    {/* <Route path="/projects" Component={ProjectPage} /> */}
                    {/* <Route path="/forgot-password" Component={ForgotPasswordPage} /> */}
                    {/* <Route path="/signup" Component={RegistrationPage} /> */}
                    {/* <Route path="*" Component={NotFound} /> */}
                    <Route path="*" Component={HomePage} />
                </Routes>
            </Theme>
        </AppContextProvider>
    );
}

export default AppRoutes;