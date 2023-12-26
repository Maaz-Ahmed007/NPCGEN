'use client'

import { useEffect, useState } from "react"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

export default function NPCTrait({
    field,
    form,
    raceChanged,
}: {
    field: any
    form: any
    raceChanged: boolean
}) {
    const [trait, setTrait] = useState('none')

    const handleTraits = (race: string) => {
        if (race == 'none') return setTrait('none')
        if (race == 'human') return setTrait('human')
        if (race == 'elf') return setTrait('elf')
        if (race == 'half_elf') return setTrait('half_elf')
        if (race == 'dwarf') return setTrait('dwarf')
        if (race == 'half_dwarf') return setTrait('half_dwarf')
        if (race == 'orc') return setTrait('orc')
        if (race == 'half_orc') return setTrait('half_orc')
        if (race == 'halfling') return setTrait('halfling')
        if (race == 'gnome') return setTrait('gnome')
        if (race == 'traiggoblin') return setTrait('traiggoblin')
    }

    useEffect(() => {
        const race = form.getValues('npcrace')
        handleTraits((race))
    }, [form, raceChanged])

    return (
        <>
            <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder='Select a trait' />
                </SelectTrigger>
                <SelectContent>
                    {trait == 'none' && (
                        <SelectItem value='No Traits Available'>
                            No Traits Available
                        </SelectItem>
                    )}
                    {trait == 'human' && (
                        <SelectItem value='Bonus'>
                            Bonus
                        </SelectItem>
                    )}
                    {trait == 'elf' && (
                        <SelectItem value='Trueshot'>
                            Trueshot
                        </SelectItem>
                    )}
                    {trait == 'half_elf' && (
                        <>
                            <SelectItem value='Humbled'>
                                Humbled
                            </SelectItem>
                            <SelectItem value='Adaptable'>
                                Adaptable
                            </SelectItem>
                        </>
                    )}
                    {trait == 'dwarf' && (
                        <>
                            <SelectItem value='Golden Eye'>
                                Golden Eye
                            </SelectItem>
                            <SelectItem value='Like a Dwarf'>
                                Like a Dwarf
                            </SelectItem>
                        </>
                    )}
                    {trait == 'half_dwarf' && (
                        <>
                            <SelectItem value='Like a Dwarf'>
                                Like a Dwarf
                            </SelectItem>
                            <SelectItem value='Under Open Skies'>
                                Under Open Skies
                            </SelectItem>
                        </>
                    )}
                    {trait == 'orc' && (
                        <>
                            <SelectItem value='Art of the Club'>
                                Art of the Club
                            </SelectItem>
                            <SelectItem value='Slave Master'>
                                Slave Master
                            </SelectItem>
                        </>
                    )}
                    {trait == 'half_orc' && (
                        <>
                            <SelectItem value='Revered'>
                                Revered
                            </SelectItem>
                            <SelectItem value='Reviled'>
                                Reviled
                            </SelectItem>
                        </>
                    )}
                    {trait == 'halfling' && (
                        <>
                            <SelectItem value='Quiet Quickstep'>
                                Quiet Quickstep
                            </SelectItem>
                            <SelectItem value='Second Breakfast'>
                                Second Breakfast
                            </SelectItem>
                        </>
                    )}
                    {trait == 'gnome' && (
                        <>
                            <SelectItem value='Trinket Master'>
                                Trinket Master
                            </SelectItem>
                            <SelectItem value="Moment's Respite">
                                Moment's Respite
                            </SelectItem>
                        </>
                    )}
                    {trait == 'traiggoblin' && (
                        <>
                            <SelectItem value='Scent Sniffer'>
                                Scent Sniffer
                            </SelectItem>
                            <SelectItem value="Unfair Fighter">
                                Unfair Fighter
                            </SelectItem>
                        </>
                    )}
                </SelectContent>
            </Select>
        </>
    )
}