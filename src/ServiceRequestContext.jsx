import { createContext, useContext, useState } from "react"

const ServiceRequestContext = createContext()

export function ServiceRequestProvider({ children }) {
    const [requests, setRequests] = useState([])

    const addRequest = (request) => {
        setRequests((currentRequests) => [
            ...currentRequests,
            request,
        ])
    }

    const updateRequest = (id, updates) => {
        setRequests((currentRequests) =>
            currentRequests.map((request) =>
                request.id === id
                    ? { ...request, ...updates }
                    : request
            )
        )
    }

    return (
        <ServiceRequestContext.Provider
            value={{
                requests,
                addRequest,
                updateRequest,
            }}
        >
            {children}
        </ServiceRequestContext.Provider>
    )
}

export function useServiceRequests() {
    return useContext(ServiceRequestContext)
}