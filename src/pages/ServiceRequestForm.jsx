import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../AuthContext"
import "./ServiceRequestForm.css"
import { useServiceRequests } from "../ServiceRequestContext"

function ServiceRequestForm() {
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useAuth()
    const { addRequest } = useServiceRequests()

    const service = new URLSearchParams(location.search).get("service")

    const [name, setName] = useState(user?.name || "")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [serviceLocation, setServiceLocation] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const request = {
            id: Date.now(),
            customer: {
                name,
                phone,
                email,
            },
            service,
            location: serviceLocation,
            description,
            status: "Pending",
            price: null,
            assignedEmployee: null,
        }
        addRequest(request)

        console.log("SERVICE REQUEST:", request)

        alert("Your service request has been submitted.")

        navigate("/customer")
    }

    return (
        <div className="service-request-page">

            <div className="service-request-card">

                <div className="request-logo">
                    Workforce
                </div>

                <h1>Request Service</h1>

                <p className="request-subtitle">
                    Provide your information so Workforce can process your request.
                </p>

                <div className="selected-service">
                    <span>Selected Service</span>
                    <strong>
                        {service || "No service selected"}
                    </strong>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-section">
                        <h2>Customer Information</h2>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="07XXXXXXXX"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>

                        </div>
                    </div>

                    <div className="form-section">

                        <h2>Service Details</h2>

                        <div className="form-group">
                            <label>Service Location</label>
                            <input
                                type="text"
                                value={serviceLocation}
                                onChange={(e) =>
                                    setServiceLocation(e.target.value)
                                }
                                placeholder="Where should the service be provided?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Service Description</label>

                            <textarea
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                placeholder="Describe what you need..."
                                rows="5"
                                required
                            />

                        </div>

                    </div>

                    <div className="request-actions">

                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="submit-request-button"
                        >
                            Submit Service Request
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default ServiceRequestForm