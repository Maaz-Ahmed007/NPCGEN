import { Textarea } from "@/components/ui/textarea"

export default function NPCDescription({
    field
}: {
    field: any
}) {
    return (
        <>
            <Textarea
                placeholder='Zoro is the best Swordsman in One Piece after Mihawks...'
                {...field}
            />
        </>
    )
}