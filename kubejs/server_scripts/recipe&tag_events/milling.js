ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/milling/';

    const recipes = [

        {
            ingredients: [{'item': 'minecraft:deepslate'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'minecraft:cobbled_deepslate'
                },
                {
                    'chance': 0.1,
                    'item': 'silentgear:bort'
                }],
            id: `${id_prefix}bort_from_deepslate`
        },

        {
            ingredients: [{'item': 'alexsmobs:capsid'}],
            time: 200,
            results: [
                {
                    'count': 1,
                    'item': 'minecraft:purple_dye'
                },
                {
                    'chance': 0.05,
                    'item': 'majruszsdifficulty:enderium_shard'
                }],
            id: `${id_prefix}enderium_from_capsid`
        },

        {
            ingredients: [{'item': 'minecraft:gilded_blackstone'}],
            time: 200,
            results: [
                {
                    'count': 1,
                    'item': 'minecraft:blackstone'
                },
                {
                    'chance': 0.1,
                    'item': 'minecraft:gold_nugget'
                },
                {
                    'chance': 0.03,
                    'item': 'mekanism:dirty_netherite_scrap'
                }],
            id: `${id_prefix}blackstone_gold_netherite`
        },

        {
            ingredients: [{'item': 'create:crushed_iron_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_iron'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_iron'
                }],
            id: `${id_prefix}dust_iron_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_gold_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_gold'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_gold'
                }],
            id: `${id_prefix}dust_gold_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_copper_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_copper'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_copper'
                }],
            id: `${id_prefix}dust_copper_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_tin_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_tin'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_tin'
                }],
            id: `${id_prefix}dust_tin_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_osmium_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_osmium'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_osmium'
                }],
            id: `${id_prefix}dust_osmium_milling`
        },
        
        {
            ingredients: [{'item': 'create:crushed_lead_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_lead'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_lead'
                }],
            id: `${id_prefix}dust_lead_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_uranium_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'mekanism:dust_uranium'
                },
                {
                    'chance': 0.2,
                    'item': 'mekanism:dust_uranium'
                }],
            id: `${id_prefix}dust_uranium_milling`
        },

        {
            ingredients: [{'item': 'create:crushed_zinc_ore'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.zinc'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.zinc'
                }],
            id: `${id_prefix}dust_zinc_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.azure_silver'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'silentgear:azure_silver_dust'
                },
                {
                    'chance': 0.2,
                    'item': 'silentgear:azure_silver_dust'
                }],
            id: `${id_prefix}dust_azure_silver_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.crimson_iron'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'silentgear:crimson_iron_dust'
                },
                {
                    'chance': 0.2,
                    'item': 'silentgear:crimson_iron_dust'
                }],
            id: `${id_prefix}dust_crimson_iron_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.ironwood'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.ironwood'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.ironwood'
                }],
            id: `${id_prefix}dust_ironwood_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.knightmetal'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.knightmetal'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.knightmetal'
                }],
            id: `${id_prefix}dust_knightmetal_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.pendorite'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.pendorite'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.pendorite'
                }],
            id: `${id_prefix}dust_pendorite_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.cloggrum'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.cloggrum'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.cloggrum'
                }],
            id: `${id_prefix}dust_cloggrum_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.froststeel'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.froststeel'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.froststeel'
                }],
            id: `${id_prefix}dust_froststeel_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.regalium'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.regalium'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.regalium'
                }],
            id: `${id_prefix}dust_regalium_milling`
        },

        {
            ingredients: [{'item': 'jaopca:create_crushed_ores.utherium'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'jaopca:dusts.utherium'
                },
                {
                    'chance': 0.2,
                    'item': 'jaopca:dusts.utherium'
                }],
            id: `${id_prefix}dust_utherium_milling`
        },

        {
            ingredients: [{'item': 'byg:brimstone'}],
            time: 100,
            results: [
                {
                    'count': 1,
                    'item': 'byg:brim_powder'
                }],
            id: `${id_prefix}brim_powder_milling`
        },

        {
            ingredients: [{'item': 'delightful:green_tea_leaf'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'delightful:matcha'
                }],
            id: `${id_prefix}tea_leaf_milling`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'create:milling',
            ingredients: recipe.ingredients,
            processingTime: recipe.time,
            results: recipe.results
        })
        .id(recipe.id)
    });

    materials.forEach((material) => {
        if (material.clump) {
            event.custom({
                type: 'create:milling',
                ingredients: material.clump,
                processingTime: 150,
                results: material.dirty_dust
            })
            .id(`${id_prefix}${material.name}_clump`)
        }
    });
});