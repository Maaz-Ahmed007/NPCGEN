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
import { stringify } from "querystring";


export default function MaximizedCard({
    npcId,
    npcName,
    npcDescription,
    npcRace,
    npcTrait,
    npcAttributes
}: {
    npcId: any
    npcName: string
    npcDescription?: string
    npcRace: string
    npcTrait: string
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
                    <DialogTitle>Edit {npcName} CARD</DialogTitle>
                    <DialogDescription>
                        {npcDescription ? npcDescription : 'There is no description for this NPC.'}
                    </DialogDescription>
                </DialogHeader>
                {/* Data here */}
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name:</Label>
                        <Input
                            id="name"
                            defaultValue={npcName ? npcName : "Npc Name"}
                            className="col-span-3 capitalize"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="race" className="text-right">Race:</Label>
                        <Input
                            id="race"
                            defaultValue={npcRace ? npcRace : "Npc Race None"}
                            className="col-span-3 capitalize"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="trait" className="text-right">Trait:</Label>
                        <Input
                            id="trait"
                            defaultValue={npcTrait ? npcTrait : "Npc Trait None"}
                            className="col-span-3 capitalize"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="attributes" className="text-right">Attributes:</Label>
                        <Input
                            id="attributes"
                            defaultValue={`BOD:${npcAttributes.bod} DEX:${npcAttributes.dex} MND:${npcAttributes.mnd} CHA:${npcAttributes.cha}`}
                            className="col-span-3"
                            disabled
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