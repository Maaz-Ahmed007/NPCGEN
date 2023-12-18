'use client'

import { Button } from "../ui/button";

export default function Section2({ movePrevious }: { movePrevious: () => void }) {
    return (
        <>
            <div>Form Section 2</div>
            <Button onClick={movePrevious}>Previous</Button>
        </>
    )
}