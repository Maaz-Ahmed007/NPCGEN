'use client'

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { names } from '@/lib/nameData'

export default function NPCName({ field }: { field: any }) {
    const [randomName, setRandomName] = useState('')

    const generateRandomName = () => {
        const randomIndex = Math.floor(Math.random() * names.length)
        const selectedName = names[randomIndex]
        setRandomName(selectedName)

        field.onChange(selectedName)
    }

    return (
        <>
            <div className="flex">
                <Input
                    placeholder="Name"
                    {...field}
                    value={randomName}
                />
                <Button type='button' onClick={generateRandomName}>Random</Button>
            </div>
        </>
    )
}