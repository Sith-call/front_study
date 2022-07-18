import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./signIn/signIn";
import { SignUp } from "./signUp/signUp";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;

