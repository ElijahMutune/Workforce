import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

function ServiceRequestForm() {
    const location = useLocation()
    const navigate = useNavigate()

    const service = new URLSearchParams(location.search).get("service")

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [locationAddress, setLocationAddress] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            service,
            name,
            phone,
            location: locationAddress,
            description,
            status: "Pending",
        })

        alert("Your service request has been submitted.")

        navigate("/")
    }

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-logo">
                    Workforce
                </div>

                <h1>Request Service</h1>

                <p className="login-subtitle">
                    {service || "Selected Service"}
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Service Location"
                        value={locationAddress}
                        onChange={(e) => setLocationAddress(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Describe the service you need"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                    />

                    <button
                        type="submit"
                        className="request-button"
                    >
                        Submit Service Request
                    </button>

                </form>

                <button
                    className="back-home"
                    onClick={() => navigate("/")}
                >
                    ← Back to Services
                </button>

            </div>

        </div>
    )
}

export default ServiceRequestForm