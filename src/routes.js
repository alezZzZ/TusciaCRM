/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import DettaglioCliente from "views/Clienti/DettaglioCliente.js";
import GestioneOpportunita from "views/Opportunita/GestioneOpportunita.js";
import GestioneProgetto from "views/Progetto/GestioneProgetto.js";
import TableList from "views/TableList/TableList.js";
import GestioneCliente from "views/Clienti/GestioneCliente.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/clienti",
    name: "Clienti",
    rtlName: "",
    icon: Person,
    component: GestioneCliente,
    layout: "/admin",
    menu: "true"
  },
  {
     path: "/dettaglioCliente",
     name: "",
     rtlName: "",
     icon: "",
     component: DettaglioCliente,
     layout: "/admin",
     /*A.D. - Aggiunta proprietà menu:false, per le routes che non devono essere mostrate sulla sidebar di sx*/
     menu: "false"
  },
  {
    path: "/progetti",
    name: "Progetti",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: GestioneProgetto,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/opportunita",
    name: "Opportunità",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: GestioneOpportunita,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    menu: "true"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    menu: "true"
  },
  /*{
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }*/

];

export default dashboardRoutes;
