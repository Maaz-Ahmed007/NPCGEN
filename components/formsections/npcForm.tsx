'use client'

import * as z from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import useLocalStorage from '@/lib/localStorage'
import { classes, races } from '@/lib/npcData'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'

import NPCName from '@/components/formElements/npcName'
import NPCDescription from '@/components/formElements/npcDescription'
import NPCRace from '@/components/formElements/npcRace'
import NPCAttributes from '@/components/formElements/npcAttrubutes'
import NPCTrait from '../formElements/npcTrait'
import NPCClass from '../formElements/npcClass'
import { Separator } from '../ui/separator'


const raceAttributes = [
    { bod: 0, dex: 0, mnd: 0, cha: 0 }, //none
    { bod: 2, dex: 2, mnd: 2, cha: 2 }, //human
    { bod: 0, dex: 1, mnd: 1, cha: 0 }, //elf
    { bod: 0, dex: 0, mnd: 1, cha: 0 }, //half elf
    { bod: 1, dex: 0, mnd: 0, cha: -1 }, //dwarf
    { bod: 1, dex: 0, mnd: 0, cha: 0 }, //half dwarf
    { bod: 1, dex: 1, mnd: -1, cha: -1 }, //orc
    { bod: 1, dex: 0, mnd: 1, cha: 0 }, // half orc
    { bod: -1, dex: 0, mnd: 0, cha: 2 }, //halfling
    { bod: -1, dex: 0, mnd: 2, cha: 0 }, //gnome
    { bod: 0, dex: 2, mnd: 0, cha: -1 } //traiggobling
]

const classAttributes = [
    { bod: 0, dex: 0, mnd: 0, cha: 0 }, //none
    { bod: 2, dex: 2, mnd: 2, cha: 0 }, //fighter(medium)
    { bod: 2, dex: 2, mnd: 2, cha: 0 }, //fighter(medium/shield)
    { bod: 3, dex: 2, mnd: 1, cha: 0 }, //fighter(heavy)
    { bod: 1, dex: 3, mnd: 2, cha: 0 }, //scout(dual wield light)
    { bod: 1, dex: 2, mnd: 2, cha: 1 }, //ranger(medium/range)
    { bod: 1, dex: 3, mnd: 2, cha: 0 }, //ranger(dual wield medium)
    { bod: 0, dex: 2, mnd: 2, cha: 2 }, //rogue(light)
    { bod: 2, dex: 2, mnd: 1, cha: 1 }, // swashbuckler(medium/shield)
    { bod: 3, dex: 3, mnd: 0, cha: 0 }, //monk
    { bod: 3, dex: 3, mnd: 0, cha: 0 }, //berserker
    { bod: 3, dex: 3, mnd: 0, cha: 0 }, //berserker(medium)
    { bod: 3, dex: 3, mnd: 0, cha: 0 }, //berserker(medium/dual wield)
    { bod: 4, dex: 2, mnd: 0, cha: 0 }, //berserker(heavy)
]

const formSchema = z.object({
    npcid: z.string().uuid(),
    npcname: z.string().min(2, { message: 'Npcname must be at least 2 characters.', }),
    npcdescription: z.string().optional(),
    npcrace: z.enum(['none', 'human', 'elf', 'half_elf', 'dwarf', 'half_dwarf', 'orc', 'half_orc', 'halfling', 'gnome', 'traiggoblin']),
    npctrait: z.enum(['No Traits Available', 'Bonus', 'Trueshot', 'Humbled', 'Adaptable', 'Golden Eye', 'Like a Dwarf', 'Under Open Skies', 'Art of the Club', 'Slave Master', 'Revered', 'Reviled', 'Quiet Quickstep', 'Second Breakfast', 'Trinket Master', "Moment's Respite", 'Scent Sniffer', 'Unfair Fighter']),
    npcclass: z.enum(['none', 'fighter(medium)', 'fighter(medium/sheild)', 'fighter(heavy)', 'scout(dual wield light)', 'ranger(medium/range)', 'ranger(dual wield medium)', 'rogue(light)', 'swashbuckler(medium/shield)', 'monk', 'berserker', 'berserker(medium)', 'berserker(medium/dual wield)', 'berserker(heavy)']),
    npcattributes: z.object({ bod: z.number(), dex: z.number(), mnd: z.number(), cha: z.number(), }),
})

export default function NPCForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            npcid: uuidv4(),
            npcname: '',
            npcdescription: '',
            npcrace: 'none',
            npctrait: 'No Traits Available',
            npcclass: 'none',
            npcattributes: { bod: 6, dex: 6, mnd: 6, cha: 6, },
        }
    })

    const [npcData, setNpcData] = useLocalStorage("npclist", "")
    const [raceChanged, setRaceChanged] = useState(false)
    const [classChanged, setClassChanged] = useState(false)
    const router = useRouter()
    const DEFAULT_ATTRIBUTES = { bod: 6, dex: 6, mnd: 6, cha: 6 }

    const adjustRaces = (selectedRace: string, selectedClass: string) => {
        const attributes = { ...DEFAULT_ATTRIBUTES }

        const totalRaces = Array(races.length).fill(false)

        const totalClasses = Array(classes.length).fill(false)

        const selectedRaceIndex = races.indexOf(selectedRace)

        const selectedClassIndex = classes.indexOf(selectedClass)

        races.forEach((race) => {
            if (race == selectedRace) {
                const racePoints = raceAttributes[selectedRaceIndex]
                attributes.bod += racePoints.bod
                attributes.dex += racePoints.dex
                attributes.mnd += racePoints.mnd
                attributes.cha += racePoints.cha
                totalRaces[selectedRaceIndex] = true
            }
        })

        if (selectedRaceIndex !== -1) {
            const racePoints = raceAttributes[selectedRaceIndex]
            attributes.bod += racePoints.bod
            attributes.dex += racePoints.dex
            attributes.mnd += racePoints.mnd
            attributes.cha += racePoints.cha
            totalRaces[selectedRaceIndex] = true
        } else {
            console.error(`Selected race not found: ${selectedRace}`)
            return attributes
        }

        classes.forEach((classvalue) => {
            if (classvalue == selectedClass) {
                const classPoints = classAttributes[selectedClassIndex]
                attributes.bod += classPoints.bod
                attributes.dex += classPoints.dex
                attributes.mnd += classPoints.mnd
                attributes.cha += classPoints.cha
                totalClasses[selectedClassIndex] = true
            }
        })

        if (selectedClassIndex !== -1) {
            const classPoints = classAttributes[selectedClassIndex]
            attributes.bod += classPoints.bod
            attributes.dex += classPoints.dex
            attributes.mnd += classPoints.mnd
            attributes.cha += classPoints.cha
            totalClasses[selectedClassIndex] = true
        } else {
            console.error(`Selected class not found: ${selectedClass}`)
            return attributes
        }

        totalRaces.forEach((selected, index) => {
            if (selected) {
                const racePoints = raceAttributes[index]
                attributes.bod -= racePoints.bod
                attributes.dex -= racePoints.dex
                attributes.mnd -= racePoints.mnd
                attributes.cha -= racePoints.cha
            }
        })

        totalClasses.forEach((selected, index) => {
            if (selected) {
                const classPoints = classAttributes[index]
                attributes.bod -= classPoints.bod
                attributes.dex -= classPoints.dex
                attributes.mnd -= classPoints.mnd
                attributes.cha -= classPoints.cha
            }
        })

        return attributes
    }

    useEffect(() => {
        const race = form.getValues('npcrace')
        const npcClass = form.getValues('npcclass')
        const attributes = adjustRaces(race, npcClass)
        form.setValue('npcattributes', attributes)
    }, [raceChanged, classChanged, form])

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const existingData = npcData
        const newData = [...existingData, values]
        setNpcData(newData)

        router.push('/')
        form.reset()
    }

    return (
        <Form {...form}>
            <form
                className='max-w-md w-full flex flex-col gap-4'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    control={form.control}
                    name='npcname'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Name</FormLabel>
                                <FormControl>
                                    <NPCName field={field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name='npcdescription'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Description</FormLabel>
                                <FormControl>
                                    <NPCDescription field={field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name='npcrace'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Race</FormLabel>
                                <FormControl>
                                    <NPCRace
                                        field={field}
                                        raceChanged={raceChanged}
                                        setRaceChanged={setRaceChanged}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name='npctrait'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Trait</FormLabel>
                                <FormControl>
                                    <NPCTrait
                                        field={field}
                                        form={form}
                                        raceChanged={raceChanged}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name='npcclass'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Class</FormLabel>
                                <FormControl>
                                    <NPCClass
                                        field={field}
                                        classChanged={classChanged}
                                        setClassChanged={setClassChanged}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <Separator />
                <FormField
                    control={form.control}
                    name='npcattributes'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className='font-bold'>Attributes</FormLabel>
                                <FormControl>
                                    <NPCAttributes
                                        form={form}
                                        field={field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <Separator />
                <FormLabel className='font-bold'>Gears</FormLabel>
                {/* <FormField
                    control={form.control}
                    name='npcdescription'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormControl>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                /> */}
                <Button type='submit' className='w-full'>Submit</Button>
            </form>
        </Form>
    )
}