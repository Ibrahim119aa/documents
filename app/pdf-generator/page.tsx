"use client"

import { useEffect, useState } from "react"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { Button } from "@/components/ui/button"
import MotorInsuranceCertificate from "@/components/motor-insurance-certificate"

export default function PdfGeneratorPage() {
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
      <h1 className="text-2xl font-bold mb-6">Motor Insurance Certificate</h1>
      <div className="mb-6">
        <PDFDownloadLink
          document={<MotorInsuranceCertificate />}
          fileName="motor-insurance-certificate.pdf"
        >
          {({ loading }) => (
            <Button disabled={loading}>
              {loading ? "Generating PDF..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
      <div className="w-full h-[80vh] max-w-4xl border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <PDFViewer width="100%" height="100%">
          <MotorInsuranceCertificate />
        </PDFViewer>
      </div>
    </div>
  )
}
