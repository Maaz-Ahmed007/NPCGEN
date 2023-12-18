import { Button } from "./ui/button";

import { FileDown } from "lucide-react";

export default function DownloadCardBtn({
    npcId
}: {
    npcId: any
}) {
    const npcList = () => {
        const storedData = localStorage.getItem('npclist');
        return storedData ? JSON.parse(storedData) : [];
    }

    const npcData = npcList()

    const handleClick = () => {
        const npc = npcData.filter((npc: any) => npc.npcid === npcId)

        if (npc) {
            const jsonData = JSON.stringify(npc, null, 2)

            const blob = new Blob([jsonData], { type: 'application/json' })

            const downloadLink = document.createElement('a')
            downloadLink.href = URL.createObjectURL(blob)
            downloadLink.download = `npc_${npc.npcname}_${npc.npcid}.txt`

            document.body.appendChild(downloadLink)

            downloadLink.click()

            document.body.removeChild(downloadLink)
        }
    }
    return (
        <Button onClick={handleClick} >
            <FileDown />
        </Button>
    )
}