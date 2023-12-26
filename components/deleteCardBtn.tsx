import useLocalStorage from "@/lib/localStorage"

import { Trash } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DeleteCardBtn({
    npcId
}: {
    npcId: any
}) {
    const [npcData, setNpcData] = useLocalStorage("npclist", "")

    const handleClick = () => {
        const npcs = npcData.filter((npc: any) => npc.npcid !== npcId)
        setNpcData(npcs)
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
                    <Button variant="destructive" onClick={handleClick}>Delete</Button>
                    <Button variant="outline">Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}