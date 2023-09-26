import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/Inicio";

function AppRoutes() {
    return (
        //BrowserRouterserRouter = elemento para avisar que terão rotas
        // Routes - resposável pela troca de rotas
        // Route - declaração de quais rotas existem no projeto
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;