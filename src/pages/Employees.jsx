import { useState } from "react"

function Employees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Brian Mwangi",
            phone: "0712345678",
            position: "Technician",
            status: "Active",
        },
        {
            id: 2,
            name: "Kevin Kamau",
            phone: "0723456789",
            position: "Field Technician",
            status: "Active",
        },
    ])

    const [showForm, setShowForm] = useState(false)
    const [editingEmployee, setEditingEmployee] = useState(null)
    const [viewingEmployee, setViewingEmployee] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        position: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const openAddForm = () => {
        setEditingEmployee(null)

        setFormData({
            name: "",
            phone: "",
            position: "",
        })

        setShowForm(true)
    }

    const openEditForm = (employee) => {
        setEditingEmployee(employee)

        setFormData({
            name: employee.name,
            phone: employee.phone,
            position: employee.position,
        })

        setShowForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editingEmployee) {
            setEmployees(
                employees.map((employee) =>
                    employee.id === editingEmployee.id
                        ? {
                            ...employee,
                            name: formData.name,
                            phone: formData.phone,
                            position: formData.position,
                        }
                        : employee
                )
            )
        } else {
            const newEmployee = {
                id: Date.now(),
                name: formData.name,
                phone: formData.phone,
                position: formData.position,
                status: "Active",
            }

            setEmployees([...employees, newEmployee])
        }

        setFormData({
            name: "",
            phone: "",
            position: "",
        })

        setEditingEmployee(null)
        setShowForm(false)
    }

    const toggleStatus = (id) => {
        setEmployees(
            employees.map((employee) =>
                employee.id === id
                    ? {
                        ...employee,
                        status:
                            employee.status === "Active"
                                ? "Inactive"
                                : "Active",
                    }
                    : employee
            )
        )
    }

    const deleteEmployee = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this employee?"
        )

        if (!confirmed) return

        setEmployees(
            employees.filter((employee) => employee.id !== id)
        )
    }

    return (
        <div className="employees-page">

            {/* Header */}

            <div className="page-header">

                <div>
                    <p className="welcome-text">
                        Workforce Management
                    </p>

                    <h1>Employees</h1>

                    <p className="subtitle">
                        Manage your company's employees and field workers.
                    </p>
                </div>

                <button
                    className="primary-button"
                    onClick={openAddForm}
                >
                    + Add Employee
                </button>

            </div>


            {/* Add / Edit Form */}

            {showForm && (
                <div className="form-card">

                    <div className="card-header">

                        <div>
                            <h2>
                                {editingEmployee
                                    ? "Edit Employee"
                                    : "Add New Employee"}
                            </h2>

                            <p>
                                {editingEmployee
                                    ? "Update employee information."
                                    : "Enter the employee's information."}
                            </p>
                        </div>

                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. John Mwangi"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label>Phone Number</label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="e.g. 0712345678"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label>Position</label>

                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="e.g. Technician"
                                    required
                                />
                            </div>

                        </div>


                        <div className="form-actions">

                            <button
                                type="button"
                                className="secondary-button"
                                onClick={() => {
                                    setShowForm(false)
                                    setEditingEmployee(null)
                                }}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="primary-button"
                            >
                                {editingEmployee
                                    ? "Update Employee"
                                    : "Save Employee"}
                            </button>

                        </div>

                    </form>

                </div>
            )}


            {/* Employee List */}

            <div className="dashboard-card">

                <div className="card-header">

                    <div>
                        <h2>Employee List</h2>

                        <p>
                            {employees.length} employees registered
                        </p>
                    </div>

                </div>


                <div className="employee-list">

                    {employees.length === 0 ? (

                        <div className="empty-state">
                            <div>👥</div>

                            <h3>No employees yet</h3>

                            <p>
                                Add your first employee to start managing
                                your workforce.
                            </p>

                            <button
                                className="primary-button"
                                onClick={openAddForm}
                            >
                                + Add Employee
                            </button>
                        </div>

                    ) : (

                        employees.map((employee) => (

                            <div
                                className="employee-row"
                                key={employee.id}
                            >

                                <div className="employee-avatar">
                                    {employee.name
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>


                                <div className="employee-info">

                                    <strong>
                                        {employee.name}
                                    </strong>

                                    <span>
                    {employee.position}
                  </span>

                                </div>


                                <div className="employee-phone">
                                    {employee.phone}
                                </div>


                                <span
                                    className={`status ${
                                        employee.status === "Active"
                                            ? "completed"
                                            : "inactive"
                                    }`}
                                >
                  {employee.status}
                </span>


                                <div className="employee-actions">

                                    <button
                                        onClick={() =>
                                            setViewingEmployee(employee)
                                        }
                                        title="View employee"
                                    >
                                        👁
                                    </button>

                                    <button
                                        onClick={() =>
                                            openEditForm(employee)
                                        }
                                        title="Edit employee"
                                    >
                                        ✏️
                                    </button>

                                    <button
                                        onClick={() =>
                                            toggleStatus(employee.id)
                                        }
                                        title="Change status"
                                    >
                                        {employee.status === "Active"
                                            ? "⏸"
                                            : "▶"}
                                    </button>

                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteEmployee(employee.id)
                                        }
                                        title="Delete employee"
                                    >
                                        🗑
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>


            {/* Employee Details */}

            {viewingEmployee && (

                <div className="modal-overlay">

                    <div className="employee-modal">

                        <button
                            className="close-button"
                            onClick={() =>
                                setViewingEmployee(null)
                            }
                        >
                            ×
                        </button>

                        <div className="large-avatar">
                            {viewingEmployee.name
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        <h2>{viewingEmployee.name}</h2>

                        <p className="modal-position">
                            {viewingEmployee.position}
                        </p>


                        <div className="employee-details">

                            <div>
                                <span>Phone</span>
                                <strong>
                                    {viewingEmployee.phone}
                                </strong>
                            </div>

                            <div>
                                <span>Status</span>
                                <strong>
                                    {viewingEmployee.status}
                                </strong>
                            </div>

                            <div>
                                <span>Employee ID</span>
                                <strong>
                                    EMP-{viewingEmployee.id}
                                </strong>
                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Employees