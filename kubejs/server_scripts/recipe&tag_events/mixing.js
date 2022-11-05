ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mixing/';
    const recipes = [

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/steel'},
                {'tag': 'forge:ingots/osmium'},
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
                {'tag': 'forge:shards/nether_star'},
                {'tag': 'forge:shards/nether_star'},
                {'tag': 'forge:shards/nether_star'},
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
                {'item': 'minecraft:magma_cream'},
                {'tag': 'create:polished_rose_quartz'},
            ],
            
            results: [{'item': 'silentgear:crimson_steel_ingot'}],
            old_id: 'silentgear:crimson_steel_ingot',
            id: `${id_prefix}crimson_steel_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/netherite'},
                {'tag': 'forge:ingots/azure_silver'},
                {'item': 'undergarden:utheric_shard'},
                {'item': 'undergarden:utheric_shard'},
                {'item': 'undergarden:utheric_shard'},
                {'tag': 'forge:ingots/gold'},
            ],
            
            results: [{'item': 'silentgear:azure_electrum_ingot'}],
            old_id: 'silentgear:azure_electrum_ingot',
            id: `${id_prefix}azure_electrum_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'minecraft:ender_eye'},
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
                {'item': 'kubejs:infernal_essence'},
                {'item': 'kubejs:boss_essence'},
                {'item': 'ae2:quantum_entangled_singularity'},
                {'item': 'deeperdarker:heart_of_the_deep'},
                {'item': 'mekanism:pellet_antimatter'},
                {'item': 'alexsmobs:void_worm_eye'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'ars_nouveau:summon_focus'}
            ],
            
            results: [{'item': 'kubejs:impossible_compound'}],
            id: `${id_prefix}impossible_compound`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/copper'},
                {'tag': 'forge:ingots/tin'}
            ],
            
            results: [{'item': 'mekanism:ingot_bronze'}],
            id: `${id_prefix}bronze_ingot`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:magma_block'}
            ],
            
            results: [{'amount': 50, 'fluid': 'minecraft:lava'}],
            id: `${id_prefix}lava_from_magma`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'byg:all/ice'}
            ],
            
            results: [{'amount': 1000, 'fluid': 'minecraft:water'}],
            id: `${id_prefix}water_from_ice`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:snow_block'}
            ],
            
            results: [{'amount': 500, 'fluid': 'minecraft:water'}],
            id: `${id_prefix}water_from_snow`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:rotten_flesh'},
                {'item': 'minecraft:rotten_flesh'},
                {'item': 'minecraft:rotten_flesh'}
            ],
            
            results: [{'item': 'mekanism:bio_fuel'}],
            id: `${id_prefix}bio_fuel_from_mekanism`
        },

        {
            ingredients: [
                {'item': 'farmersdelight:rotten_tomato'},
                {'item': 'farmersdelight:rotten_tomato'},
                {'item': 'farmersdelight:rotten_tomato'}
            ],
            
            results: [{'item': 'mekanism:bio_fuel'}],
            id: `${id_prefix}bio_fuel_from_tomato`
        },

        {
            ingredients: [
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {
                    'amount': 1000,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                }
            ],
            
            results: [{'amount': 900, 'fluid': 'the_bumblezone:sugar_water_still'}],
            id: `${id_prefix}sugar_water_from_sugar`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/refined_obsidian'},
                {'tag': 'forge:ingots/steel'},
                {'item': 'twilightforest:raw_ironwood'},
                {'item': 'mekanism:hdpe_sheet'},
                {'item': 'mekanism:hdpe_sheet'},
                {
                    'amount': 1000,
                    'fluid': 'create:honey',
                    'nbt': {}
                }
            ],
            
            results: [{'item': 'silentcompat:raw_plasteel'}],
            id: `${id_prefix}plasteel_1`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/refined_obsidian'},
                {'tag': 'forge:ingots/steel'},
                {'item': 'twilightforest:raw_ironwood'},
                {'item': 'mekanism:hdpe_sheet'},
                {'item': 'mekanism:hdpe_sheet'},
                {
                    'amount': 1000,
                    'fluid': 'productivebees:honey',
                    'nbt': {}
                }
            ],
            
            results: [{'item': 'silentcompat:raw_plasteel'}],
            id: `${id_prefix}plasteel_2`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'ae2:matter_ball'},
                {'item': 'mekanism:pellet_plutonium'},
                {'item': 'mekanism:pellet_plutonium'},
                {'item': 'mekanism:pellet_plutonium'},
                {'item': 'minecraft:slime_block'},
                {
                    'amount': 500,
                    'fluid': 'minecraft:lava',
                    'nbt': {}
                }
            ],
            
            results: [{'item': 'gobber2:gobber2_globette'}, {'item': 'gobber2:gobber2_globette'}, {'item': 'gobber2:gobber2_globette'}],
            id: `${id_prefix}gobber2_glob`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'minecraft:magma_cream'},
                {'item': 'minecraft:magma_cream'},
                {'item': 'minecraft:magma_cream'},
                {'item': 'minecraft:netherite_scrap'},
                {
                    'amount': 500,
                    'fluid': 'mekanism:superheated_sodium',
                    'nbt': {}
                }
            ],
            
            results: [{'item': 'gobber2:gobber2_globette_nether'}, {'item': 'gobber2:gobber2_globette_nether'}, {'item': 'gobber2:gobber2_globette_nether'}],
            id: `${id_prefix}gobber2_globette_nether`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'tag': 'forge:shards/nether_star'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {
                    'amount': 1000,
                    'fluid': 'mekanism:uranium_hexafluoride',
                    'nbt': {}
                }
            ],
            
            results: [{'item': 'gobber2:gobber2_globette_end'}, {'item': 'gobber2:gobber2_globette_end'}, {'item': 'gobber2:gobber2_globette_end'}],
            id: `${id_prefix}gobber2_globette_end`
        },
    ];

    recipes.forEach((recipe) => {

        if (recipe.heatRequirement) {
            event.custom({
                type: 'create:mixing',
                heatRequirement: recipe.heatRequirement,
                ingredients: recipe.ingredients,
                results: recipe.results
            })
            .id(recipe.id)
        }
        else {
            event.custom({
                type: 'create:mixing',
                ingredients: recipe.ingredients,
                results: recipe.results
            })
            .id(recipe.id)
        }

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
    });
});