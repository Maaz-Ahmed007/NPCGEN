'use client'

import { useState } from 'react'
import { FileUp } from "lucide-react"
import useLocalStorage from '@/lib/localStorage';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';

export default function UploadCardBtn() {
    const [npcData, setNpcData] = useLocalStorage("npclist", "")
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }

    const handleFileUpload = () => {
        if (selectedFile) {
            const reader = new FileReader()

            reader.onload = (e: any) => {
                const existingData = npcData
                const newData = [...existingData, e.target.value]
                setNpcData(newData)

                // Optionally, you can reset the selectedFile state
                setSelectedFile(null)
            }

            reader.readAsText(selectedFile)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant='outline'>Upload NPC</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Upload your NPC</DialogTitle>
                    <DialogDescription>
                        Upload a (.JSON) file that contains this format and do not make mistakes or it will cause errors in uploading or displaying your npc.
                    </DialogDescription>
                </DialogHeader>
                <Textarea
                    className='overflow-hidden cursor-text pb-8 text-base '
                    value='
                    {
                        "npcid": "",
                        "npcname": "",
                        "npcdescription": "",
                        "npcrace": "",
                        "npcattributes": {"bod": 1, "dex": 1, "mnd": 1, "cha": 1}
                      }
                        '
                    disabled />
                <DialogFooter>
                    <Input type="file" accept=".json" onChange={handleFileChange} />
                    {selectedFile ? (
                        <Button onClick={handleFileUpload}>
                            <FileUp />
                        </Button>
                    ) : (
                        <Button onClick={handleFileUpload} disabled>
                            <FileUp />
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
