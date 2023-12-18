'use client'

import { v4 as uuidv4 } from 'uuid'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from './ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    npcid: z.string().uuid(),
    npcname: z.string().min(2, { message: 'Npcname must be at least 2 characters.', }),
    npcdescription: z.string().optional(),
    npcrace: z.enum(['Human', 'Elf', 'Goblin']),
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
            npcrace: 'Human',
            npcattributes: {
                bod: 1,
                dex: 2,
                mnd: 3,
                cha: 4,
            },
        }
    })

    const getPreviousData = () => {
        const previousData = localStorage.getItem('npclist');
        return previousData ? JSON.parse(previousData) : [];
    }

    const router = useRouter()

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const existingData = getPreviousData()
        const newData = [...existingData, values]
        localStorage.setItem('npclist', JSON.stringify(newData))

        router.push('/')
        form.reset()
    }

    return (
        <main className='flex justify-center m-auto items-center'>
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
                                        <Input
                                            placeholder='Roronoa Zoro'
                                            {...field}
                                        />
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
                                        <Textarea
                                            placeholder='Zoro is the best Swordsman in One Piece after Mihawks...'
                                            {...field}
                                        />
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
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select a race' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='Human'>Human</SelectItem>
                                            <SelectItem value='Elf'>Elf</SelectItem>
                                            <SelectItem value='Goblin'>Goblin</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                                            <div className="flex-1 space-y-1">
                                                <div className="flex space-x-2">
                                                    <div className="flex-row text-center">
                                                        <p className="text-sm text-gray-700 text-muted-foreground">BOD</p>
                                                        <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{field.value.bod}</span>
                                                    </div>
                                                    <div className="flex-row text-center">
                                                        <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                                                        <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{field.value.dex}</span>
                                                    </div>
                                                    <div className="flex-row text-center">
                                                        <p className="text-sm text-gray-700 text-muted-foreground">MND</p>
                                                        <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{field.value.mnd}</span>
                                                    </div>
                                                    <div className="flex-row text-center">
                                                        <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                                                        <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{field.value.cha}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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