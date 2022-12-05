// priority: 0
StartupEvents.registry('item', event => {
	const items = [
		'infernal_essence', 
		'boss_essence', 
		'infused_mechanism', 
		'control_circuit_base', 
		'impossible_compound',
		'generic_lootcrate',
		'unique_lootcrate',
		'premium_lootcrate',
		'masticator_bait',
		'bit',
		'tier_1_arcanist_upgrade',
		'tier_1_sorceror_upgrade',
		'tier_1_battlemage_upgrade',
		'tier_1_elementalist_upgrade',
		'tier_2_arcanist_upgrade',
		'tier_2_sorceror_upgrade',
		'tier_2_battlemage_upgrade',
		'tier_2_elementalist_upgrade',
		'tier_3_arcanist_upgrade',
		'tier_3_sorceror_upgrade',
		'tier_3_battlemage_upgrade',
		'tier_3_elementalist_upgrade',
	];

	items.forEach((item) => {
		event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
	})
})

