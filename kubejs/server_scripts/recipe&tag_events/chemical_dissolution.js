ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/dissolution/';
    const recipes = [
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_iron_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_iron"
            },
            id: `${id_prefix}dirty_iron_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_copper_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_copper"
            },
            id: `${id_prefix}dirty_copper_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_gold_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_gold"
            },
            id: `${id_prefix}dirty_gold_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_lead_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_lead"
            },
            id: `${id_prefix}dirty_lead_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_osmium_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_osmium"
            },
            id: `${id_prefix}dirty_osmium_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_tin_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_tin"
            },
            id: `${id_prefix}dirty_tin_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_uranium_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "mekanism:dirty_uranium"
            },
            id: `${id_prefix}dirty_uranium_slurry`
        },
    
        {
            itemInput: {"ingredient": {'item': 'create:crushed_zinc_ore'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "jaopca:mekanism_dirty.zinc"
            },
            id: `${id_prefix}dirty_zinc_slurry`
        },

        {
            itemInput: {"ingredient": {'item': 'jaopca:create_crushed_ores.azure_silver'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "jaopca:mekanism_dirty.azure_silver"
            },
            id: `${id_prefix}dirty_azure_silver_slurry`
        },

        {
            itemInput: {"ingredient": {'item': 'jaopca:create_crushed_ores.crimson_iron'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "jaopca:mekanism_dirty.crimson_iron"
            },
            id: `${id_prefix}dirty_crimson_iron_slurry`
        },

        {
            itemInput: {"ingredient": {'item': 'jaopca:create_crushed_ores.cloggrum'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "jaopca:mekanism_dirty.cloggrum"
            },
            id: `${id_prefix}dirty_cloggrum_slurry`
        },

        {
            itemInput: {"ingredient": {'item': 'jaopca:create_crushed_ores.froststeel'}},
            output: {
                "amount": 1400,
                "chemicalType": 'slurry',
                "slurry": "jaopca:mekanism_dirty.froststeel"
            },
            id: `${id_prefix}dirty_froststeel_slurry`
        }
    ];

recipes.forEach((recipe) => {

    event.custom({
        type: 'mekanism:dissolution',
        gasInput: {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        itemInput: recipe.itemInput,
        output: recipe.output
    })
    .id(recipe.id)
});
});