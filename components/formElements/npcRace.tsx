import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

import { races } from "@/lib/npcData"

export default function NPCRace({
    field
}: {
    field: any
}) {
    return (
        <>
            <Select onValueChange={field.onChange}>
                <SelectTrigger>
                    <SelectValue placeholder='Select a race' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='default'>none</SelectItem>
                    {races.map((race: any) => (
                        <SelectItem value={race}>
                            {race}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}