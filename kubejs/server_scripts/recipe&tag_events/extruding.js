ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/extruding/';
    
    const recipes = [
        {
            output: {'item': 'minecraft:andesite'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'minecraft:diorite'
            },
            id: `${id_prefix}andesite`
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.catalyst) {
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: recipe.input,
                catalyst: recipe.catalyst,
                result: recipe.output
            })
            .id(recipe.id)
        }
    });
});