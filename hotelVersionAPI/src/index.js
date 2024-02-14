import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/home";
import Login from "./pages/authentification";
import Register from "./pages/inscription";
import Chambres from "./pages/chambres";
import Salles from "./pages/salles";
import GestionChambres from "./pages/gestionchambres";
import GestionSalles from "./pages/gestionsalles";
import ResChambre from "./pages/reservationchambre";
import ResSalle from "./pages/reservationsalle";
import GesAdmins from "./pages/gestionadmins";
import ListeClients from "./pages/listeclients";
import ReservationChambreDetails from "./comp/ReservationChambreDetails";
import MesReservations from "./pages/mesreservations";
import Clients from "./pages/clients";
import Reservations from "./pages/reservations";
import AccueilAdmin from "./pages/accueiladmin";
import AccueilAdminSup from "./pages/accueiladminsup";
import LoginClt from "./pages/loginclient";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    // errorElement: <h1>SORRY.........</h1>,
  },
  {
    path: "/Accueil",
    element: <Accueil />,
    // errorElement: <h1>SORRY.........</h1>,
  },
  {
    path: "/authentification",
    element: <Login />,
  },
  {
    path: "/inscription",
    element: <Register />,
  },
  {
    path: "/chambres",
    element: <Chambres />,
  },
  {
    path: "/salles",
    element: <Salles />,
  },
  {
    path: "/gestionchambres",
    element: <GestionChambres />,
  },
  {
    path: "/gestionsalles",
    element: <GestionSalles />,
  },
  {
    path: "/reservationchambre/:id",
    element: <ResChambre />,
  },
  {
    path: "/reservationsalle/:id",
    element: <ResSalle />,
  },
  {
    path: "/gestionadmins",
    element: <GesAdmins />,
  },
  {
    path: "/listeclients",
    element: <ListeClients />,
  },

  
  {
    path: "/mesreservations/:id",
    element: <MesReservations />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/accueiladmin",
    element: <AccueilAdmin />,
  },
  {
    path: "/accueiladminsup",
    element: <AccueilAdminSup />,
  },
  {
    path: "/loginclient",
    element: <LoginClt />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
