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
                'amount': 20,
                'tag': 'mekanism:carbon',
            },
            itemInput: {"ingredient": {'item': 'createdeco:cast_iron_ingot'}},
            output: {'item': 'mekanism:ingot_steel'},
            id: `${id_prefix}steel_ingot`
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