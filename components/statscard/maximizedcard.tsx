import { Trash } from "lucide-react";

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import MaximizeBtn from "../maximizeBtn";

export default function MaximizedCard({
    npcName,
    npcDescription,
}: {
    npcName?: string
    npcDescription?: string
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
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
                        <Button
                            variant="destructive"
                        // onClick={() => { }}
                        ><Trash /></Button>

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