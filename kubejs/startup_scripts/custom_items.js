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
		'masticator_bait'
	];

	items.forEach((item) => {
		event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
	})
})

