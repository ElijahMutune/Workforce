function AdminDashboard() {
    return (
        <div className="dashboard">

            {/* Dashboard Header */}
            <div className="dashboard-header">
                <div>
                    <p className="welcome-text">Welcome back 👋</p>
                    <h1>Admin Dashboard</h1>
                    <p className="subtitle">
                        Here's what's happening in your workforce today.
                    </p>
                </div>

                <button className="primary-button">
                    + Create Task
                </button>
            </div>

            {/* Statistics */}
            <div className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon employees-icon">
                        👥
                    </div>

                    <div>
                        <p>Total Employees</p>
                        <h2>24</h2>
                        <span className="positive">+4 this month</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon tasks-icon">
                        📋
                    </div>

                    <div>
                        <p>Active Tasks</p>
                        <h2>18</h2>
                        <span className="neutral">6 pending</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon completed-icon">
                        ✓
                    </div>

                    <div>
                        <p>Completed Tasks</p>
                        <h2>126</h2>
                        <span className="positive">+12% this month</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon revenue-icon">
                        KSh
                    </div>

                    <div>
                        <p>Total Revenue</p>
                        <h2>KSh 284K</h2>
                        <span className="positive">+8.4%</span>
                    </div>
                </div>

            </div>

            {/* Lower Section */}
            <div className="dashboard-grid">

                {/* Recent Tasks */}
                <div className="dashboard-card tasks-card">

                    <div className="card-header">
                        <div>
                            <h2>Recent Tasks</h2>
                            <p>Latest work assigned to your employees</p>
                        </div>

                        <button className="view-button">
                            View all
                        </button>
                    </div>

                    <div className="task-list">

                        <div className="task-row">
                            <div>
                                <strong>Internet Installation</strong>
                                <span>Customer: John Mwangi</span>
                            </div>

                            <div className="task-employee">
                                👨‍🔧 Brian
                            </div>

                            <span className="status in-progress">
                In Progress
              </span>
                        </div>

                        <div className="task-row">
                            <div>
                                <strong>Router Replacement</strong>
                                <span>Customer: Mary Wanjiku</span>
                            </div>

                            <div className="task-employee">
                                👨‍🔧 Kevin
                            </div>

                            <span className="status completed">
                Completed
              </span>
                        </div>

                        <div className="task-row">
                            <div>
                                <strong>Network Troubleshooting</strong>
                                <span>Customer: Peter Kamau</span>
                            </div>

                            <div className="task-employee">
                                👨‍🔧 James
                            </div>

                            <span className="status pending">
                Pending
              </span>
                        </div>

                    </div>
                </div>

                {/* Quick Actions */}
                <div className="dashboard-card">

                    <div className="card-header">
                        <div>
                            <h2>Quick Actions</h2>
                            <p>Manage your workforce</p>
                        </div>
                    </div>

                    <div className="quick-actions">

                        <button>
                            <span>👥</span>
                            <div>
                                <strong>Add Employee</strong>
                                <small>Add a new employee</small>
                            </div>
                        </button>

                        <button>
                            <span>📋</span>
                            <div>
                                <strong>Create Task</strong>
                                <small>Assign new work</small>
                            </div>
                        </button>

                        <button>
                            <span>💰</span>
                            <div>
                                <strong>View Payments</strong>
                                <small>Check recent payments</small>
                            </div>
                        </button>

                        <button>
                            <span>📊</span>
                            <div>
                                <strong>Generate Report</strong>
                                <small>View business reports</small>
                            </div>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDashboard