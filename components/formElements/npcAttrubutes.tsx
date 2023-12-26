import { Plus, Minus } from "lucide-react"

export default function NPCAttributes({
    field,
    form
}: {
    field: any
    form: any
}) {
    const attributes = form.getValues('npcattributes')

    const handleIncrementBod = () => {
        attributes.bod += 1
        form.setValue('npcattributes', attributes)
    }

    const handleDecrementBod = () => {
        attributes.bod -= 1
        form.setValue('npcattributes', attributes)
    }
    const handleIncrementDex = () => {
        attributes.dex += 1
        form.setValue('npcattributes', attributes)
    }

    const handleDecrementDex = () => {
        attributes.dex -= 1
        form.setValue('npcattributes', attributes)
    }
    const handleIncrementMnd = () => {
        attributes.mnd += 1
        form.setValue('npcattributes', attributes)
    }

    const handleDecrementMnd = () => {
        attributes.mnd -= 1
        form.setValue('npcattributes', attributes)
    }
    const handleIncrementCha = () => {
        attributes.cha += 1
        form.setValue('npcattributes', attributes)
    }

    const handleDecrementCha = () => {
        attributes.cha -= 1
        form.setValue('npcattributes', attributes)
    }

    return (
        <>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                    <div className="flex space-x-2">
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">BOD</p>
                            <div className="flex items-center">
                                <button type="button" onClick={() => handleDecrementBod()}><Minus /></button>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                    {field.value.bod}
                                </span>
                                <button type="button" onClick={() => handleIncrementBod()}><Plus /></button>
                            </div>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                            <div className="flex items-center">
                                <button type="button" onClick={() => handleDecrementDex()}><Minus /></button>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                    {field.value.dex}
                                </span>
                                <button type="button" onClick={() => handleIncrementDex()}><Plus /></button>
                            </div>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">MND</p>
                            <div className="flex items-center">
                                <button type="button" onClick={() => handleDecrementMnd()}><Minus /></button>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                    {field.value.mnd}
                                </span>
                                <button type="button" onClick={() => handleIncrementMnd()}><Plus /></button>
                            </div>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">CHA</p>
                            <div className="flex items-center">
                                <button type="button" onClick={() => handleDecrementCha()}><Minus /></button>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                    {field.value.cha}
                                </span>
                                <button type="button" onClick={() => handleIncrementCha()}><Plus /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}