import { useState } from "react"

function Services() {
    const [services, setServices] = useState([
        {
            id: 1,
            name: "Internet Installation",
            description: "Professional internet installation service.",
            pricingType: "Fixed",
            price: 2500,
            status: "Active",
        },
        {
            id: 2,
            name: "Network Troubleshooting",
            description: "Diagnosis and resolution of network problems.",
            pricingType: "Quote",
            price: null,
            status: "Active",
        },
    ])

    const [showForm, setShowForm] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        pricingType: "Fixed",
        price: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newService = {
            id: Date.now(),
            name: formData.name,
            description: formData.description,
            pricingType: formData.pricingType,
            price:
                formData.pricingType === "Fixed"
                    ? Number(formData.price)
                    : null,
            status: "Active",
        }

        setServices([...services, newService])

        setFormData({
            name: "",
            description: "",
            pricingType: "Fixed",
            price: "",
        })

        setShowForm(false)
    }

    const toggleStatus = (id) => {
        setServices(
            services.map((service) =>
                service.id === id
                    ? {
                        ...service,
                        status:
                            service.status === "Active"
                                ? "Inactive"
                                : "Active",
                    }
                    : service
            )
        )
    }

    const deleteService = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this service?"
        )

        if (!confirmed) return

        setServices(
            services.filter((service) => service.id !== id)
        )
    }

    return (
        <div className="services-page">

            <div className="page-header">
                <div>
                    <p className="welcome-text">
                        Workforce Management
                    </p>

                    <h1>Services</h1>

                    <p className="subtitle">
                        Manage the services customers can request.
                    </p>
                </div>

                <button
                    className="primary-button"
                    onClick={() => setShowForm(!showForm)}
                >
                    + Add Service
                </button>
            </div>

            {showForm && (
                <div className="form-card">

                    <h2>Add New Service</h2>

                    <p>
                        Create a service that customers can request.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Service Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Internet Installation"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Pricing Type</label>

                                <select
                                    name="pricingType"
                                    value={formData.pricingType}
                                    onChange={handleChange}
                                >
                                    <option value="Fixed">
                                        Fixed Price
                                    </option>

                                    <option value="Quote">
                                        Quote Required
                                    </option>
                                </select>
                            </div>

                            {formData.pricingType === "Fixed" && (
                                <div className="form-group">
                                    <label>Price (KSh)</label>

                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="e.g. 2500"
                                        min="0"
                                        required
                                    />
                                </div>
                            )}

                        </div>

                        <div className="form-group">
                            <label>Description</label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe the service..."
                                rows="4"
                                required
                            />
                        </div>

                        <div className="form-actions">

                            <button
                                type="button"
                                className="secondary-button"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="primary-button"
                            >
                                Save Service
                            </button>

                        </div>

                    </form>
                </div>
            )}

            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>Available Services</h2>

                        <p>
                            {services.length} services registered
                        </p>
                    </div>
                </div>

                <div className="service-list">

                    {services.map((service) => (
                        <div
                            className="service-row"
                            key={service.id}
                        >

                            <div className="service-icon">
                                ⚙
                            </div>

                            <div className="service-info">

                                <strong>
                                    {service.name}
                                </strong>

                                <span>
                  {service.description}
                </span>

                            </div>

                            <div className="service-price">

                                {service.pricingType === "Fixed" ? (
                                    <>
                                        <small>Fixed Price</small>
                                        <strong>
                                            KSh {service.price.toLocaleString()}
                                        </strong>
                                    </>
                                ) : (
                                    <>
                                        <small>Pricing</small>
                                        <strong>Quote Required</strong>
                                    </>
                                )}

                            </div>

                            <span
                                className={`status ${
                                    service.status === "Active"
                                        ? "completed"
                                        : "inactive"
                                }`}
                            >
                {service.status}
              </span>

                            <div className="employee-actions">

                                <button
                                    onClick={() =>
                                        toggleStatus(service.id)
                                    }
                                    title="Change status"
                                >
                                    {service.status === "Active"
                                        ? "⏸"
                                        : "▶"}
                                </button>

                                <button
                                    className="delete-button"
                                    onClick={() =>
                                        deleteService(service.id)
                                    }
                                    title="Delete service"
                                >
                                    🗑
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Services