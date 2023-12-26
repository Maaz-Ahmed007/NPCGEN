import { createContext, useContext, useEffect, useState } from "react"
import { getData, setData } from "@/lib/localStorage"

const LocalStorageContext = createContext()

export const LocalStorageProvider = ({ children }) => {
    const [localStorageData, setLocalStorageData] = useState({})

    useEffect(() => {
        const initialData = getData('npclist')
        if (initialData) {
            
        }
    })
}