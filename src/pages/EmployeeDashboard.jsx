import { useState } from "react"
import "./EmployeeDashboard.css"

function EmployeeDashboard() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            customer: "John Kamau",
            phone: "0711223344",
            service: "Internet Installation",
            location: "Thika",
            description: "New internet installation at my home.",
            price: 2500,
            status: "Assigned",
        },
        {
            id: 2,
            customer: "Mary Wanjiku",
            phone: "0722334455",
            service: "Network Troubleshooting",
            location: "Ruiru",
            description: "Internet connection keeps disconnecting.",
            price: 1500,
            status: "In Progress",
        },
    ])

    const updateStatus = (id, status) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, status }
                    : task
            )
        )
    }

    const assignedTasks = tasks.filter(
        (task) => task.status === "Assigned"
    )

    const activeTasks = tasks.filter(
        (task) => task.status === "In Progress"
    )

    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    )

    return (
        <div className="employee-dashboard">

            <div className="page-header">
                <div>
                    <p className="welcome-text">
                        Employee Workspace
                    </p>

                    <h1>My Jobs</h1>

                    <p className="subtitle">
                        View and manage the service jobs assigned to you.
                    </p>
                </div>
            </div>

            {/* Statistics */}

            <div className="stats-grid">

                <div className="stat-card">
                    <span>Assigned</span>
                    <strong>{assignedTasks.length}</strong>
                </div>

                <div className="stat-card">
                    <span>In Progress</span>
                    <strong>{activeTasks.length}</strong>
                </div>

                <div className="stat-card">
                    <span>Completed</span>
                    <strong>{completedTasks.length}</strong>
                </div>

            </div>

            {/* Jobs */}

            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>My Assigned Jobs</h2>

                        <p>
                            Jobs currently assigned to you
                        </p>
                    </div>
                </div>

                <div className="employee-job-list">

                    {tasks.map((task) => (
                        <div
                            className="employee-job-card"
                            key={task.id}
                        >

                            <div className="job-header">

                                <div>
                                    <h3>{task.service}</h3>

                                    <span>
                    Job #{task.id}
                  </span>
                                </div>

                                <span className="status pending">
                  {task.status}
                </span>

                            </div>

                            <div className="job-customer">

                                <h4>Customer</h4>

                                <p>
                                    <strong>{task.customer}</strong>
                                </p>

                                <p>{task.phone}</p>

                            </div>

                            <div className="job-location">

                                <h4>Location</h4>

                                <p>{task.location}</p>

                            </div>

                            <div className="job-description">

                                <h4>Job Description</h4>

                                <p>{task.description}</p>

                            </div>

                            <div className="job-actions">

                                {task.status === "Assigned" && (
                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            updateStatus(
                                                task.id,
                                                "In Progress"
                                            )
                                        }
                                    >
                                        Start Job
                                    </button>
                                )}

                                {task.status === "In Progress" && (
                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            updateStatus(
                                                task.id,
                                                "Completed"
                                            )
                                        }
                                    >
                                        Mark Job Completed
                                    </button>
                                )}

                                {task.status === "Completed" && (
                                    <span className="completed-message">
                    ✓ Job Completed
                  </span>
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default EmployeeDashboard