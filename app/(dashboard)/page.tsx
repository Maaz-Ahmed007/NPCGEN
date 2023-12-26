'use client'

import useLocalStorage from "@/lib/localStorage"

import StatsCard from "@/components/statscard/statscard"

export default function Home() {
	const [npcData, setNpcData] = useLocalStorage("npclist", "")

	return (
		<>
			<div className="container flex flex-wrap -mx-4 gap-x-4 gap-y-10 pt-10 justify-center">
				{npcData.map((npc: any) => (
					<StatsCard
						key={npc.npcid}
						npcId={npc.npcid}
						npcName={npc.npcname}
						npcDescription={npc.npcdescription}
						npcRace={npc.npcrace}
						npcTrait={npc.npctrait}
						npcClass={npc.npcclass}
						npcAttributes={npc.npcattributes}
					/>
				))}
			</div>
		</>
	)
}
