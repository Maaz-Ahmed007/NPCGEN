'use client'

import useLocalStorage from "@/lib/localStorage"

import StatsCard from "@/components/statscard/statscard"

export default function Home() {
	const defaultNpc = [
		{
			"npcid": "480ed448-283d-40d8-9147-a8adb5c61d9",
			"npcname": "Zorro",
			"npcdescription": "",
			"npcrace": "human",
			"npctrait": "Bonus",
			"npcclass": "berserker(medium)",
			"npcattributes": {
				"bod": 6,
				"dex": 7,
				"mnd": 7,
				"cha": 6
			}
		},
		{
			"npcid": "480ed44-283d-40d8-9147-a8adb5c61d9",
			"npcname": "Bonnie",
			"npcdescription": "",
			"npcrace": "elf",
			"npctrait": "Trueshot",
			"npcclass": "berserker(medium)",
			"npcattributes": {
				"bod": 8,
				"dex": 8,
				"mnd": 8,
				"cha": 8
			}
		},
		{
			"npcid": "480ed44-283d-40d8-9147-a8adb5c61d9",
			"npcname": "Andrew",
			"npcdescription": "",
			"npcrace": "traiggoblin",
			"npctrait": "",
			"npcclass": "berserker(medium)",
			"npcattributes": {
				"bod": 9,
				"dex": 9,
				"mnd": 7,
				"cha": 5
			}
		},
	]
	const [npcData, setNpcData] = useLocalStorage("npclist", "")
	setNpcData(defaultNpc)
	return (
		<>
			{npcData ? (
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
			) : (
				<div className="container flex flex-wrap -mx-4 gap-x-4 gap-y-10 pt-10 justify-center">
					Your data is loading and in case you have no data please create some...
				</div>
			)
			}
		</>
	)
}
