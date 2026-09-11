import { useState } from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useNavigate,
} from "react-router-dom"

import "./App.css"

import Sidebar from "./components/Sidebar"

import Employees from "./pages/Employees"
import Services from "./pages/Services"
import ServiceRequests from "./pages/ServiceRequests"
import Tasks from "./pages/Tasks"
import EmployeeDashboard from "./pages/EmployeeDashboard"

import CustomerPortal from "./pages/CustomerPortal"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import ServiceRequestForm from "./pages/ServiceRequestForm"


function AdminLayout() {
    const navigate = useNavigate()
    const [activePage, setActivePage] = useState("Dashboard")

    const handleNavigation = (page) => {
        setActivePage(page)

        switch (page) {
            case "Dashboard":
                navigate("/admin")
                break

            case "Employees":
                navigate("/admin/employees")
                break

            case "Services":
                navigate("/admin/services")
                break

            case "Service Requests":
                navigate("/admin/requests")
                break

            case "Tasks":
                navigate("/admin/tasks")
                break

            case "My Jobs":
                navigate("/employee")
                break

            case "Customer Portal":
                navigate("/")
                break

            case "Customers":
                navigate("/admin/customers")
                break

            case "Payments":
                navigate("/admin/payments")
                break

            case "Reports":
                navigate("/admin/reports")
                break

            case "Settings":
                navigate("/admin/settings")
                break

            default:
                navigate("/admin")
        }
    }

    return (
        <div className="app">
            <Sidebar
                activePage={activePage}
                onNavigate={handleNavigation}
            />

            <main className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="/employees"
                        element={<Employees />}
                    />

                    <Route
                        path="/services"
                        element={<Services />}
                    />

                    <Route
                        path="/requests"
                        element={<ServiceRequests />}
                    />

                    <Route
                        path="/tasks"
                        element={<Tasks />}
                    />
                    <Route
                        path="/request-service"
                        element={<ServiceRequestForm />}
                    />

                    <Route
                        path="/customers"
                        element={
                            <div>
                                <h1>Customers</h1>
                                <p>
                                    Customer management will be built soon.
                                </p>
                            </div>
                        }
                    />

                    <Route
                        path="/payments"
                        element={
                            <div>
                                <h1>Payments</h1>
                                <p>
                                    Payment management will be built soon.
                                </p>
                            </div>
                        }
                    />

                    <Route
                        path="/reports"
                        element={
                            <div>
                                <h1>Reports</h1>
                                <p>
                                    Reports will be built soon.
                                </p>
                            </div>
                        }
                    />

                    <Route
                        path="/settings"
                        element={
                            <div>
                                <h1>Settings</h1>
                                <p>
                                    System settings will be built soon.
                                </p>
                            </div>
                        }
                    />
                </Routes>
            </main>
        </div>
    )
}


function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Customer Portal */}
                <Route
                    path="/"
                    element={<CustomerPortal />}
                />

                {/* Login */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Admin System */}
                <Route
                    path="/admin/*"
                    element={<AdminLayout />}
                />

                {/* Employee Dashboard */}
                <Route
                    path="/employee"
                    element={<EmployeeDashboard />}
                />

                {/* Unknown URLs return to Customer Portal */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </BrowserRouter>
    )
}

export default App