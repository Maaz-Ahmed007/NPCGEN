'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from "./ui/button"
import { FileUp } from "lucide-react"
import { Input } from "./ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "./ui/dialog";
import { Textarea } from './ui/textarea';

export default function UploadCardBtn() {
    const [selectedFile, setSelectedFile] = useState(null)
    const router = useRouter()

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }

    const getPreviousData = () => {
        const previousData = localStorage.getItem('npclist');
        return previousData ? JSON.parse(previousData) : [];
    }

    const handleFileUpload = () => {
        router.refresh()
        if (selectedFile) {
            const reader = new FileReader()

            reader.onload = (e: any) => {
                try {
                    // Parse the JSON data from the uploaded file
                    const npcData = JSON.parse(e.target.result)

                    // Get existing data from local storage
                    const existingData = getPreviousData()

                    // Add the new NPC data to the existing data
                    const newData = [...existingData, npcData]

                    // Save the updated data to local storage
                    localStorage.setItem('npclist', JSON.stringify(newData))

                    // Optionally, you can reset the selectedFile state
                    setSelectedFile(null)
                } catch (error) {
                    console.error('Error parsing JSON:', error)
                }
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
                        Upload a '.JSON' file that contains this format and do not make mistakes or it will cause errors in uploading or displaying your npc.
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
