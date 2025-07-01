import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface ReportData {
  general: {
    tankIdentification: string
    tankType: string
    designStandards: string
    constructionDate: string
    manufacturer: string
    nameplatePresent: string
    asBuiltDrawingAvailable: string
  }
  dimensions: {
    diameter: string
    height: string
    maximumFillingHeight: string
    foundationType: string
    foundationHeight: string
    leakDetectionSystem: string
  }
  roof: {
    roofType: string
    construction: string
    insulation: string
    internalCoating: string
    roofSlope: string
    numberOfBeams: string
    roofThicknessCloseToShell: string
    averageRoofThickness: string
  }
  shell: {
    mainMaterial: string
    construction: string
    internallyCoated: string
    windStiffenerInstalled: string
    topCurbAngleDimensions: string
    designWindLoad: string
    dikeCorrection: string
    anchors: string
    shellCourse5: string
    shellCourse4: string
    shellCourse3: string
    shellCourse2: string
    shellCourse1: string
  }
  bottom: {
    installationDate: string
    bottomPlateThickness: string
    construction: string
    annularRing: string
    annularAverageThickness: string
    annularAverageWidth: string
    internalCoating: string
    cornerWeldThicknessInt: string
    cornerWeldThicknessExt: string
  }
  operationalConditions: {
    productStored: string
    gravityOfProduct: string
    storageTemperature: string
    designPressure: string
    designVacuum: string
    productInflowRate: string
    productOutflowRate: string
  }
}

interface ReportStore {
  data: ReportData
  updateData: (newData: Partial<ReportData>) => void
  resetData: () => void
  validateTab: (tabId: string) => boolean
}

const initialData: ReportData = {
  general: {
    tankIdentification: "",
    tankType: "",
    designStandards: "",
    constructionDate: "",
    manufacturer: "",
    nameplatePresent: "",
    asBuiltDrawingAvailable: "",
  },
  dimensions: {
    diameter: "",
    height: "",
    maximumFillingHeight: "",
    foundationType: "",
    foundationHeight: "",
    leakDetectionSystem: "",
  },
  roof: {
    roofType: "",
    construction: "",
    insulation: "",
    internalCoating: "",
    roofSlope: "",
    numberOfBeams: "",
    roofThicknessCloseToShell: "",
    averageRoofThickness: "",
  },
  shell: {
    mainMaterial: "",
    construction: "",
    internallyCoated: "",
    windStiffenerInstalled: "",
    topCurbAngleDimensions: "",
    designWindLoad: "",
    dikeCorrection: "",
    anchors: "",
    shellCourse5: "",
    shellCourse4: "",
    shellCourse3: "",
    shellCourse2: "",
    shellCourse1: "",
  },
  bottom: {
    installationDate: "",
    bottomPlateThickness: "",
    construction: "",
    annularRing: "",
    annularAverageThickness: "",
    annularAverageWidth: "",
    internalCoating: "",
    cornerWeldThicknessInt: "",
    cornerWeldThicknessExt: "",
  },
  operationalConditions: {
    productStored: "",
    gravityOfProduct: "",
    storageTemperature: "",
    designPressure: "",
    designVacuum: "",
    productInflowRate: "",
    productOutflowRate: "",
  },
}

export const useReportStore = create<ReportStore>()(
  persist(
    (set, get) => ({
      data: initialData,
      updateData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),
      resetData: () => set({ data: initialData }),
      validateTab: (tabId) => {
        const state = get()
        const data = state.data

        switch (tabId) {
          case "general":
            return Object.values(data.general).every((value) => value.trim() !== "")
          case "dimensions":
            return Object.values(data.dimensions).every((value) => value.trim() !== "")
          case "roof":
            return Object.values(data.roof).every((value) => value.trim() !== "")
          case "shell":
            return Object.values(data.shell).every((value) => value.trim() !== "")
          case "bottom":
            return Object.values(data.bottom).every((value) => value.trim() !== "")
          case "operationalConditions":
            return Object.values(data.operationalConditions).every((value) => value.trim() !== "")
          default:
            return false
        }
      },
    }),
    {
      name: "report-storage",
    },
  ),
)
