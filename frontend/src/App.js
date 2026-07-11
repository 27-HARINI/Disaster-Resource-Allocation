import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Disaster from "./pages/Disaster";
import Resource from "./pages/Resource";
import Volunteer from "./pages/Volunteer";
import Ngo from "./pages/Ngo";
import Shelter from "./pages/Shelter";
import Allocation from "./pages/Allocation";
import NotFound from "./pages/NotFound";

function ProtectedRoute({ children }) {

    const loggedIn = localStorage.getItem("isLoggedIn");

    return loggedIn ? children : <Navigate to="/" />;
}

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/disaster"
                    element={
                        <ProtectedRoute>
                            <Disaster />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/resource"
                    element={
                        <ProtectedRoute>
                            <Resource />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/volunteer"
                    element={
                        <ProtectedRoute>
                            <Volunteer />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/ngo"
                    element={
                        <ProtectedRoute>
                            <Ngo />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/shelter"
                    element={
                        <ProtectedRoute>
                            <Shelter />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/allocation"
                    element={
                        <ProtectedRoute>
                            <Allocation />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;