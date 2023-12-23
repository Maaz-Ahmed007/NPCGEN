import { Maximize } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function MaximizeBtn() {
    return (
        <Button
            className="mt-auto ml-auto p-2"
            variant='ghost'
            size='sm'
            title="Maximize the card"
        >
            <Maximize />
        </Button>
    )
}