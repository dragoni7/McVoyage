ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/crushing/';

    const recipes = [
        {
            ingredients: [{'tag': 'forge:crops'}],
            time: 150,
            results: [
                {
                    'count': 3,
                    'item': 'mekanism:bio_fuel'
                },
                {
                    'chance': 0.5,
                    'item': 'mekanism:bio_fuel'
                }],
            id: `${id_prefix}bio_fuel_crop`
        },

        {
            ingredients: [{'tag': 'forge:seeds'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:bio_fuel'
                },
                {
                    'chance': 0.5,
                    'item': 'mekanism:bio_fuel'
                }],
            id: `${id_prefix}bio_fuel_seeds`
        },

        {
            ingredients: [{'tag': 'minecraft:planks'}],
            time: 150,
            results: [
                {
                    'count': 3,
                    'item': 'mekanism:sawdust'
                },
                {
                    'chance': 0.5,
                    'item': 'mekanism:sawdust'
                }],
            id: `${id_prefix}sawdust`
        },

        {
            ingredients: [{'tag': 'forge:obsidian'}],
            time: 300,
            results: [
                {
                    'count': 4,
                    'item': 'mekanism:dust_obsidian'
                },
                {
                    'chance': 0.5,
                    'item': 'mekanism:dust_obsidian'
                }],
            id: `${id_prefix}dust_obsidian`
        },

        {
            ingredients: [{'item': 'minecraft:shulker_shell'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'silentgear:crushed_shulker_shell'
                }],
            old_id: 'silentgear:crushed_shulker_shell',
            id: `${id_prefix}crushed_shulker_shell`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:crushing',
            ingredients: recipe.ingredients,
            processingTime: recipe.time,
            results: recipe.results
        })
        .id(recipe.id)
    });

    materials.forEach((material) => {
        event.custom({
            type: 'create:crushing',
            ingredients: material.ingredients,
            processingTime: 150,
            results: material.dust
        })
        .id(`${id_prefix}${material.name}`)
    })
});