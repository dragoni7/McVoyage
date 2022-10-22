ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mixing/';
    const recipes = [

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/steel'},
                {'item': 'mekanism:enriched_carbon'}, 
            ],
            
            results: [{'item': 'silentgear:custom_ingot', 'nbt': '{Material:"high_carbon_steel"}'}],
            old_id: 'silentgear:compounding/metal/custom_ingot.high_carbon_steel',
            id: `${id_prefix}high_carbon_steel`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/crimson_steel'},
                {'tag': 'forge:ingots/netherite'},
                {'item': 'silentgear:crushed_shulker_shell'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'minecraft:echo_shard'}
            ],
            
            results: [{'item': 'silentgear:tyrian_steel_ingot'}],
            old_id: 'silentgear:compounding/metal/tyrian_steel_ingot',
            id: `${id_prefix}tyrian_steel_ingot`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/steel'},
                {'tag': 'forge:ingots/fiery'},
                {'tag': 'forge:ingots/crimson_iron'},
                {'item': 'minecraft:magma_cream'}
            ],
            
            results: [{'item': 'silentgear:crimson_steel_ingot'}],
            old_id: 'silentgear:crimson_steel_ingot',
            id: `${id_prefix}crimson_steel_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'silentgear:nether_star_fragment'},
                {'tag': 'forge:ingots/azure_silver'},
                {'tag': 'forge:ingots/utherium'},
                {'tag': 'forge:dusts/ender_pearl'}
            ],
            
            results: [{'item': 'silentgear:azure_electrum_ingot'}],
            old_id: 'silentgear:azure_electrum_ingot',
            id: `${id_prefix}azure_electrum_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ender_pearls'},
                {'tag': 'forge:dusts/fluix'},
                {'tag': 'forge:dusts/fluix'},
                {'tag': 'forge:dusts/fluix'},
                {'tag': 'forge:dusts/refined_obsidian'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
            ],
            
            results: [{'item': 'ae2:fluix_pearl'}],
            old_id: 'ae2:misc/fluixpearl',
            id: `${id_prefix}fluix_pearl`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'ae2:matter_ball'},
                {'item': 'ae2:matter_ball'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:boss_essence'},
                {'item': 'kubejs:boss_essence'},
                {'item': 'ae2:quantum_entangled_singularity'},
                {'item': 'ae2:quantum_entangled_singularity'},
                {'item': 'deeperdarker:heart_of_the_deep'},
                {'item': 'deeperdarker:heart_of_the_deep'},
                {'item': 'mekanism:pellet_antimatter'},
                {'item': 'mekanism:pellet_antimatter'},
                {'item': 'alexsmobs:void_worm_eye'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'ars_nouveau:summon_focus'},
                {'item': 'ars_nouveau:summon_focus'}
            ],
            
            results: [{'item': 'kubejs:impossible_compound'}],
            id: `${id_prefix}impossible_compound`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:infernal_essence'},
                {'item': 'deeperdarker:sculk_stone'},
                {'item': 'deeperdarker:sculk_stone'},
                {'item': 'deeperdarker:sculk_stone'},
                {'item': 'deeperdarker:sculk_stone'},
                {'item': 'minecraft:sculk_sensor'},
                {'item': 'alexsmobs:mimicream'},
            ],
            
            results: [{'item': 'minecraft:echo_shard'}],
            id: `${id_prefix}echo_shard`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:mixing',
            heatRequirement: recipe.heatRequirement,
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    });
});