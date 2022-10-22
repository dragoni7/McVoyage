ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/glyph/';
    
    const recipes = [
        {
            output: 'ars_nouveau:glyph_split',
            count: 1,
            input: [
                {'item': {'item': 'ars_nouveau:relay_splitter'}},
                {'item': {'item': 'ars_nouveau:wilden_spike'}},
                {'item': {'item': 'twilightforest:carminite'}},
                {'item': {'item': 'kubejs:boss_essence'}},
            ],
            exp: 160,
            id: `${id_prefix}split`,
            old_id: 'ars_nouveau:glyph_split'
        },

        {
            output: 'ars_nouveau:glyph_summon_decoy',
            count: 1,
            input: [
                {'item': {'item': 'ars_nouveau:conjuration_essence'}},
                {'item': {'item': 'quark:soul_bead'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
            ],
            exp: 20,
            id: `${id_prefix}glyph_summon_decoy`,
            old_id: 'ars_nouveau:glyph_summon_decoy'
        },

        {
            output: 'ars_nouveau:glyph_aoe',
            count: 1,
            input: [
                {'item': {'item': 'minecraft:firework_star'}},
                {'item': {'item': 'meetyourfight:phantoplasm'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
            ],
            exp: 5,
            id: `${id_prefix}glyph_aoe`,
            old_id: 'ars_nouveau:glyph_aoe'
        },

        {
            output: 'ars_nouveau:glyph_fortune',
            count: 1,
            input: [
                {'item': {'item': 'minecraft:rabbit_foot'}},
                {'item': {'item': 'meetyourfight:fortunes_favor'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
            ],
            exp: 5,
            id: `${id_prefix}glyph_fortune`,
            old_id: 'ars_nouveau:glyph_fortune'
        },

        {
            output: 'toomanyglyphs:glyph_amplify_two',
            count: 1,
            input: [
                {'item': {'item': 'minecraft:netherite_pickaxe'}},
                {'item': {'item': 'meetyourfight:mossy_tooth'}},
                {'item': {'item': 'twilightforest:fiery_blood'}},
                {'item': {'item': 'kubejs:boss_essence'}},
            ],
            exp: 10,
            id: `${id_prefix}glyph_amplify_two`,
            old_id: 'toomanyglyphs:glyph_amplify_two'
        },

        {
            output: 'toomanyglyphs:glyph_amplify_three',
            count: 1,
            input: [
                {'item': {'item': 'deeperdarker:warden_pickaxe'}},
                {'item': {'item': 'twilightforest:alpha_yeti_fur'}},
                {'item': {'item': 'majruszsdifficulty:enderium_shard'}},
                {'item': {'item': 'kubejs:boss_essence'}},
            ],
            exp: 15,
            id: `${id_prefix}glyph_amplify_three`,
            old_id: 'toomanyglyphs:glyph_amplify_three'
        },

        {
            output: 'toomanyglyphs:glyph_chaining',
            count: 1,
            input: [
                {'item': {'item': 'minecraft:chain'}},
                {'item': {'item': 'minecraft:chain'}},
                {'item': {'item': 'minecraft:chain'}},
                {'item': {'item': 'silentgear:blaze_gold_block'}},
                {'item': {'item': 'undergarden:regalium_crystal'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
            ],
            exp: 5,
            id: `${id_prefix}glyph_chaining`,
            old_id: 'toomanyglyphs:glyph_chaining'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'ars_nouveau:glyph',
            count: recipe.count,
            exp: recipe.exp,
            inputItems: recipe.input,
            output: recipe.output
        })
        .id(recipe.id)
    });
});