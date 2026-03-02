import { createBrowserRouter } from "react-router-dom";
import Home from "../app/home/Home";
import AutoresPage from "@/app/autores/AutoresPage";
import Dashboard from "@/app/dashboard/Dashboard";
import GenerosPage from "@/app/generos/GenerosPage";
import LivrosPage from "@/app/livros/LivrosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "autores",
        element: <AutoresPage />,
      },
      {
        path: "generos",
        element: <GenerosPage />,
      },
      {
        path: "livros",
        element: <LivrosPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Página não encontrada</div>,
  },
]);
