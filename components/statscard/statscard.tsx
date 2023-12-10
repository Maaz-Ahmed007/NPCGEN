import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import MaximizedCard from "./maximizedcard";

export default function StatsCard({
    npcName,
    npcDescription,
}: {
    npcName?: string
    npcDescription?: string
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
                <p>Stats Card Content here... like race, class, traits, gears, etc.</p>
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
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">16</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">MND</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">16</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">CHA</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">16</span>
                            </div>
                            <div className="flex-row text-center">
                                <p className="text-sm text-gray-700 text-muted-foreground">DEX</p>
                                <span className="text-sm rounded-md border px-1 text-gray-700 border-gray-600 bg-gray-100 font-bold">16</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Maximize Btn */}
                <MaximizedCard npcName={npcName} npcDescription={npcDescription} />
            </CardFooter>
        </Card>
    )
}