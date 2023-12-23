'use client'

import * as z from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
import NPCDistributeAttributePoints from '@/lib/npcDistributeAttributePoints'

const formSchema = z.object({
    npcid: z.string().uuid(),
    npcname: z.string().min(2, { message: 'Npcname must be at least 2 characters.', }),
    npcdescription: z.string().optional(),
    npcrace: z.enum(['default', 'human', 'elf', 'half elf', 'dwarf', 'half dwarf', 'orc', 'half orc', 'halfling', 'gnome', 'traiggoblin']),
    npcattributes: z.object({
        bod: z.number(),
        dex: z.number(),
        mnd: z.number(),
        cha: z.number(),
    }),
})

export default function NPCForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            npcid: uuidv4(),
            npcname: '',
            npcdescription: '',
            npcrace: 'default',
            npcattributes: {
                bod: 6,
                dex: 6,
                mnd: 6,
                cha: 6,
            },
        }
    })

    const [previousRace, setPreviousRace] = useState<string | null>(null)

    const getPreviousData = () => {
        const previousData = localStorage.getItem('npclist');
        return previousData ? JSON.parse(previousData) : [];
    }

    const router = useRouter()

    const handleAttributeSystem = (race: any) => {

    }

    useEffect(() => {
        const race = form.getValues('npcrace')
        const { bod, dex, mnd, cha } = form.getValues('npcattributes')
        const returnAttributes = NPCDistributeAttributePoints(race, bod, dex, mnd, cha)

    }, [form.getValues('npcrace')])

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const existingData = getPreviousData()
        const newData = [...existingData, values]
        localStorage.setItem('npclist', JSON.stringify(newData))

        router.push('/')
        form.reset()
    }

    return (
        <main className='flex justify-center m-auto pt-8 items-center'>
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
                                    <FormLabel>NPC Name</FormLabel>
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
                                    <FormLabel>Description</FormLabel>
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
                                    <FormLabel>Race</FormLabel>
                                    <FormControl>
                                        <NPCRace field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='npcattributes'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Attributes</FormLabel>
                                    <FormControl>
                                        <NPCAttributes field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <Button type='submit' className='w-full'>Submit</Button>
                </form>
            </Form>
        </main>
    )
}