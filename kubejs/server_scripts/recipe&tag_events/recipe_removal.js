//priority: 998
ServerEvents.recipes(event => {
	const recipes = [
		'silentgear:compounding/metal/custom_ingot.high_carbon_steel',
		'ars_nouveau:archmage_spell_book_upgrade',
		'silentgear:crimson_iron_dust',
		'silentgear:crimson_steel_dust',
		'silentgear:blaze_gold_dust',
		'silentgear:azure_silver_dust',
		'silentgear:azure_electrum_dust',
		'silentgear:tyrian_steel_dust',
		'create:crushing/obsidian',
		'delightful:blasting/green_tea_leaf',
		'delightful:smelting/green_tea_leaf',
		'byg:brim_powder_from_stonecutter',
		'ae2:inscriber/certus_quartz_dust',
		'ae2:inscriber/ender_dust',
		'ae2:inscriber/fluix_dust',
		'ae2:inscriber/sky_stone_dust',
		'mekanism:processing/steel/enriched_iron_to_dust',
		'ae2:misc/tank_sky_stone',
		'silentgear:elytra_blueprint',
		'ars_nouveau:wilden_summon_alt',
		'productivebees:centrifuge/ingots/honeycomb_steel_dust',
		'productivebees:centrifuge/ingots/honeycomb_netherite',
		'productivebees:centrifuge/ingots/honeycomb_refined_obsidian',
		'productivebees:create/mixing/ingots/honeycomb_refined_obsidian',
		'productivebees:create/mixing/ingots/honeycomb_soulsteel',
		'productivebees:create/mixing/ingots/honeycomb_netherite',
		'productivebees:create/mixing/ae2/honeycomb_silicon',
		'productivebees:centrifuge/ae2/honeycomb_silicon',
		'productivebees:centrifuge/gobber/honeycomb_gobber',
		'productivebees:centrifuge/gobber/honeycomb_nether_gobber',
		'productivebees:centrifuge/gobber/honeycomb_end_gobber',
		'explorerscompass:explorers_compass',
		'mekanism:enriching/conversion/obsidian_to_obsidian_dust',
		'silentgear:bronze_ingot',
		'ae2:blasting/silicon_from_certus_quartz_dust',
		'mekanism:enriching/hdpe_sheet',
		'mekanism:steel_casing',
		'jaopca:mekanism.ore_to_dust.crimson_iron',
		'jaopca:mekanism.raw_storage_block_to_dust.crimson_iron',
		'jaopca:mekanism.raw_material_to_dust.crimson_iron',
		'jaopca:mekanism.ore_to_dust.azure_silver',
		'jaopca:mekanism.raw_storage_block_to_dust.azure_silver',
		'jaopca:mekanism.raw_material_to_dust.azure_silver',
		'jaopca:mekanism.ore_to_dust.cloggrum',
		'jaopca:mekanism.raw_storage_block_to_dust.cloggrum',
		'jaopca:mekanism.raw_material_to_dust.cloggrum',
		'jaopca:mekanism.ore_to_dust.froststeel',
		'jaopca:mekanism.raw_storage_block_to_dust.froststeel',
		'jaopca:mekanism.raw_material_to_dust.froststeel',
		'jaopca:mekanism.ore_to_dust.zinc',
		'jaopca:mekanism.raw_storage_block_to_dust.zinc',
		'jaopca:mekanism.raw_material_to_dust.zinc',
		'jaopca:mekanism.ore_to_dust.ironwood',
		'jaopca:mekanism.ore_to_dust.knightmetal',
		'jaopca:mekanism.ore_to_dust.pendorite',
		'jaopca:mekanism.ore_to_dust.regalium',
		'jaopca:mekanism.ore_to_dust.utherium',
		'gobber2:gobber2_ore_deepslate_blasting',
		'gobber2:gobber2_ore_gobber_blasting',
		'gobber2:gobber2_ore_gobber_smelting',
		'gobber2:gobber2_ore_deepslate_gobber_blasting',
		'gobber2:gobber2_ore_deepslate_gobber_smelting',
		'gobber2:gobber2_ore_deepslate_smelting',
		'gobber2:gobber2_ore_nether_blasting',
		'gobber2:gobber2_ore_nether_smelting',
		'gobber2:gobber2_ore_end_blasting',
		'gobber2:gobber2_ore_end_smelting',
		'silentgear:bracelet_blueprint_alt',
		'industrialforegoing:laser_drill_fluid/ether_gas',

		'neapolitan:mixed:neapolitan_ice_cream_from_vanilla',
		'croptopia:hashed_brown',
		'croptopia:chocolate',
		'croptopia:melon_juice',
		'croptopia:cheeseburger',
		'farmersdelight:wheat_dough_from_water',
		'croptopia:dough',
		'farmersdelight:wheat_dough_from_eggs',
		'createcafe:crafting/oreo_dough_shapless',
		'croptopia:shaped_bacon',
		'farmersdelight:bacon_sandwhich',
		'croptopia:soy_milk',
		'croptopia:shaped_milk_bottle',
		'croptopia:pineapple_juice',
		'croptopia:apple_pie',
		'croptopia:shaped_chocolate_ice_cream',
		'croptopia:chocolate_milkshake',
		'croptopia:strawberry_ice_cream',
		'croptopia:vanilla_ice_cream',
		'croptopia:hamburger'
	]

	recipes.forEach((recipe) => {
		event.remove({id: recipe})
	});
	
	blacklist.forEach((item) => {
		event.remove({output: item});
	});

	event.remove({mod: 'immersive_armors'});

	materials.forEach((material) => {
		event.remove({id: `mekanism:processing/${material.name}/dust/from_ore`})
		event.remove({id: `mekanism:processing/${material.name}/dust/from_raw_block`})
		event.remove({id: `mekanism:processing/${material.name}/dust/from_raw_ore`})
	});
})