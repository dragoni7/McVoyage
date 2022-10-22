// priority: 0
StartupEvents.registry('block', event => {
	const blocks = [
		'steel_casing',
        'obsidian_casing',
        'azure_casing'
	];

	blocks.forEach((block) => {
		event.create(block)
		.material('metal')
		.hardness(1.0)
		.tagBlock('create:casing')
	})
})