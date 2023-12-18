import FormCancelBtn from "../formCancelBtn";
import NPCForm from "../npcForm";
import { Button } from "../ui/button";

export default function Section1({ moveNext }: { moveNext: () => void }) {
    return (
        <>
            <div>Form Section 1</div>
            <NPCForm />
            <footer className="flex space-x-4">
                {/* <FormCancelBtn /> */}
                <Button onClick={moveNext}>Next</Button>
            </footer>
        </>
    )
}