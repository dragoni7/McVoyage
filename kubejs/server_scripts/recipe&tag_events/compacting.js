ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/pressing/';
    const recipes = [
        {
            ingredients: [
                {'item': 'ae2:silicon'},
                {
                    'amount': 100,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                }
            ],
            results: [{'item': 'ae2:printed_silicon'}],
            id: `${id_prefix}printed_silicon`,
            old_id: 'ae2:inscriber/silicon_print'
        },

        {
            ingredients: [
                {'tag': 'forge:dusts/salt'},
                {
                    'amount': 200,
                    'fluid': 'minecraft:milk',
                    'nbt': {}
                }
            ],
            results: [{'item': 'croptopia:cheese'}],
            id: `${id_prefix}cheese`
        },

        {
            ingredients: [
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'mekanism:hdpe_pellet'},
                {'item': 'ae2:quartz_fiber'}
            ],
            results: [{'item': 'mekanism:hdpe_sheet'}],
            id: `${id_prefix}hdpe_sheet`,
            old_id: 'mekanism:hdpe_sheet'
        },

        {
            ingredients: [
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'},
                {'item': 'gobber2:gobber2_globette'}
            ],
            results: [{'item': 'gobber2:gobber2_glob'}],
            id: `${id_prefix}gobber2_glob`,
            old_id: 'gobber2:gobber2_glob'
        },

        {
            ingredients: [
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'},
                {'item': 'gobber2:gobber2_globette_nether'}
            ],
            results: [{'item': 'gobber2:gobber2_glob_nether'}],
            id: `${id_prefix}gobber2_glob_nether`,
            old_id: 'gobber2:gobber2_glob_nether'
        },

        {
            ingredients: [
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'},
                {'item': 'gobber2:gobber2_globette_end'}
            ],
            results: [{'item': 'gobber2:gobber2_glob_end'}],
            id: `${id_prefix}gobber2_glob_end`,
            old_id: 'gobber2:gobber2_glob_end'
        },

        {
            ingredients: [
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
            ],
            results: [{'item': 'minecraft:magma_block'}],
            id: `${id_prefix}magma_block_from_flesh`
        },

        {
            ingredients: [
                {'item': 'supplementaries:flint_block'}
            ],
            results: [{'item': 'minecraft:stone'}],
            id: `${id_prefix}flint_to_stone`,
        },

        {
            ingredients: [
                {
                    'amount': 900,
                    'fluid': 'the_bumblezone:sugar_water_still',
                    'nbt': {}
                }
            ],
            results: [{'item': 'supplementaries:sugar_cube'}],
            id: `${id_prefix}sugar_water_to_block`,
        },
        
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:compacting',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    });
});