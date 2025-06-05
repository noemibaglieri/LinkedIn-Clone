import "./App.css";
import MyFooter from "./components/MyFooter";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";

import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/profile/me" element={<UserProfile />} />
          <Route path="/profile/:userId/experiences" element={<ProfilePage />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
