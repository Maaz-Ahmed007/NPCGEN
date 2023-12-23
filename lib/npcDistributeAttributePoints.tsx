'use client'

import { races } from "@/lib/npcData"
import { useState } from "react"

export default function NPCDistributeAttributePoints(
    race: string,
    BOD: number,
    DEX: number,
    MND: number,
    CHA: number
) {
    const [raceTrack, setRaceTrack] = useState<boolean[]>(Array(races.length).fill(false))

    const adjustRaces = (selectedRace: string) => {
        const updatedSelectedRaces = raceTrack.map((r) => r)
        const selectedRaceIndex = races.indexOf(selectedRace)

        console.log(selectedRaceIndex)
        console.log(updatedSelectedRaces)
        if (selectedRaceIndex !== -1) {
            updatedSelectedRaces[selectedRaceIndex] = !updatedSelectedRaces[selectedRaceIndex]
        }

        setRaceTrack(updatedSelectedRaces)

        // races.map((allraces: string) => {
        //     if (allraces == race) {

        //     } else if (allraces != race) {

        //     }
        // })
    }

    const calculateAttributes = (bod: number, dex: number, mnd: number, cha: number) => {
        BOD += bod
        DEX += dex
        MND += mnd
        CHA += cha

        return { BOD, DEX, MND, CHA }
    }

    adjustRaces(race)

    return { bod: 6, dex: 6, mnd: 6, cha: 6 }
}