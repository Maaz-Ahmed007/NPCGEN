'use client'

import { Trash } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function DeleteCardBtn({
    npcId
}: {
    npcId: any
}) {
    const npcList = () => {
        const storedData = localStorage.getItem('npclist');
        return storedData ? JSON.parse(storedData) : [];
    }

    const npcData = npcList()
    const router = useRouter()

    const handleClick = () => {
        const npcs = npcData.filter((npc: any) => npc.npcid !== npcId)
        localStorage.setItem('npclist', JSON.stringify(npcs))

        router.refresh()
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    <Trash />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you Sure?</DialogTitle>
                    <DialogDescription>Once deleted it will be unrecoverable!</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose className="space-x-4">
                        <Button variant="destructive" onClick={handleClick}>Delete</Button>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}