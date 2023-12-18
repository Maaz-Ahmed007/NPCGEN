import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import MaximizedCard from "./maximizedcard"

export default function StatsCard({
    npcId,
    npcName,
    npcDescription,
    npcRace,
    npcAttributes
}: {
    npcId: any
    npcName: string
    npcDescription?: string
    npcRace: string
    npcAttributes: {
        bod: number
        dex: number
        mnd: number
        cha: number
    }
}) {
    return (
        <Card className="w-[300px] md:w-[280px]">
            <CardHeader>
                <CardTitle>{npcName ? npcName : 'NPC Name'}</CardTitle>
                <CardDescription>
                    {npcDescription ? npcDescription : 'Stats Card Description here...'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Race: <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{npcRace}</span></p>
                <p>Class: <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">Not yet ready</span></p>
            </CardContent>
            <CardFooter>
                {/* Attributes */}
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-base font-medium leading-none">
                            Attributes
                        </p>
                        <div className="flex space-x-2">
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">BOD</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{npcAttributes.bod}</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{npcAttributes.dex}</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">MND</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{npcAttributes.mnd}</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">CHA</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">{npcAttributes.cha}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <MaximizedCard
                    npcId={npcId}
                    npcName={npcName}
                    npcDescription={npcDescription}
                    npcRace={npcRace}
                    npcAttributes={npcAttributes}
                />
            </CardFooter>
        </Card>
    )
}