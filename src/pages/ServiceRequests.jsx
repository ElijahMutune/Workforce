import { useState } from "react"

function ServiceRequests() {
    const [requests, setRequests] = useState([
        {
            id: 1,
            customer: "John Kamau",
            phone: "0711223344",
            service: "Internet Installation",
            location: "Thika",
            description: "New internet installation at my home.",
            price: 2500,
            status: "Pending",
            employee: null,
        },
        {
            id: 2,
            customer: "Mary Wanjiku",
            phone: "0722334455",
            service: "Network Troubleshooting",
            location: "Ruiru",
            description: "Internet connection keeps disconnecting.",
            price: null,
            status: "Pending",
            employee: null,
        },
    ])

    const [selectedRequest, setSelectedRequest] = useState(null)

    const [price, setPrice] = useState("")

    const [employees] = useState([
        {
            id: 1,
            name: "Brian Mwangi",
        },
        {
            id: 2,
            name: "Kevin Kamau",
        },
    ])

    const approveRequest = () => {
        if (!selectedRequest) return

        if (!price || Number(price) <= 0) {
            alert("Please enter a valid price.")
            return
        }

        setRequests(
            requests.map((request) =>
                request.id === selectedRequest.id
                    ? {
                        ...request,
                        price: Number(price),
                        status: "Approved",
                    }
                    : request
            )
        )

        setSelectedRequest(null)
        setPrice("")
    }

    const assignEmployee = (requestId, employeeId) => {
        const employee = employees.find(
            (employee) => employee.id === Number(employeeId)
        )

        if (!employee) return

        setRequests(
            requests.map((request) =>
                request.id === requestId
                    ? {
                        ...request,
                        employee: employee.name,
                        status: "Assigned",
                    }
                    : request
            )
        )
    }

    const rejectRequest = (requestId) => {
        setRequests(
            requests.map((request) =>
                request.id === requestId
                    ? {
                        ...request,
                        status: "Rejected",
                    }
                    : request
            )
        )
    }

    return (
        <div className="service-requests-page">

            <div className="page-header">
                <div>
                    <p className="welcome-text">
                        Workforce Management
                    </p>

                    <h1>Service Requests</h1>

                    <p className="subtitle">
                        Review customer requests and assign them to employees.
                    </p>
                </div>
            </div>

            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>Customer Requests</h2>

                        <p>
                            {requests.length} service requests
                        </p>
                    </div>
                </div>

                <div className="request-list">

                    {requests.map((request) => (
                        <div
                            className="request-card"
                            key={request.id}
                        >

                            <div className="request-header">

                                <div>
                                    <h3>
                                        {request.service}
                                    </h3>

                                    <p>
                                        Request #{request.id}
                                    </p>
                                </div>

                                <span
                                    className={`status ${
                                        request.status === "Rejected"
                                            ? "inactive"
                                            : request.status === "Pending"
                                                ? "pending"
                                                : "completed"
                                    }`}
                                >
                  {request.status}
                </span>

                            </div>

                            <div className="request-details">

                                <div>
                                    <span>Customer</span>
                                    <strong>{request.customer}</strong>
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <strong>{request.phone}</strong>
                                </div>

                                <div>
                                    <span>Location</span>
                                    <strong>{request.location}</strong>
                                </div>

                                <div>
                                    <span>Price</span>

                                    <strong>
                                        {request.price
                                            ? `KSh ${request.price.toLocaleString()}`
                                            : "Not set"}
                                    </strong>
                                </div>

                            </div>

                            <div className="request-description">

                                <span>Description</span>

                                <p>
                                    {request.description}
                                </p>

                            </div>

                            {request.employee && (
                                <div className="assigned-employee">

                                    <span>Assigned Employee</span>

                                    <strong>
                                        {request.employee}
                                    </strong>

                                </div>
                            )}

                            <div className="request-actions">

                                {request.status === "Pending" && (
                                    <>
                                        <button
                                            className="primary-button"
                                            onClick={() => {
                                                setSelectedRequest(request)
                                                setPrice(
                                                    request.price
                                                        ? request.price.toString()
                                                        : ""
                                                )
                                            }}
                                        >
                                            Review & Price
                                        </button>

                                        <button
                                            className="secondary-button"
                                            onClick={() =>
                                                rejectRequest(request.id)
                                            }
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}

                                {request.status === "Approved" && (
                                    <select
                                        defaultValue=""
                                        onChange={(e) =>
                                            assignEmployee(
                                                request.id,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Assign Employee
                                        </option>

                                        {employees.map((employee) => (
                                            <option
                                                key={employee.id}
                                                value={employee.id}
                                            >
                                                {employee.name}
                                            </option>
                                        ))}
                                    </select>
                                )}

                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {selectedRequest && (
                <div className="modal-overlay">

                    <div className="employee-modal">

                        <button
                            className="close-button"
                            onClick={() => {
                                setSelectedRequest(null)
                                setPrice("")
                            }}
                        >
                            ×
                        </button>

                        <h2>Review Service Request</h2>

                        <p>
                            {selectedRequest.service}
                        </p>

                        <div className="employee-details">

                            <div>
                                <span>Customer</span>
                                <strong>
                                    {selectedRequest.customer}
                                </strong>
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>
                                    {selectedRequest.location}
                                </strong>
                            </div>

                            <div>
                                <span>Description</span>
                                <strong>
                                    {selectedRequest.description}
                                </strong>
                            </div>

                        </div>

                        <div className="form-group">
                            <label>Service Price (KSh)</label>

                            <input
                                type="number"
                                value={price}
                                onChange={(e) =>
                                    setPrice(e.target.value)
                                }
                                placeholder="Enter price"
                                min="1"
                            />
                        </div>

                        <div className="form-actions">

                            <button
                                className="secondary-button"
                                onClick={() => {
                                    setSelectedRequest(null)
                                    setPrice("")
                                }}
                            >
                                Cancel
                            </button>

                            <button
                                className="primary-button"
                                onClick={approveRequest}
                            >
                                Confirm Price
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default ServiceRequests