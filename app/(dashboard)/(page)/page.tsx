'use client'

import Navigation from "@/components/navigation/navigation"
import StatsCard from "@/components/statscard/statscard"
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function Home() {
	const [npcData, setNpcData] = useState([])

	useEffect(() => {
		const storedData = localStorage.getItem('npclist')
		setNpcData(storedData ? JSON.parse(storedData) : [])
	}, [])

	return (
		<>
			<Navigation />
			{npcData.length ? (
				<div className="container flex flex-wrap -mx-4 gap-x-4 gap-y-10 pt-10 justify-center">
					{npcData.map((npc: any) => (
						<StatsCard
							key={npc.npcid}
							npcId={npc.npcid}
							npcName={npc.npcname}
							npcDescription={npc.npcdescription}
							npcRace={npc.npcrace}
							npcAttributes={npc.npcattributes}
						/>
					))}
				</div>
			) : (
				<div className="container flex -mx-4 pt-20 justify-center">
					<Label>There is no NPC to display, to display you have to create or add one.</Label>
				</div>
			)}
		</>
	)
}
