import type { ReportData } from "./store"

export function generateReportHTML(data: ReportData): string {
  const currentDate = new Date().toLocaleDateString("en-US")

  return `
    <div class="report-container" style="
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20mm;
      background: white;
    ">
      <!-- Page 1: Cover -->
      <div class="page page-cover" style="
        text-align: center;
        padding: 40mm 0;
        border-bottom: 3px solid #2563eb;
        margin-bottom: 30mm;
      ">
        <h1 style="
          font-size: 32px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 20mm;
          text-transform: uppercase;
          letter-spacing: 2px;
        ">
          TANK INSPECTION REPORT
        </h1>
        
        <div style="
          background: #f8fafc;
          padding: 20mm;
          border-radius: 8px;
          margin: 20mm 0;
          border-left: 4px solid #2563eb;
        ">
          <h2 style="
            font-size: 24px;
            color: #1e40af;
            margin-bottom: 10mm;
          ">
            ${data.general.tankIdentification || "Tank ID Not Defined"}
          </h2>
          
          <div style="font-size: 18px; margin-bottom: 5mm;">
            <strong>Tank Type:</strong> ${data.general.tankType || "Not defined"}
          </div>
          
          <div style="font-size: 16px; margin-bottom: 5mm;">
            <strong>Manufacturer:</strong> ${data.general.manufacturer || "Not defined"}
          </div>
          
          <div style="font-size: 16px; margin-bottom: 5mm;">
            <strong>Construction Date:</strong> ${data.general.constructionDate || "Not defined"}
          </div>
          
          <div style="font-size: 16px;">
            <strong>Design Standards:</strong> ${data.general.designStandards || "Not defined"}
          </div>
        </div>
        
        <div style="
          position: absolute;
          bottom: 20mm;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: #6b7280;
        ">
          Report generated on ${currentDate}
        </div>
      </div>

      <!-- Page 2: General Information -->
      <div class="page page-break-before" style="margin-bottom: 30mm;">
        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          1. GENERAL INFORMATION
        </h2>
        
        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Tank Identification</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.tankIdentification || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Tank Type</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.tankType || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Design Standards</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.designStandards || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Construction Date</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.constructionDate || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Manufacturer</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.manufacturer || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Nameplate Present</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.nameplatePresent || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">As Built Drawing Available</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.general.asBuiltDrawingAvailable || "Not defined"}</td>
          </tr>
        </table>

        <h3 style="
          font-size: 18px;
          color: #374151;
          margin-bottom: 10mm;
        ">
          1.1 DIMENSIONS
        </h3>
        
        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Diameter</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.diameter || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Height</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.height || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Maximum Filling Height</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.maximumFillingHeight || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Foundation Type</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.foundationType || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Foundation Height</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.foundationHeight || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Leak Detection System</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.dimensions.leakDetectionSystem || "Not defined"}</td>
          </tr>
        </table>
      </div>

      <!-- Page 3: Roof Details -->
      <div class="page page-break-before" style="margin-bottom: 30mm;">
        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          2. ROOF SPECIFICATIONS
        </h2>

        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Roof Type</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.roofType || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Construction</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.construction || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Insulation</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.insulation || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Internal Coating</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.internalCoating || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Roof Slope [degrees]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.roofSlope || "Not defined"}°</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Number of Beams</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.numberOfBeams || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Roof Thickness Close to Shell [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.roofThicknessCloseToShell || "Not defined"} mm</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Average Roof Thickness [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.roof.averageRoofThickness || "Not defined"} mm</td>
          </tr>
        </table>
      </div>

      <!-- Page 4: Shell Details -->
      <div class="page page-break-before" style="margin-bottom: 30mm;">
        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          3. SHELL SPECIFICATIONS
        </h2>

        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Main Material</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.mainMaterial || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Construction</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.construction || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Internally Coated</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.internallyCoated || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Wind Stiffener Installed</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.windStiffenerInstalled || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Top Curb Angle Dimensions [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.topCurbAngleDimensions || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Design Wind Load [m/s]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.designWindLoad || "Not defined"} m/s</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Dike Correction</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.dikeCorrection || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Anchors</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.anchors || "Not defined"}</td>
          </tr>
        </table>

        <h3 style="
          font-size: 18px;
          color: #374151;
          margin-bottom: 10mm;
          background: #f8fafc;
          padding: 5mm;
          border-left: 4px solid #2563eb;
        ">
          3.1 SHELL COURSES
        </h3>
        
        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Shell Course 5</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.shellCourse5 || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Shell Course 4</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.shellCourse4 || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Shell Course 3</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.shellCourse3 || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Shell Course 2</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.shellCourse2 || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Shell Course 1</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.shell.shellCourse1 || "Not defined"}</td>
          </tr>
        </table>
      </div>

      <!-- Page 5: Bottom & Operational Conditions -->
      <div class="page page-break-before" style="margin-bottom: 30mm;">
        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          4. BOTTOM SPECIFICATIONS
        </h2>
        
        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Installation Date</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.installationDate || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Bottom Plate Thickness [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.bottomPlateThickness || "Not defined"} mm</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Construction</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.construction || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Annular Ring</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.annularRing || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Annular Average Thickness [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.annularAverageThickness || "Not defined"} mm</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Annular Average Width [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.annularAverageWidth || "Not defined"} mm</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Internal Coating</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.internalCoating || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Corner Weld Thickness Int. [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.cornerWeldThicknessInt || "Not defined"} mm</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Corner Weld Thickness Ext. [mm]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.bottom.cornerWeldThicknessExt || "Not defined"} mm</td>
          </tr>
        </table>

        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          5. OPERATIONAL CONDITIONS
        </h2>
        
        <table style="
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15mm;
          font-size: 14px;
        ">
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              width: 40%;
            ">Product Stored</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.productStored || "Not defined"}</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Gravity of Product</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.gravityOfProduct || "Not defined"}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Storage Temperature [°C]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.storageTemperature || "Not defined"}°C</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Design Pressure [mbar]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.designPressure || "Not defined"} mbar</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Design Vacuum [mbar]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.designVacuum || "Not defined"} mbar</td>
          </tr>
          <tr>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
              background: #f8fafc;
            ">Product Inflow Rate [m³/h]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.productInflowRate || "Not defined"} m³/h</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
              font-weight: bold;
            ">Product Outflow Rate [m³/h]</td>
            <td style="
              padding: 8px 12px;
              border: 1px solid #e5e7eb;
            ">${data.operationalConditions.productOutflowRate || "Not defined"} m³/h</td>
          </tr>
        </table>
      </div>

      <!-- Page 6: Summary -->
      <div class="page page-break-before">
        <h2 style="
          font-size: 24px;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5mm;
          margin-bottom: 15mm;
        ">
          6. INSPECTION SUMMARY
        </h2>
        
        <div style="
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 15mm;
          margin-bottom: 20mm;
        ">
          <h3 style="
            font-size: 16px;
            color: #374151;
            margin-bottom: 10mm;
          ">Tank Overview</h3>
          
          <p style="
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 10mm;
          ">
            Tank <strong>${data.general.tankIdentification || "Not defined"}</strong> 
            is a <strong>${data.general.tankType || "undefined type"}</strong> tank 
            manufactured by <strong>${data.general.manufacturer || "unknown manufacturer"}</strong> 
            in <strong>${data.general.constructionDate || "unknown year"}</strong>.
          </p>
          
          <p style="
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 10mm;
          ">
            The tank has the following key specifications:
          </p>
          
          <ul style="
            font-size: 14px;
            line-height: 1.6;
            margin-left: 20px;
            margin-bottom: 10mm;
          ">
            <li>Diameter: ${data.dimensions.diameter || "Not specified"}</li>
            <li>Height: ${data.dimensions.height || "Not specified"}</li>
            <li>Maximum Filling Height: ${data.dimensions.maximumFillingHeight || "Not specified"}</li>
            <li>Roof Type: ${data.roof.roofType || "Not specified"}</li>
            <li>Shell Material: ${data.shell.mainMaterial || "Not specified"}</li>
            <li>Product Stored: ${data.operationalConditions.productStored || "Not specified"}</li>
          </ul>
        </div>
        
        <div style="
          text-align: center;
          margin-top: 30mm;
          padding-top: 15mm;
          border-top: 1px solid #e5e7eb;
        ">
          <p style="
            font-size: 12px;
            color: #6b7280;
            margin-bottom: 5mm;
          ">
            Report generated automatically on ${currentDate}
          </p>
          
          <div style="
            display: inline-block;
            border: 1px solid #e5e7eb;
            padding: 10mm;
            margin-top: 10mm;
          ">
            <p style="
              font-size: 12px;
              margin-bottom: 15mm;
              color: #374151;
            ">
              Inspector Signature
            </p>
            <p style="
              font-size: 14px;
              font-weight: bold;
              color: #1e40af;
            ">
              Tank Inspection Report
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>
      @media print {
        .page-break-before {
          page-break-before: always;
        }
        
        .page-break-after {
          page-break-after: always;
        }
        
        .report-container {
          margin: 0;
          padding: 0;
        }
        
        .page {
          margin: 0;
          padding: 20mm;
        }
      }
      
      @page {
        size: A4;
        margin: 0;
      }
    </style>
  `
}

function getConditionStyle(condition: string): string {
  switch (condition) {
    case "excellent":
      return "background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;"
    case "good":
      return "background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe;"
    case "fair":
      return "background: #fef3c7; color: #92400e; border: 1px solid #fde68a;"
    case "poor":
      return "background: #fee2e2; color: #dc2626; border: 1px solid #fecaca;"
    default:
      return "background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;"
  }
}

function getConditionText(condition: string): string {
  switch (condition) {
    case "excellent":
      return "EXCELLENT"
    case "good":
      return "BON"
    case "fair":
      return "CORRECT"
    case "poor":
      return "MAUVAIS"
    default:
      return "NON ÉVALUÉ"
  }
}
