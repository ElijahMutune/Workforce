import { useNavigate } from "react-router-dom"
import "./CustomerPortal.css"

function CustomerPortal() {
    const navigate = useNavigate()
    return (
        <div className="customer-portal">

            {/* Header */}
            <div className="portal-header">
                <div className="portal-logo">
                    Workforce
                </div>

                <button
                    className="login-button"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>


            {/* Hero Section */}
            <div className="portal-hero">
            <h1>
                    Professional Services, Managed by Workforce
                </h1>

                <p>
                    Request a service and let our company handle the rest.
                </p>
            </div>


            {/* Services */}
            <div className="services-section">

                <h2>Available Services</h2>

                <div className="services-grid">

                    {/* Service 1 */}
                    <div className="service-card">
                        <h3>
                            Panel & Circuit Troubleshooting.
                        </h3>

                        <p>
                            Professional panel and circuit installation service.
                        </p>

                        <p className="service-price">
                            KSh 2,500
                        </p>

                        <button
                            className="request-button"
                            onClick={() => navigate("/request-service?service=Internet Installation")}
                        >
                            Request Service
                        </button>
                    </div>


                    {/* Service 2 */}
                    <div className="service-card">
                        <h3>
                            Complex Plumbing & Water Management
                        </h3>

                        <p>
                            Diagnose and resolve water problems.
                        </p>

                        <p className="service-price">
                            From KSh 800
                        </p>

                        <button
                            className="request-button"
                            onClick={() => navigate("/request-service?service=Network Troubleshooting")}
                        >
                            Request Service
                        </button>
                    </div>


                    {/* Service 3 */}
                    <div className="service-card">
                        <h3>
                            HVAC
                        </h3>

                        <p>
                            Replacing air filters and thermostats.
                        </p>

                        <p className="service-price">
                            KSh 1,000
                        </p>

                        <button
                            className="request-button"
                            onClick={() => navigate("/request-service?service=Router Configuration")}
                        >
                            Request Service
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CustomerPortal