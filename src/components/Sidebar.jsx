function Sidebar({ activePage, onNavigate }) {
    const menuItems = [
        "Dashboard",
        "Employees",
        "Services",
        "Service Requests",
        "Tasks",
        "My Jobs",
        "Customers",
        "Payments",
        "Reports",
        "Settings",
    ]

    return (
        <aside className="sidebar">
            <div className="logo">
                Workforce
            </div>

            <nav>
                {menuItems.map((item) => (
                    <button
                        key={item}
                        className={activePage === item ? "active" : ""}
                        onClick={() => onNavigate(item)}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            <button className="logout">
                Logout
            </button>
        </aside>
    )
}

export default Sidebar