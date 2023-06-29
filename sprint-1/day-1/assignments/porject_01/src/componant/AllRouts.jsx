import { Route, Routes } from "react-router-dom";
import TicketDetails from "./TicketDetails";
import Homepage from "./Homepage";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/ticket/:ticketId" element={<TicketDetails/>}></Route>
      
    </Routes>
  );
};
