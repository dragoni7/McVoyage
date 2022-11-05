ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/infusing/';
    const recipes = [

        {
            chemicalInput: {
                'amount': 20,
                'tag': 'mekanism:redstone',
            },
            itemInput: {"ingredient": {'item': 'kubejs:control_circuit_base'}},
            output: {'item': 'mekanism:basic_control_circuit'},
            old_id: 'mekanism:control_circuit/basic',
            id: `${id_prefix}basic_control_circuit`
        },

        {
            chemicalInput: {
                'amount': 10,
                'tag': 'mekanism:tin',
            },
            itemInput: {"ingredient": {'item': 'ae2:certus_quartz_dust'}},
            output: {'item': 'ae2:silicon'},
            old_id: 'ae2:smelting/silicon_from_certus_quartz_dust',
            id: `${id_prefix}silicon`
        },

        {
            chemicalInput: {
                'amount': 20,
                'tag': 'mekanism:carbon',
            },
            itemInput: {"ingredient": {'item': 'createdeco:cast_iron_ingot'}},
            output: {'item': 'mekanism:ingot_steel'},
            id: `${id_prefix}steel_ingot`
        },

        {
            chemicalInput: {
                'amount': 10,
                'tag': 'mekanism:diamond',
            },
            itemInput: {"ingredient": {'item': 'create:sturdy_sheet'}},
            output: {'count': 2, 'item': 'mekanism:dust_refined_obsidian'},
            id: `${id_prefix}dust_refined_obsidian`,
            old_id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'
        },

        {
            chemicalInput: {
                'amount': 10,
                'tag': 'mekanism:fungi',
            },
            itemInput: {"ingredient": {'item': 'ae2:certus_quartz_dust'}},
            output: {'item': 'ae2:quartz_fiber'},
            id: `${id_prefix}quartz_fiber`,
            old_id: 'ae2:network/parts/quartz_fiber_part'
        },

        {
            chemicalInput: {
                'amount': 10,
                'tag': 'mekanism:redstone',
            },
            itemInput: {"ingredient": {'item': 'create:brass_ingot'}},
            output: {'item': 'mekanism:alloy_infused'},
            id: `${id_prefix}alloy_infused`,
            old_id: 'mekanism:metallurgic_infusing/alloy/infused'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'mekanism:metallurgic_infusing',
            chemicalInput: recipe.chemicalInput,
            itemInput: recipe.itemInput,
            output: recipe.output
        })
        .id(recipe.id)
    });
});