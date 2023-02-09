import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Passo1 } from "./pages/Passo1";
import { Passo2 } from "./pages/Passo2";
import { Passo3 } from "./pages/Passo3";
import { Final } from "./pages/Final";

export const Rotas =()=>{
return(
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Passo1 />} />
    <Route path="/passo2"  element={<Passo2 />} />
    <Route path="/passo3"  element={<Passo3 />} />
    <Route path="/final"  element={<Final />} />
    </Routes>
    </BrowserRouter>
)


}