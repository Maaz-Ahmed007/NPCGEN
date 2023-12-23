export default function NPCAttributes({
    field
}: {
    field: any
}) {
    return (
        <>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                    <div className="flex space-x-2">
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">BOD</p>
                            <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                {field.value.bod}
                            </span>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                            <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                {field.value.dex}
                            </span>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">MND</p>
                            <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                {field.value.mnd}
                            </span>
                        </div>
                        <div className="flex-row text-center">
                            <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                            <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">
                                {field.value.cha}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}