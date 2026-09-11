import { useState } from "react"

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            customer: "John Kamau",
            service: "Internet Installation",
            location: "Thika",
            employee: "Brian Mwangi",
            price: 2500,
            status: "Assigned",
            paymentStatus: "Pending",
        },
        {
            id: 2,
            customer: "Mary Wanjiku",
            service: "Network Troubleshooting",
            location: "Ruiru",
            employee: "Kevin Kamau",
            price: 1500,
            status: "In Progress",
            paymentStatus: "Pending",
        },
    ])

    const updateTaskStatus = (id, newStatus) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status: newStatus,
                    }
                    : task
            )
        )
    }

    return (
        <div className="tasks-page">

            <div className="page-header">
                <div>
                    <p className="welcome-text">
                        Workforce Management
                    </p>

                    <h1>Tasks & Jobs</h1>

                    <p className="subtitle">
                        Track service jobs from assignment to completion.
                    </p>
                </div>
            </div>

            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>Active Jobs</h2>

                        <p>
                            {tasks.length} jobs currently registered
                        </p>
                    </div>
                </div>

                <div className="task-list">

                    {tasks.map((task) => (
                        <div
                            className="task-card"
                            key={task.id}
                        >

                            <div className="task-header">

                                <div>
                                    <h3>
                                        {task.service}
                                    </h3>

                                    <p>
                                        Job #{task.id}
                                    </p>
                                </div>

                                <span
                                    className={`status ${
                                        task.status === "Completed"
                                            ? "completed"
                                            : task.status === "In Progress"
                                                ? "pending"
                                                : ""
                                    }`}
                                >
                  {task.status}
                </span>

                            </div>

                            <div className="task-details">

                                <div>
                                    <span>Customer</span>
                                    <strong>
                                        {task.customer}
                                    </strong>
                                </div>

                                <div>
                                    <span>Location</span>
                                    <strong>
                                        {task.location}
                                    </strong>
                                </div>

                                <div>
                                    <span>Employee</span>
                                    <strong>
                                        {task.employee}
                                    </strong>
                                </div>

                                <div>
                                    <span>Price</span>
                                    <strong>
                                        KSh {task.price.toLocaleString()}
                                    </strong>
                                </div>

                                <div>
                                    <span>Payment</span>
                                    <strong>
                                        {task.paymentStatus}
                                    </strong>
                                </div>

                            </div>

                            <div className="task-actions">

                                {task.status === "Assigned" && (
                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            updateTaskStatus(
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
                                            updateTaskStatus(
                                                task.id,
                                                "Completed"
                                            )
                                        }
                                    >
                                        Mark Completed
                                    </button>
                                )}

                                {task.status === "Completed" && (
                                    <span className="completed-message">
                    ✓ Job completed
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

export default Tasks