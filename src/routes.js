import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

/* Nested Routes é um recurso que auxilia na criação do projeto, evitando códigos de layout duplicados e complicados
Cria um acomplamento dos componentes que se repetem entre as páginas em uma rota */

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    // rotas aninhadas =  várias rotas dentro de uma única rota
                    <Route index element={<Inicio />}></Route>
                        <Route path="favoritos" element={<Favoritos />}></Route>
                        <Route path=":id" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;