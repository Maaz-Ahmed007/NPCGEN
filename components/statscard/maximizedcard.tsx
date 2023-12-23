import MaximizeBtn from "@/components/maximizeBtn";
import DeleteCardBtn from "@/components/deleteCardBtn";
import DownloadCardBtn from "@/components/downloadCardBtn";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function MaximizedCard({
    npcId,
    npcName,
    npcDescription,
    npcRace,
    npcAttributes
}: {
    npcId: any
    npcName: string
    npcDescription?: string
    npcRace: string
    npcAttributes: {
        bod: number
        dex: number
        mnd: number
        cha: number
    }
}) {
    return (
        <Dialog>
            <DialogTrigger>
                <MaximizeBtn />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit NPC CARD</DialogTitle>
                    <DialogDescription>
                        NPC description and data is here...
                    </DialogDescription>
                </DialogHeader>
                {/* Data here */}
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input
                            id="name"
                            defaultValue={npcName ? npcName : "Npc Name"}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Input
                            id="description"
                            defaultValue={npcDescription ? npcDescription : "Npc Description"}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex justify-end gap-4">
                        <DownloadCardBtn npcId={npcId} />
                        <DeleteCardBtn npcId={npcId} />

                        <DialogClose className="flex gap-4">
                            <Button type="submit">Save changes</Button>
                            <Button type="button" variant="outline">Close</Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}