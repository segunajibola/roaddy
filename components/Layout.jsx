import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ user }) {
    return (
        <div className="site-wrapper">
            <Header user={user} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}