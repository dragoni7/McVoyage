ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mechanicalcrafting/';
    const recipes = [

        {
            mirrored: false,
            key: {
                'G': {
                    'item': 'mekanismgenerators:solar_generator',
                },
                'A': {
                    'tag': 'mekanism:alloys/infused',
                },
                'I': {
                    'tag': 'forge:ingots/iron',
                }
            },
            pattern: [
                'GAG',
                'GAG',
                ' I ',
                'III'
            ],
            result: {'item': 'mekanismgenerators:advanced_solar_generator'},
            old_id: 'mekanismgenerators:generator/advanced_solar',
            id: `${id_prefix}advanced_solar_generator`
        },

        {
            mirrored: false,
            key: {
                'P': {
                    'item': 'create:propeller',
                },
                'O': {
                    'tag': 'forge:ingots/osmium',
                },
                'A': {
                    'tag': 'mekanism:alloys/infused',
                },
                'E': {
                    'item': 'mekanism:energy_tablet',
                },
                'C': {
                    'item': 'mekanism:basic_control_circuit',
                },
            },
            pattern: [
                ' O ',
                'OPO',
                ' O ',
                ' A ',
                'ECE'
            ],
            result: {'item': 'mekanismgenerators:wind_generator'},
            old_id: 'mekanismgenerators:generator/wind',
            id: `${id_prefix}wind_generator`
        },
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:mechanical_crafting',
            acceptMirrored: recipe.mirrored,
            key: recipe.key,
            pattern: recipe.pattern,
            result: recipe.result
        })
        .id(recipe.id)
    });
});