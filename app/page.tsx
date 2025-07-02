"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useReportStore } from "@/lib/store"
import { ChevronLeft, ChevronRight, FileText, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const steps = [
  { id: "general", title: "General", description: "Tank identification and basic info" },
  { id: "dimensions", title: "Dimensions", description: "Tank dimensions and foundation" },
  { id: "roof", title: "Roof", description: "Roof specifications and details" },
  { id: "shell", title: "Shell", description: "Shell construction and materials" },
  { id: "bottom", title: "Bottom", description: "Bottom plate specifications" },
  { id: "operationalConditions", title: "Operational Conditions", description: "Operating parameters" },
]

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [validationError, setValidationError] = useState("")
  const router = useRouter()
  const { data, updateData, validateTab } = useReportStore()

  const handleNext = () => {
    const currentTabId = steps[currentStep].id
    const isValid = validateTab(currentTabId)

    if (!isValid) {
      setValidationError("Veuillez remplir tous les champs obligatoires avant de continuer.")
      return
    }

    setValidationError("")
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    setValidationError("")
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerateReport = () => {
    const currentTabId = steps[currentStep].id
    const isValid = validateTab(currentTabId)

    if (!isValid) {
      setValidationError("Veuillez remplir tous les champs obligatoires avant de générer le rapport.")
      return
    }

    router.push("/report")
  }

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case "general":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="tankIdentification">Tank Identification *</Label>
              <Input
                id="tankIdentification"
                value={data.general.tankIdentification}
                onChange={(e) => updateData({ general: { ...data.general, tankIdentification: e.target.value } })}
                placeholder="Enter tank identification"
                required
              />
            </div>
            <div>
              <Label htmlFor="tankType">Tank Type *</Label>
              <Input
                id="tankType"
                value={data.general.tankType}
                onChange={(e) => updateData({ general: { ...data.general, tankType: e.target.value } })}
                placeholder="Enter tank type"
                required
              />
            </div>
            <div>
              <Label htmlFor="designStandards">Design Standards *</Label>
              <Input
                id="designStandards"
                value={data.general.designStandards}
                onChange={(e) => updateData({ general: { ...data.general, designStandards: e.target.value } })}
                placeholder="Enter design standards"
                required
              />
            </div>
            <div>
              <Label htmlFor="constructionDate">Construction Date *</Label>
              <Input
                id="constructionDate"
                type="number"
                min="1900"
                max="2030"
                value={data.general.constructionDate}
                onChange={(e) => updateData({ general: { ...data.general, constructionDate: e.target.value } })}
                placeholder="Enter construction year"
                required
              />
            </div>
            <div>
              <Label htmlFor="manufacturer">Manufacturer *</Label>
              <Input
                id="manufacturer"
                value={data.general.manufacturer}
                onChange={(e) => updateData({ general: { ...data.general, manufacturer: e.target.value } })}
                placeholder="Enter manufacturer name"
                required
              />
            </div>
            <div>
              <Label htmlFor="nameplatePresent">Nameplate Present? *</Label>
              <Select
                value={data.general.nameplatePresent}
                onValueChange={(value:any) => updateData({ general: { ...data.general, nameplatePresent: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="asBuiltDrawingAvailable">As Built Drawing Available *</Label>
              <Select
                value={data.general.asBuiltDrawingAvailable}
                onValueChange={(value:any) => updateData({ general: { ...data.general, asBuiltDrawingAvailable: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case "dimensions":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="diameter">Diameter *</Label>
              <Input
                id="diameter"
                type="number"
                step="0.01"
                value={data.dimensions.diameter}
                onChange={(e) => updateData({ dimensions: { ...data.dimensions, diameter: e.target.value } })}
                placeholder="Enter diameter"
                required
              />
            </div>
            <div>
              <Label htmlFor="height">Height *</Label>
              <Input
                id="height"
                type="number"
                step="0.01"
                value={data.dimensions.height}
                onChange={(e) => updateData({ dimensions: { ...data.dimensions, height: e.target.value } })}
                placeholder="Enter height"
                required
              />
            </div>
            <div>
              <Label htmlFor="maximumFillingHeight">Maximum Filling Height *</Label>
              <Input
                id="maximumFillingHeight"
                type="number"
                step="0.01"
                value={data.dimensions.maximumFillingHeight}
                onChange={(e) =>
                  updateData({ dimensions: { ...data.dimensions, maximumFillingHeight: e.target.value } })
                }
                placeholder="Enter maximum filling height"
                required
              />
            </div>
            <div>
              <Label htmlFor="foundationType">Foundation Type *</Label>
              <Input
                id="foundationType"
                value={data.dimensions.foundationType}
                onChange={(e) => updateData({ dimensions: { ...data.dimensions, foundationType: e.target.value } })}
                placeholder="Enter foundation type"
                required
              />
            </div>
            <div>
              <Label htmlFor="foundationHeight">Foundation Height *</Label>
              <Input
                id="foundationHeight"
                type="number"
                step="0.01"
                value={data.dimensions.foundationHeight}
                onChange={(e) => updateData({ dimensions: { ...data.dimensions, foundationHeight: e.target.value } })}
                placeholder="Enter foundation height"
                required
              />
            </div>
            <div>
              <Label htmlFor="leakDetectionSystem">Leak Detection System *</Label>
              <Select
                value={data.dimensions.leakDetectionSystem}
                onValueChange={(value:any) =>
                  updateData({ dimensions: { ...data.dimensions, leakDetectionSystem: value } })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case "roof":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="roofType">Roof Type *</Label>
              <Input
                id="roofType"
                value={data.roof.roofType}
                onChange={(e) => updateData({ roof: { ...data.roof, roofType: e.target.value } })}
                placeholder="Enter roof type"
                required
              />
            </div>
            <div>
              <Label htmlFor="roofConstruction">Construction *</Label>
              <Input
                id="roofConstruction"
                value={data.roof.construction}
                onChange={(e) => updateData({ roof: { ...data.roof, construction: e.target.value } })}
                placeholder="Enter construction details"
                required
              />
            </div>
            <div>
              <Label htmlFor="insulation">Insulation *</Label>
              <Select
                value={data.roof.insulation}
                onValueChange={(value:any) => updateData({ roof: { ...data.roof, insulation: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="internalCoating">Internal Coating *</Label>
              <Select
                value={data.roof.internalCoating}
                onValueChange={(value:any) => updateData({ roof: { ...data.roof, internalCoating: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="roofSlope">Roof Slope [degrees] *</Label>
              <Input
                id="roofSlope"
                type="number"
                step="0.1"
                value={data.roof.roofSlope}
                onChange={(e) => updateData({ roof: { ...data.roof, roofSlope: e.target.value } })}
                placeholder="Enter roof slope in degrees"
                required
              />
            </div>
            <div>
              <Label htmlFor="numberOfBeams">Number of Beams *</Label>
              <Input
                id="numberOfBeams"
                type="number"
                value={data.roof.numberOfBeams}
                onChange={(e) => updateData({ roof: { ...data.roof, numberOfBeams: e.target.value } })}
                placeholder="Enter number of beams"
                required
              />
            </div>
            <div>
              <Label htmlFor="roofThicknessCloseToShell">Roof Thickness Close to Shell [mm] *</Label>
              <Input
                id="roofThicknessCloseToShell"
                type="number"
                step="0.1"
                value={data.roof.roofThicknessCloseToShell}
                onChange={(e) => updateData({ roof: { ...data.roof, roofThicknessCloseToShell: e.target.value } })}
                placeholder="Enter thickness in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="averageRoofThickness">Average Roof Thickness [mm] *</Label>
              <Input
                id="averageRoofThickness"
                type="number"
                step="0.1"
                value={data.roof.averageRoofThickness}
                onChange={(e) => updateData({ roof: { ...data.roof, averageRoofThickness: e.target.value } })}
                placeholder="Enter average thickness in mm"
                required
              />
            </div>
          </div>
        )

      case "shell":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="mainMaterial">Main Material *</Label>
              <Input
                id="mainMaterial"
                value={data.shell.mainMaterial}
                onChange={(e) => updateData({ shell: { ...data.shell, mainMaterial: e.target.value } })}
                placeholder="Enter main material"
                required
              />
            </div>
            <div>
              <Label htmlFor="shellConstruction">Construction *</Label>
              <Input
                id="shellConstruction"
                value={data.shell.construction}
                onChange={(e) => updateData({ shell: { ...data.shell, construction: e.target.value } })}
                placeholder="Enter construction details"
                required
              />
            </div>
            <div>
              <Label htmlFor="internallyCoated">Internally Coated *</Label>
              <Select
                value={data.shell.internallyCoated}
                onValueChange={(value:any) => updateData({ shell: { ...data.shell, internallyCoated: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="windStiffenerInstalled">Wind Stiffener Installed *</Label>
              <Select
                value={data.shell.windStiffenerInstalled}
                onValueChange={(value:any) => updateData({ shell: { ...data.shell, windStiffenerInstalled: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="topCurbAngleDimensions">Top Curb Angle Dimensions [mm] *</Label>
              <Input
                id="topCurbAngleDimensions"
                value={data.shell.topCurbAngleDimensions}
                onChange={(e) => updateData({ shell: { ...data.shell, topCurbAngleDimensions: e.target.value } })}
                placeholder="Enter dimensions in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="designWindLoad">Design Wind Load [m/s] *</Label>
              <Input
                id="designWindLoad"
                type="number"
                step="0.1"
                value={data.shell.designWindLoad}
                onChange={(e) => updateData({ shell: { ...data.shell, designWindLoad: e.target.value } })}
                placeholder="Enter wind load in m/s"
                required
              />
            </div>
            <div>
              <Label htmlFor="dikeCorrection">Dike Correction *</Label>
              <Select
                value={data.shell.dikeCorrection}
                onValueChange={(value:any) => updateData({ shell: { ...data.shell, dikeCorrection: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="anchors">Anchors *</Label>
              <Select
                value={data.shell.anchors}
                onValueChange={(value:any) => updateData({ shell: { ...data.shell, anchors: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-medium text-gray-900">Shell Course Height / Average Thickness</h4>
              <div>
                <Label htmlFor="shellCourse5">Shell Course 5 *</Label>
                <Input
                  id="shellCourse5"
                  value={data.shell.shellCourse5}
                  onChange={(e) => updateData({ shell: { ...data.shell, shellCourse5: e.target.value } })}
                  placeholder="Height / thickness"
                  required
                />
              </div>
              <div>
                <Label htmlFor="shellCourse4">Shell Course 4 *</Label>
                <Input
                  id="shellCourse4"
                  value={data.shell.shellCourse4}
                  onChange={(e) => updateData({ shell: { ...data.shell, shellCourse4: e.target.value } })}
                  placeholder="Height / thickness"
                  required
                />
              </div>
              <div>
                <Label htmlFor="shellCourse3">Shell Course 3 *</Label>
                <Input
                  id="shellCourse3"
                  value={data.shell.shellCourse3}
                  onChange={(e) => updateData({ shell: { ...data.shell, shellCourse3: e.target.value } })}
                  placeholder="Height / thickness"
                  required
                />
              </div>
              <div>
                <Label htmlFor="shellCourse2">Shell Course 2 *</Label>
                <Input
                  id="shellCourse2"
                  value={data.shell.shellCourse2}
                  onChange={(e) => updateData({ shell: { ...data.shell, shellCourse2: e.target.value } })}
                  placeholder="Height / thickness"
                  required
                />
              </div>
              <div>
                <Label htmlFor="shellCourse1">Shell Course 1 *</Label>
                <Input
                  id="shellCourse1"
                  value={data.shell.shellCourse1}
                  onChange={(e) => updateData({ shell: { ...data.shell, shellCourse1: e.target.value } })}
                  placeholder="Height / thickness"
                  required
                />
              </div>
            </div>
          </div>
        )

      case "bottom":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="installationDate">Installation Date *</Label>
              <Input
                id="installationDate"
                type="number"
                min="1900"
                max="2030"
                value={data.bottom.installationDate}
                onChange={(e) => updateData({ bottom: { ...data.bottom, installationDate: e.target.value } })}
                placeholder="Enter installation year"
                required
              />
            </div>
            <div>
              <Label htmlFor="bottomPlateThickness">Bottom Plate Thickness [mm] *</Label>
              <Input
                id="bottomPlateThickness"
                type="number"
                step="0.1"
                value={data.bottom.bottomPlateThickness}
                onChange={(e) => updateData({ bottom: { ...data.bottom, bottomPlateThickness: e.target.value } })}
                placeholder="Enter thickness in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="bottomConstruction">Construction *</Label>
              <Input
                id="bottomConstruction"
                value={data.bottom.construction}
                onChange={(e) => updateData({ bottom: { ...data.bottom, construction: e.target.value } })}
                placeholder="Enter construction details"
                required
              />
            </div>
            <div>
              <Label htmlFor="annularRing">Annular Ring *</Label>
              <Select
                value={data.bottom.annularRing}
                onValueChange={(value:any) => updateData({ bottom: { ...data.bottom, annularRing: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="annularAverageThickness">Annular Average Thickness [mm] *</Label>
              <Input
                id="annularAverageThickness"
                type="number"
                step="0.1"
                value={data.bottom.annularAverageThickness}
                onChange={(e) => updateData({ bottom: { ...data.bottom, annularAverageThickness: e.target.value } })}
                placeholder="Enter thickness in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="annularAverageWidth">Annular Average Width [mm] *</Label>
              <Input
                id="annularAverageWidth"
                type="number"
                step="0.1"
                value={data.bottom.annularAverageWidth}
                onChange={(e) => updateData({ bottom: { ...data.bottom, annularAverageWidth: e.target.value } })}
                placeholder="Enter width in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="bottomInternalCoating">Internal Coating *</Label>
              <Select
                value={data.bottom.internalCoating}
                onValueChange={(value:any) => updateData({ bottom: { ...data.bottom, internalCoating: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cornerWeldThicknessInt">Corner Weld Thickness Int. [mm] *</Label>
              <Input
                id="cornerWeldThicknessInt"
                type="number"
                step="0.1"
                value={data.bottom.cornerWeldThicknessInt}
                onChange={(e) => updateData({ bottom: { ...data.bottom, cornerWeldThicknessInt: e.target.value } })}
                placeholder="Enter internal thickness in mm"
                required
              />
            </div>
            <div>
              <Label htmlFor="cornerWeldThicknessExt">Corner Weld Thickness Ext. [mm] *</Label>
              <Input
                id="cornerWeldThicknessExt"
                type="number"
                step="0.1"
                value={data.bottom.cornerWeldThicknessExt}
                onChange={(e) => updateData({ bottom: { ...data.bottom, cornerWeldThicknessExt: e.target.value } })}
                placeholder="Enter external thickness in mm"
                required
              />
            </div>
          </div>
        )

      case "operationalConditions":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="productStored">Product Stored *</Label>
              <Input
                id="productStored"
                value={data.operationalConditions.productStored}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, productStored: e.target.value },
                  })
                }
                placeholder="Enter product stored"
                required
              />
            </div>
            <div>
              <Label htmlFor="gravityOfProduct">Gravity of Product *</Label>
              <Input
                id="gravityOfProduct"
                type="number"
                step="0.001"
                value={data.operationalConditions.gravityOfProduct}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, gravityOfProduct: e.target.value },
                  })
                }
                placeholder="Enter specific gravity"
                required
              />
            </div>
            <div>
              <Label htmlFor="storageTemperature">Storage Temperature [°C] *</Label>
              <Input
                id="storageTemperature"
                type="number"
                step="0.1"
                value={data.operationalConditions.storageTemperature}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, storageTemperature: e.target.value },
                  })
                }
                placeholder="Enter temperature in °C"
                required
              />
            </div>
            <div>
              <Label htmlFor="designPressure">Design Pressure [mbar] *</Label>
              <Input
                id="designPressure"
                type="number"
                step="0.1"
                value={data.operationalConditions.designPressure}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, designPressure: e.target.value },
                  })
                }
                placeholder="Enter pressure in mbar"
                required
              />
            </div>
            <div>
              <Label htmlFor="designVacuum">Design Vacuum [mbar] *</Label>
              <Input
                id="designVacuum"
                type="number"
                step="0.1"
                value={data.operationalConditions.designVacuum}
                onChange={(e) =>
                  updateData({ operationalConditions: { ...data.operationalConditions, designVacuum: e.target.value } })
                }
                placeholder="Enter vacuum in mbar"
                required
              />
            </div>
            <div>
              <Label htmlFor="productInflowRate">Product Inflow Rate [m³/h] *</Label>
              <Input
                id="productInflowRate"
                type="number"
                step="0.1"
                value={data.operationalConditions.productInflowRate}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, productInflowRate: e.target.value },
                  })
                }
                placeholder="Enter inflow rate in m³/h"
                required
              />
            </div>
            <div>
              <Label htmlFor="productOutflowRate">Product Outflow Rate [m³/h] *</Label>
              <Input
                id="productOutflowRate"
                type="number"
                step="0.1"
                value={data.operationalConditions.productOutflowRate}
                onChange={(e) =>
                  updateData({
                    operationalConditions: { ...data.operationalConditions, productOutflowRate: e.target.value },
                  })
                }
                placeholder="Enter outflow rate in m³/h"
                required
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tank Inspection Report Generator</h1>
          <p className="text-gray-600">Fill in the information to generate your PDF report</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`
              flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
              ${
                index < currentStep
                  ? "bg-green-500 border-green-500 text-white shadow-lg"
                  : index === currentStep
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-110"
                    : "bg-white border-gray-300 text-gray-500 hover:border-blue-300"
              }
            `}
                    >
                      {index < currentStep ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p
                        className={`text-sm font-medium transition-colors duration-300 ${
                          index <= currentStep ? "text-blue-600" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-400 max-w-20">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`
              w-16 h-1 mx-4 rounded-full transition-all duration-300
              ${index < currentStep ? "bg-green-500" : "bg-gray-300"}
            `}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Validation Error */}
        {validationError && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{validationError}</AlertDescription>
          </Alert>
        )}

        {/* Form Content */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardHeader
            className={`
    bg-gradient-to-r text-white rounded-t-lg
    ${
      currentStep === 0
        ? "from-blue-500 to-blue-600"
        : currentStep === 1
          ? "from-purple-500 to-purple-600"
          : currentStep === 2
            ? "from-green-500 to-green-600"
            : currentStep === 3
              ? "from-orange-500 to-orange-600"
              : currentStep === 4
                ? "from-red-500 to-red-600"
                : "from-indigo-500 to-indigo-600"
    }
  `}
          >
            <CardTitle className="text-xl">{steps[currentStep].title}</CardTitle>
            <p className="text-sm opacity-90">* indicates required fields</p>
          </CardHeader>
          <CardContent className="p-8">{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-6 py-3 border-2 hover:bg-gray-50 disabled:opacity-50 transition-all duration-300 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-4">
            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handleGenerateReport}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
