import MaximizedCard from "@/components/statscard/maximizedcard"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function StatsCard({
    npcId,
    npcName,
    npcDescription,
    npcRace,
    npcTrait,
    npcAttributes
}: {
    npcId: any
    npcName: string
    npcDescription?: string
    npcRace: string
    npcTrait: string
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
                    {npcDescription ? npcDescription : 'There is no description for this NPC.'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Race: <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold capitalize">{npcRace}</span></p>
                <p>Traits: <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold capitalize">{npcTrait}</span></p>
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
                    npcTrait={npcTrait}
                    npcAttributes={npcAttributes}
                />
            </CardFooter>
        </Card>
    )
}