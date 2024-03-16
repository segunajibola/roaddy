import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="text-[24px] font-medium">${currentVan.price}<span className="text-sm text-[#4d4d4d]">/day</span></h3>
    )
}