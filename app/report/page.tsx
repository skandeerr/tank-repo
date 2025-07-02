"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useReportStore } from "@/lib/store"
import { generateReportHTML } from "@/lib/template"
import { ArrowLeft, Download } from "lucide-react"

declare global {
  interface Window {
    html2pdf: any
  }
}

export default function ReportPage() {
  const router = useRouter()
  const { data } = useReportStore()
  const [reportHTML, setReportHTML] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const html = generateReportHTML(data)
    setReportHTML(html)
  }, [data])

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Vérifier si html2pdf est disponible
      if (typeof window === "undefined") {
        throw new Error("Window is not available")
      }

      // Charger html2pdf via CDN si pas déjà chargé
      if (!window.html2pdf) {
        const script = document.createElement("script")
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        script.onload = () => {
          generatePDFWithLibrary()
        }
        script.onerror = () => {
          throw new Error("Failed to load html2pdf library")
        }
        document.head.appendChild(script)
      } else {
        generatePDFWithLibrary()
      }
    } catch (error:any) {
      console.error("Erreur lors de la génération du PDF:", error)
      alert(`Erreur lors de la génération du PDF: ${error.message}. Veuillez réessayer.`)
      setIsGenerating(false)
    }
  }

  const generatePDFWithLibrary = () => {
    try {
      const element = document.getElementById("report-content")
      if (!element) {
        throw new Error("Report content not found")
      }

      const options = {
        margin: [10, 10, 10, 10],
        filename: `tank-inspection-report-${data.general.tankIdentification || "tank"}-${new Date().toISOString().split("T")[0]}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 1.5,
          useCORS: true,
          letterRendering: true,
          logging: false,
          allowTaint: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
          before: ".page-break-before",
          after: ".page-break-after",
        },
      }

      window
        .html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {
          console.log("PDF generated successfully")
          setIsGenerating(false)
        })
        .catch((error:any) => {
          console.error("PDF generation error:", error)
          alert("Erreur lors de la génération du PDF. Veuillez réessayer.")
          setIsGenerating(false)
        })
    } catch (error) {
      console.error("PDF generation error:", error)
      alert("Erreur lors de la génération du PDF. Veuillez réessayer.")
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Form
              </Button>
              <h1 className="text-2xl font-bold text-white">
                Report Preview - {data.general.tankIdentification || "Not defined"}
              </h1>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={generatePDF}
                disabled={isGenerating}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div
          id="report-content"
          className="bg-white shadow-2xl rounded-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: reportHTML }}
        />
      </div>
    </div>
  )
}
