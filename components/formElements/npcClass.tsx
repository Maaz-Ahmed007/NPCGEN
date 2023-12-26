import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

import { classes } from "@/lib/npcData"

export default function NPCClass({
    field,
    classChanged,
    setClassChanged
}: {
    field: any
    classChanged: any
    setClassChanged: any
}) {
    const handleStateChange = (value: any) => {
        field.onChange(value)
        setClassChanged(!classChanged)
    }

    return (
        <>
            <Select onValueChange={(value) => handleStateChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder='Select a class' />
                </SelectTrigger>
                <SelectContent>
                    {classes.map((item: any) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}