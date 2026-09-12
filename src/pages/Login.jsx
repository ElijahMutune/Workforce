import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import "./Login.css"

function Login() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const loginAs = (role) => {
        const userData = {
            id: role === "admin" ? 1 : role === "employee" ? 2 : 3,
            name:
                role === "admin"
                    ? "Workforce Admin"
                    : role === "employee"
                        ? "Brian Mwangi"
                        : "Customer",
            role: role,
        }

        login(userData)

        if (role === "admin") {
            navigate("/admin")
        }

        if (role === "employee") {
            navigate("/employee")
        }

        if (role === "customer") {
            navigate("/customer")
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">

                <div className="login-logo">
                    Workforce
                </div>

                <h1>Welcome Back</h1>

                <p className="login-subtitle">
                    Sign in to access your Workforce account
                </p>

                <div className="login-options">

                    <button
                        className="login-role admin-login"
                        onClick={() => loginAs("admin")}
                    >
                        <span>👨‍💼</span>

                        <div>
                            <strong>Admin</strong>
                            <small>Company management</small>
                        </div>
                    </button>

                    <button
                        className="login-role employee-login"
                        onClick={() => loginAs("employee")}
                    >
                        <span>🧑‍🔧</span>

                        <div>
                            <strong>Employee</strong>
                            <small>Manage assigned jobs</small>
                        </div>
                    </button>

                    <button
                        className="login-role customer-login"
                        onClick={() => loginAs("customer")}
                    >
                        <span>👤</span>

                        <div>
                            <strong>Customer</strong>
                            <small>Manage your services</small>
                        </div>
                    </button>

                </div>

                <button
                    className="back-home"
                    onClick={() => navigate("/")}
                >
                    ← Back to Customer Portal
                </button>

            </div>
        </div>
    )
}

export default Login