import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import "./CustomerDashboard.css"
import { useServiceRequests } from "../ServiceRequestContext"

function CustomerDashboard() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { requests } = useServiceRequests()

    return (
        <div className="customer-dashboard">

            <header className="customer-dashboard-header">

                <div>
                    <div className="customer-logo">
                        Workforce
                    </div>

                    <p className="customer-welcome">
                        Welcome, {user?.name || "Customer"}
                    </p>
                </div>

                <button
                    className="portal-button"
                    onClick={() => navigate("/")}
                >
                    Browse Services
                </button>

            </header>

            <main className="customer-dashboard-content">

                <div className="dashboard-heading">
                    <div>
                        <p className="dashboard-label">
                            Customer Portal
                        </p>

                        <h1>My Dashboard</h1>

                        <p>
                            Track your service requests and payments.
                        </p>
                    </div>
                </div>

                <div className="customer-stats">

                    <div className="customer-stat-card">
                        <span>Total Requests</span>
                        <strong>{requests.length}</strong>
                    </div>

                    <div className="customer-stat-card">
                        <span>Active Services</span>
                        <strong>
                            {
                                requests.filter(
                                    (request) =>
                                        request.status === "Approved" ||
                                        request.status === "Assigned" ||
                                        request.status === "In Progress"
                                ).length
                            }
                        </strong>
                    </div>

                    <div className="customer-stat-card">
                        <span>Pending Payments</span>
                        <strong>
                            {
                                requests.filter(
                                    (request) =>
                                        request.status === "Completed"
                                ).length
                            }
                        </strong>
                    </div>

                </div>

                <section className="customer-section">

                    <div className="section-header">
                        <div>
                            <h2>My Service Requests</h2>
                            <p>
                                Services you have requested from Workforce.
                            </p>
                        </div>
                    </div>

                    {requests.length === 0 ? (

                        <div className="empty-requests">

                            <div className="empty-icon">
                                📋
                            </div>

                            <h3>No service requests yet</h3>

                            <p>
                                Once you request a service, it will appear here.
                            </p>

                            <button
                                className="request-service-button"
                                onClick={() => navigate("/")}
                            >
                                Request a Service
                            </button>

                        </div>

                    ) : (

                        <div className="customer-request-list">

                            {requests.map((request) => (

                                <div
                                    className="customer-request-card"
                                    key={request.id}
                                >

                                    <div className="customer-request-header">

                                        <div>
                                            <h3>{request.service}</h3>

                                            <span>
                            Request #{request.id}
                        </span>
                                        </div>

                                        <span className="request-status">
                        {request.status}
                    </span>

                                    </div>

                                    <div className="customer-request-details">

                                        <div>
                                            <strong>Location</strong>
                                            <p>{request.location}</p>
                                        </div>

                                        <div>
                                            <strong>Description</strong>
                                            <p>{request.description}</p>
                                        </div>

                                        <div>
                                            <strong>Price</strong>

                                            <p>
                                                {request.price
                                                    ? `KSh ${request.price}`
                                                    : "Awaiting price"}
                                            </p>
                                        </div>

                                    </div>

                                    {request.status === "Completed" && request.price && (
                                        <button className="pay-button">
                                            Pay KSh {request.price}
                                        </button>
                                    )}

                                </div>

                            ))}

                        </div>

                    )}

                </section>

            </main>

        </div>
    )
}

export default CustomerDashboard