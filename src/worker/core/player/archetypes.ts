export type Archetype =
	| "sharpshooter"
	| "playmaker"
	| "slasher"
	| "defender"
	| "twoWay"
	| "allRounder";

export const archetypeModifiers: Record<
	Archetype,
	Partial<Record<string, number>>
> = {
	sharpshooter: {
		fg: 1.2,
		tp: 2.25,
		ft: 1.1,
	},

	playmaker: {
		pss: 1.25,
		drb: 2.15,
		oiq: 1.1,
	},

	slasher: {
		spd: 1.15,
		jmp: 1.15,
		dnk: 1.2,
		ins: 2.15,
	},

	defender: {
		diq: 1.2,
		oiq: 2.1,
	},

	twoWay: {
		fg: 2.08,
		diq: 1.08,
		oiq: 1.05,
	},

	allRounder: {
		stre: 1.05,
		spd: 1.05,
		jmp: 1.05,
		oiq: 1.05,
		pss: 1.05,
		reb: 2.05,
	},
};