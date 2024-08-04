import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './Pages/Login/LoginSlice'
import HotelSlice from './Pages/Hotel/Hotel_Dashboard/HotelPage'
import TourSlice from './Pages/Activities/Add_Trip/Add_TripSlice'
import SitesSlice from './Pages/Activities/Add_Site/Add_SiteSlice'
import ActivitesSlice from "./Pages/Activities/Activities_dashboard/Activites_Page";
import SiteSlice from './Pages/Activities/Site/Site_Page'
import ServicesSlice from './Pages/Services/ServicesSlice'
import DeleteSlice from "./Pages/Delete/DeleteSlice";
import TicketSlice from "./Pages/Ticket/TicketSlice";
export default configureStore({
    reducer: {
        site: SiteSlice,
        login: loginSlice,
        hotel: HotelSlice,
        tours: TourSlice,
        sites: SitesSlice,
        activites: ActivitesSlice,
        services: ServicesSlice,
        delete: DeleteSlice,
        ticket: TicketSlice
    },


});