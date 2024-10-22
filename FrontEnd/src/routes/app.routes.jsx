import { Routes, Route, Navigate } from "react-router-dom";

import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/moviepreview/:id" element={<MoviePreview />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
