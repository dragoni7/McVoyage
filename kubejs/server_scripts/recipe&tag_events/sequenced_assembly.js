ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/sequential_assembly/';
    const recipes = [

        {
            ingredient: [
                {'item': 'mekanism:basic_control_circuit'}
            ],
            loops: 2,
            results: [{'item': 'mekanism:advanced_control_circuit'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'mekanism:basic_control_circuit'},
                    {'tag': 'mekanism:alloys/infused'}
                ],
                'results': [
                    {'item': 'mekanism:basic_control_circuit'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:basic_control_circuit'},
                        {'item': 'create:electron_tube'}
                    ],
                    'results': [
                        {'item': 'mekanism:basic_control_circuit'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:basic_control_circuit'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'mekanism:basic_control_circuit'}
                ]},
                ],
            transitionalItem: {'item': 'mekanism:basic_control_circuit'},
            old_id: 'mekanism:control_circuit/advanced',
            id: `${id_prefix}advanced_control_circuit`
        },

        {
            ingredient: [
                {'item': 'mekanism:advanced_control_circuit'}
            ],
            loops: 2,
            results: [{'item': 'mekanism:elite_control_circuit'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'mekanism:advanced_control_circuit'},
                    {'tag': 'mekanism:alloys/reinforced'}
                ],
                'results': [
                    {'item': 'mekanism:advanced_control_circuit'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:advanced_control_circuit'},
                        {'item': 'create:precision_mechanism'}
                    ],
                    'results': [
                        {'item': 'mekanism:advanced_control_circuit'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:advanced_control_circuit'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'mekanism:advanced_control_circuit'}
                ]},
                ],
            transitionalItem: {'item': 'mekanism:advanced_control_circuit'},
            old_id: 'mekanism:control_circuit/elite',
            id: `${id_prefix}elite_control_circuit`
        },

        {
            ingredient: [
                {'item': 'mekanism:elite_control_circuit'}
            ],
            loops: 2,
            results: [{'item': 'mekanism:ultimate_control_circuit'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'mekanism:elite_control_circuit'},
                    {'tag': 'mekanism:alloys/atomic'}
                ],
                'results': [
                    {'item': 'mekanism:elite_control_circuit'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:elite_control_circuit'},
                        {'tag': 'forge:ingots/azure_silver'}
                    ],
                    'results': [
                        {'item': 'mekanism:elite_control_circuit'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:elite_control_circuit'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'mekanism:elite_control_circuit'}
                ]},
                ],
            transitionalItem: {'item': 'mekanism:elite_control_circuit'},
            old_id: 'mekanism:control_circuit/ultimate',
            id: `${id_prefix}ultimate_control_circuit`
        },

        {
            ingredient: [
                {'item': 'kubejs:boss_essence'}
            ],
            loops: 2,
            results: [{'item': 'mekanism:teleportation_core'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:boss_essence'},
                    {'tag': 'mekanism:alloys/atomic'}
                ],
                'results': [
                    {'item': 'kubejs:boss_essence'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:boss_essence'},
                        {'item': 'meetyourfight:phantoplasm'}
                    ],
                    'results': [
                        {'item': 'kubejs:boss_essence'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:boss_essence'},
                        {'tag': 'forge:gems/carminite'}
                    ],
                    'results': [
                        {'item': 'kubejs:boss_essence'}
                ]},
                ],
            transitionalItem: {'item': 'kubejs:boss_essence'},
            old_id: 'mekanism:teleportation_core',
            id: `${id_prefix}teleportation_core`
        },

        {
            ingredient: [
                {'item': 'kubejs:azure_casing'}
            ],
            loops: 4,
            results: [{'item': 'ae2:controller'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:azure_casing'},
                    {'tag': 'forge:gems/fluix'}
                ],
                'results': [
                    {'item': 'kubejs:azure_casing'}
                ]},
                {
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:azure_casing'},
                    {'item': 'mekanism:ultimate_control_circuit'}
                ],
                'results': [
                    {'item': 'kubejs:azure_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:azure_casing'},
                        {'item': 'kubejs:infused_mechanism'}
                    ],
                    'results': [
                        {'item': 'kubejs:azure_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:azure_casing'},
                        {'tag': 'forge:ingots/plasteel'}
                    ],
                    'results': [
                        {'item': 'kubejs:azure_casing'}
                ]},
                ],
            transitionalItem: {'item': 'kubejs:azure_casing'},
            old_id: 'ae2:network/blocks/controller',
            id: `${id_prefix}controller`
        },

        {
            ingredient: [
                {'item': 'mekanism:dust_obsidian'}
            ],
            loops: 1,
            results: [{'item': 'create:sturdy_sheet'}],
            sequence: [{ 
                'type': 'create:filling',
                'ingredients': [
                    {'item': 'create:unprocessed_obsidian_sheet'},
                    {
                        'amount': 500,
                        'fluid': 'minecraft:lava',
                        'nbt': {}
                    }
                ],
                'results': [
                    {'item': 'create:unprocessed_obsidian_sheet'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'create:unprocessed_obsidian_sheet'},
                    ],
                    'results': [
                        {'item': 'create:unprocessed_obsidian_sheet'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'create:unprocessed_obsidian_sheet'},
                    ],
                    'results': [
                        {'item': 'create:unprocessed_obsidian_sheet'}
                ]},
                ],
            transitionalItem: {'item': 'create:unprocessed_obsidian_sheet'},
            old_id: 'create:sequenced_assembly/sturdy_sheet',
            id: `${id_prefix}sturdy_sheet`
        },

        {
            ingredient: [
                {'item': 'mekanism:hdpe_sheet'}
            ],
            loops: 2,
            results: [{'item': 'mekanism:module_base'}],
            sequence: [{
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:hdpe_sheet'},
                        {'item': 'mekanism:ingot_tin'}
                    ],
                    'results': [
                        {'item': 'mekanism:hdpe_sheet'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:hdpe_sheet'},
                        {'item': 'mekanism:nugget_bronze'}
                    ],
                    'results': [
                        {'item': 'mekanism:hdpe_sheet'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'mekanism:hdpe_sheet'},
                        {'item': 'ae2:certus_quartz_crystal'}
                    ],
                    'results': [
                        {'item': 'mekanism:hdpe_sheet'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'mekanism:hdpe_sheet'},
                    ],
                    'results': [
                        {'item': 'mekanism:hdpe_sheet'},
                ]}
                ],
            transitionalItem: {'item': 'mekanism:hdpe_sheet'},
            old_id: 'mekanism:module_base',
            id: `${id_prefix}module_base`
        },

        // NEW RECIPES
        {
            ingredient: [
                {'item': 'kubejs:boss_essence'}
            ],
            loops: 5,
            results: [{'item': 'kubejs:infused_mechanism'}],
            sequence: [
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:boss_essence'},
                        {'item': 'create:cogwheel'}
                    ],
                    'results': [
                        {'item': 'kubejs:boss_essence'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:boss_essence'},
                        {'item': 'create:large_cogwheel'}
                    ],
                    'results': [
                        {'item': 'kubejs:boss_essence'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:boss_essence'},
                        {'item': 'spirit:soul_steel_ingot'}
                    ],
                    'results': [
                        {'item': 'kubejs:boss_essence'}
                ]},
                ],
            transitionalItem: {'item': 'kubejs:boss_essence'},
            id: `${id_prefix}infused_mechanism`
        },

        {
            ingredient: [
                {'item': 'ae2:silicon'}
            ],
            loops: 1,
            results: [{'item': 'kubejs:control_circuit_base'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'ae2:silicon'},
                    {'tag': 'forge:ingots/osmium'}
                ],
                'results': [
                    {'item': 'ae2:silicon'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'ae2:silicon'},
                        {'item': 'minecraft:clay_ball'}
                    ],
                    'results': [
                        {'item': 'ae2:silicon'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'ae2:silicon'},
                    ],
                    'results': [
                        {'item': 'ae2:silicon'}
                ]},
                ],
            transitionalItem: {'item': 'ae2:silicon'},
            id: `${id_prefix}control_circuit_base`
        },

        {
            ingredient: [
                {'item': 'minecraft:quartz_block'}
            ],
            loops: 2,
            results: [{'item': 'ae2:chipped_budding_quartz'}],
            sequence: [{ 
                'type': 'create:filling',
                'ingredients': [
                    {'item': 'minecraft:quartz_block'},
                    {
                        'amount': 500,
                        'fluid': 'mekanism:hydrogen',
                        'nbt': {}
                    }
                ],
                'results': [
                    {'item': 'minecraft:quartz_block'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'minecraft:quartz_block'},
                    ],
                    'results': [
                        {'item': 'minecraft:quartz_block'}
                ]}
                ],
            transitionalItem: {'item': 'minecraft:quartz_block'},
            id: `${id_prefix}chipped_budding_quartz`
        },

        {
            ingredient: [
                {'item': 'create:brass_casing'}
            ],
            loops: 4,
            results: [{'item': 'kubejs:steel_casing'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'create:brass_casing'},
                    {'tag': 'forge:ingots/osmium'}
                ],
                'results': [
                    {'item': 'create:brass_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'create:brass_casing'},
                        {'tag': 'forge:ingots/steel'}
                    ],
                    'results': [
                        {'item': 'create:brass_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'create:brass_casing'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'create:brass_casing'}
                ]}
                ],
            transitionalItem: {'item': 'create:brass_casing'},
            id: `${id_prefix}steel_casing`
        },
        
        {
            ingredient: [
                {'item': 'kubejs:steel_casing'}
            ],
            loops: 4,
            results: [{'item': 'kubejs:obsidian_casing'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:steel_casing'},
                    {'tag': 'forge:ingots/refined_obsidian'}
                ],
                'results': [
                    {'item': 'kubejs:steel_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:steel_casing'},
                        {'tag': 'forge:ingots/crimson_steel'}
                    ],
                    'results': [
                        {'item': 'kubejs:steel_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:steel_casing'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'kubejs:steel_casing'}
                ]}
                ],
            transitionalItem: {'item': 'kubejs:steel_casing'},
            id: `${id_prefix}obsidian_casing`
        },

        {
            ingredient: [
                {'item': 'kubejs:obsidian_casing'}
            ],
            loops: 4,
            results: [{'item': 'kubejs:azure_casing'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:obsidian_casing'},
                    {'tag': 'forge:ingots/azure_electrum'}
                ],
                'results': [
                    {'item': 'kubejs:obsidian_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:obsidian_casing'},
                        {'item': 'majruszsdifficulty:enderium_shard'}
                    ],
                    'results': [
                        {'item': 'kubejs:obsidian_casing'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:obsidian_casing'},
                        {'tag': 'forge:ingots/iron'}
                    ],
                    'results': [
                        {'item': 'kubejs:obsidian_casing'}
                ]}
                ],
            transitionalItem: {'item': 'kubejs:obsidian_casing'},
            id: `${id_prefix}azure_casing`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: recipe.ingredient,
            loops: recipe.loops,
            results: recipe.results,
            sequence: recipe.sequence,
            transitionalItem: recipe.transitionalItem
        })
        .id(recipe.id)
    });
});