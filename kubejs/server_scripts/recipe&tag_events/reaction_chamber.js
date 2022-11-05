ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/reaction/';
    const recipes = [

        {
            fluidInput: {
                'amount': 10,
                'fluid': 'mekanismgenerators:deuterium',
            },
            gasInput: {
                'amount': 10,
                'gas': 'mekanism:antimatter'
            },
            itemInput: {"ingredient": {'item': 'gobber2:gobber2_glob'}},
            output: {'item': 'gobber2:gobber2_ingot'},
            old_id: 'gobber2:gobber2_ingot',
            id: `${id_prefix}gobber2_ingot`
        },

        {
            fluidInput: {
                'amount': 50,
                'fluid': 'mekanismgenerators:deuterium',
            },
            gasInput: {
                'amount': 30,
                'gas': 'mekanism:brine'
            },
            itemInput: {"ingredient": {'item': 'silentcompat:raw_plasteel'}},
            output: {'item': 'silentcompat:plasteel_ingot'},
            id: `${id_prefix}plasteel_ingot`
        },

        {
            fluidInput: {
                'amount': 50,
                'fluid': 'mekanismgenerators:deuterium',
            },
            gasInput: {
                'amount': 10,
                'gas': 'mekanism:antimatter'
            },
            itemInput: {"ingredient": {'item': 'gobber2:gobber2_glob_nether'}},
            output: {'item': 'gobber2:gobber2_ingot_nether'},
            old_id: 'gobber2:gobber2_ingot_nether',
            id: `${id_prefix}gobber2_ingot_nether`
        },

        {
            fluidInput: {
                'amount': 50,
                'fluid': 'mekanismgenerators:deuterium',
            },
            gasInput: {
                'amount': 10,
                'gas': 'mekanism:antimatter'
            },
            itemInput: {"ingredient": {'item': 'gobber2:gobber2_glob_end'}},
            output: {'item': 'gobber2:gobber2_ingot_end'},
            old_id: 'gobber2:gobber2_ingot_end',
            id: `${id_prefix}gobber2_ingot_end`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'mekanism:reaction',
            duration: 60,
            energyRequired: 5000,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            itemInput: recipe.itemInput,
            itemOutput: recipe.output
        })
        .id(recipe.id)
    });
});