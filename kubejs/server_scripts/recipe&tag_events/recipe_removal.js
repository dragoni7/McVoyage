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
		'mekanism:processing/steel/enriched_iron_to_dust',
		'ae2:facade/mekanism/steel_casing',
		'neapolitan:mixed:neapolitan_ice_cream_from_vanilla',
		'ae2:misc/tank_sky_stone',
		'productivebees:bottler/milk_bottle',
		'silentgear:elytra_blueprint',
		'a_man_with_plushies:plush_box_recipe',
		'a_man_with_plushies:plush_box_recipe_2',
		'ars_nouveau:wilden_summon_alt',
		'productivebees:centrifuge/ingots/honeycomb_steel_dust',
		'productivebees:centrifuge/ingots/honeycomb_netherite',
		'productivebees:centrifuge/ingots/honeycomb_refined_obsidian',
		'productivebees:create/mixing/ingots/honeycomb_soulsteel',
		'productivebees:create/mixing/ingots/honeycomb_netherite',
		'explorerscompass:explorers_compass'
	]

	event.remove({mod: 'immersive_armors'});

	recipes.forEach((recipe) => {
		event.remove({id: recipe})
	});
	
	blacklist.forEach((item) => {
		event.remove({output: item});
	});
})