import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

import { races } from "@/lib/npcData"

export default function NPCRace({
    field,
    raceChanged,
    setRaceChanged
}: {
    field: any
    raceChanged: any
    setRaceChanged: any
}) {
    const handleStateChange = (value: any) => {
        field.onChange(value)
        setRaceChanged(!raceChanged)
    }

    return (
        <>
            <Select onValueChange={(value) => handleStateChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder='Select a race' />
                </SelectTrigger>
                <SelectContent>
                    {races.map((race: any) => (
                        <SelectItem key={race} value={race}>
                            {race}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}