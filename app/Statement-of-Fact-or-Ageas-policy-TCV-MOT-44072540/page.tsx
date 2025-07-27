"use client"

import React, { useEffect, useState } from "react"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { Button } from "@/components/ui/button"

const StatementFactAgeas = React.lazy(() => import("@/components/StatementFactAgeas"));

export default function InsurancePage() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading PDF viewer...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="mb-6">
               
            </div>
            <div className="w-full h-[80vh] max-w-4xl border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <PDFViewer width="100%" height="100%">
                    {/* <MotorInsuranceCertificate /> */}
                    <StatementFactAgeas />
                </PDFViewer>
            </div>
        </div>
    )
}
