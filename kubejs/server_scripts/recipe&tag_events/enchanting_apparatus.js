ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/enchanting_apparatus/';
    const recipes = [

        {
            pedestalItems: [
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'scalinghealth:heart_crystal_shard'}},
                {'item': {'item':'minecraft:netherite_ingot'}}
            ],
            reagent: [{'item': 'ars_nouveau:abjuration_essence'}],
            output: {'item': 'scalinghealth:heart_crystal'},
            sourceCost: 100,
            old_id: 'scalinghealth:heart_crystal',
            id: `${id_prefix}heart_crystal`
        },

        {
            pedestalItems: [
                {'item': {'item':'ars_nouveau:earth_essence'}}
            ],
            reagent: [{'item': 'minecraft:mangrove_roots'}],
            output: {'item': 'twilightforest:liveroot'},
            sourceCost: 10,
            id: `${id_prefix}liveroot`
        },

        {
            pedestalItems: [
                {'item': {'item':'mekanism:nugget_lead'}}
            ],
            reagent: [{'item': 'minecraft:ink_sac'}],
            output: {'item': 'supplementaries:antique_ink'},
            sourceCost: 0,
            id: `${id_prefix}antique_ink`
        },

        {
            pedestalItems: [
                {'item': {'item':'minecraft:gold_ingot'}},
                {'item': {'item':'minecraft:gold_ingot'}},
                {'item': {'item':'minecraft:gold_ingot'}}
            ],
            reagent: [{'item': 'minecraft:stick'}],
            output: {'item': 'minecraft:bell'},
            sourceCost: 0,
            id: `${id_prefix}bell`
        },
        
        {
            pedestalItems: [
                {'item': {'item':'spirit:soul_powder'}},
                {'item': {'item':'spirit:soul_powder'}},
                {'item': {'item':'spirit:soul_powder'}}
            ],
            reagent: [{'item': 'minecraft:soul_sand'}],
            output: {'item': 'spirit:soul_powder_block'},
            sourceCost: 0,
            old_id: 'spirit:crafting/soul_powder_block',
            id: `${id_prefix}soul_powder_block`
        },

        {
            pedestalItems: [
                {'item': {'item':'minecraft:redstone'}},
                {'item': {'item':'ars_nouveau:source_gem'}},
                {'item': {'item':'minecraft:redstone'}},
            ],
            reagent: [{'item': 'minecraft:book'}],
            output: {'item': 'ars_nouveau:novice_spell_book'},
            sourceCost: 0,
            old_id: 'ars_nouveau:novice_spell_book',
            id: `${id_prefix}novice_spell_book`
        },

        {
            pedestalItems: [
                {'item': {'item':'kubejs:infernal_essence'}},
                {'item': {'item':'minecraft:blaze_rod'}},
                {'item': {'item':'kubejs:infernal_essence'}},
                {'item': {'item':'silentgear:blaze_gold_ingot'}}
            ],
            reagent: [{'item': 'ars_nouveau:novice_spell_book'}],
            output: {'item': 'ars_nouveau:apprentice_spell_book'},
            sourceCost: 0,
            old_id: 'ars_nouveau:apprentice_spell_book_upgrade',
            id: `${id_prefix}apprentice_spell_book`
        },

        {
            pedestalItems: [
                {'item': {'item': 'ars_nouveau:abjuration_essence'}},
                {'item': {'item': 'ars_nouveau:abjuration_essence'}},
                {'item': {'item': 'ars_nouveau:mendosteen_pod'}},
                {'item': {'item': 'minecraft:sculk_catalyst'}},
                {'item': {'item': 'spirit:soul_powder_block'}},
                {'item': {'item': 'quark:soul_bead'}}
            ],
            reagent: [{'item': 'ars_nouveau:blank_thread'}],
            output: {'item': 'ars_nouveau:thread_life_drain'},
            sourceCost: 0,
            old_id: 'ars_nouveau:thread_life_drain',
            id: `${id_prefix}thread_life_drain`
        },

        {
            pedestalItems: [
                {'item': {'item': 'twilightforest:carminite'}},
                {'item': {'item': 'meetyourfight:mossy_tooth'}},
                {'item': {'item': 'meetyourfight:fortunes_favor'}},
                {'item': {'item': 'minecraft:nether_star'}},
                {'item': {'item': 'meetyourfight:phantoplasm'}}
            ],
            reagent: [{'item': 'ars_nouveau:wilden_tribute'}],
            output: {'item': 'ars_instrumentum:fake_wilden_tribute'},
            sourceCost: 2000,
            old_id: 'ars_instrumentum:imbuement/imbuement_fake_wilden_tribute',
            id: `${id_prefix}fake_wilden_tribute`
        },

        {
            pedestalItems: [
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
            ],
            reagent: [{'item': 'minecraft:gold_ingot'}],
            output: {'item': 'silentgear:blaze_gold_ingot'},
            sourceCost: 0,
            old_id: 'silentgear:blaze_gold_ingot',
            id: `${id_prefix}blaze_gold`
        },

        {
            pedestalItems: [
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
                {'item': {'item': 'minecraft:blaze_powder'}},
            ],
            reagent: [{'item': 'silentgear:blaze_gold_block'}],
            output: {'item': 'silentgear:starlight_charger'},
            sourceCost: 1000,
            old_id: 'silentgear:starlight_charger',
            id: `${id_prefix}starlight_charger`
        },

        {
            pedestalItems: [
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'kubejs:boss_essence'}},
                {'item': {'item': 'ars_nouveau:air_essence'}},
                {'item': {'item': 'ars_nouveau:air_essence'}},
                {'item': {'item': 'silentgear:azure_silver_block'}},
            ],
            reagent: [{'item': 'ars_nouveau:mundane_belt'}],
            output: {'item': 'ars_nouveau:belt_of_levitation'},
            sourceCost: 1000,
            old_id: 'ars_nouveau:belt_of_levitation',
            id: `${id_prefix}belt_of_levitation`
        },

        {
            pedestalItems: [
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'twilightforest:ironwood_ingot'}},
                {'item': {'item': 'twilightforest:knightmetal_ingot'}},
                {'item': {'item': 'twilightforest:knightmetal_ingot'}},
                {'item': {'item': 'twilightforest:ironwood_ingot'}}
            ],
            reagent: [{'item': 'twilightforest:hydra_trophy'}],
            output: {'item': 'undergarden:catalyst'},
            sourceCost: 0,
            old_id: 'undergarden:catalyst',
            id: `${id_prefix}catalyst`
        },

        {
            pedestalItems: [
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'create:copper_sheet'}},
                {'item': {'item': 'silentgear:blaze_gold_ingot'}},
                {'item': {'item': 'ars_nouveau:source_gem'}}
            ],
            reagent: [{'item': 'create:copper_casing'}],
            output: {'item': 'create_enchantment_industry:disenchanter'},
            sourceCost: 100,
            old_id: 'create_enchantment_industry:crafting/disenchanter',
            id: `${id_prefix}disenchanter`
        },

        {
            pedestalItems: [
                {'item': {'item': 'deeperdarker:soul_dust'}},
                {'item': {'item': 'minecraft:nether_star'}}
            ],
            reagent: [{'item': 'constructionwand:diamond_wand'}],
            output: {'item': 'constructionwand:infinity_wand'},
            sourceCost: 0,
            old_id: 'constructionwand:infinity_wand',
            id: `${id_prefix}infinity_wand`
        },

        // NEW RECIPES

        {
            pedestalItems: [
                {'item': {'item': 'ars_nouveau:wilden_wing'}},
                {'item': {'item': 'ars_nouveau:wilden_wing'}},
                {'item': {'item': 'ars_nouveau:wilden_wing'}},
                {'item': {'item': 'kubejs:boss_essence'}},
                {'item': {'item': 'alexsmobs:flying_fish'}}
            ],
            reagent: [{'item': 'ars_nouveau:purple_archwood_log'}],
            output: {'item': 'ars_nouveau:ritual_flight'},
            sourceCost: 0,
            id: `${id_prefix}ritual_flight`
        },

        {
            pedestalItems: [
                {'item': {'item': 'kubejs:boss_essence'}},
                {'item': {'item': 'minecraft:gold_block'}},
                {'item': {'item': 'kubejs:boss_essence'}},
                {'item': {'item': 'ars_nouveau:manipulation_essence'}}
            ],
            reagent: [{'item': 'minecraft:golden_apple'}],
            output: {'item': 'minecraft:enchanted_golden_apple'},
            sourceCost: 8000,
            id: `${id_prefix}enchanted_golden_apple`
        },

        {
            pedestalItems: [
                {'item': {'item': 'kubejs:infernal_essence'}},
                {'item': {'item': 'alexsmobs:blood_sac'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
                {'item': {'item': 'minecraft:ghast_tear'}},
                {'item': {'item': 'minecraft:diamond'}},
                {'item': {'item': 'twilightforest:borer_essence'}},
            ],
            reagent: [{'item': 'minecraft:glass_bottle'}],
            output: {'item': 'twilightforest:fiery_tears'},
            sourceCost: 0,
            id: `${id_prefix}fiery_tears`
        },

        {
            pedestalItems: [
                {'item': {'item': 'kubejs:infernal_essence'}},
                {'item': {'item': 'jaopca:nuggets.regalium'}},
                {'item': {'item': 'twilightforest:borer_essence'}},
            ],
            reagent: [{'item': 'minecraft:amethyst_shard'}],
            output: {'item': 'undergarden:utheric_shard'},
            sourceCost: 20,
            id: `${id_prefix}utheric_shard`
        },

        {
            pedestalItems: [
                {'item': {'item': 'kubejs:infernal_essence'}},
                {'item': {'item': 'deeperdarker:sculk_stone'}},
                {'item': {'item': 'deeperdarker:sculk_stone'}},
                {'item': {'item': 'deeperdarker:sculk_stone'}},
                {'item': {'item': 'kubejs:infernal_essence'}},
                {'item': {'item': 'alexsmobs:mimicream'}},
            ],
            reagent: [{'item': 'alexsmobs:skreecher_soul'}],
            output: {'item': 'minecraft:echo_shard'},
            sourceCost: 200,
            id: `${id_prefix}echo_shard`
        },

        {
            pedestalItems: [
                {'item': {'item': 'quark:soul_bead'}},
                {'item': {'item': 'quark:soul_bead'}},
                {'item': {'item': 'quark:soul_bead'}}
            ],
            reagent: [{'item': 'minecraft:gunpowder'}],
            output: {'item': 'ars_nouveau:experience_gem'},
            sourceCost: 0,
            id: `${id_prefix}experience_gem1`
        },

        {
            pedestalItems: [
                {'item': {'item': 'alexsmobs:skreecher_soul'}},
                {'item': {'item': 'alexsmobs:skreecher_soul'}},
                {'item': {'item': 'alexsmobs:skreecher_soul'}}
            ],
            reagent: [{'item': 'minecraft:gunpowder'}],
            output: {'item': 'ars_nouveau:experience_gem'},
            sourceCost: 0,
            id: `${id_prefix}experience_gem2`
        },

        {
            pedestalItems: [
                {'item': {'item': 'alexsmobs:blood_sac'}},
                {'item': {'item': 'alexsmobs:blood_sac'}},
                {'item': {'item': 'alexsmobs:blood_sac'}}
            ],
            reagent: [{'item': 'minecraft:gunpowder'}],
            output: {'item': 'ars_nouveau:experience_gem'},
            sourceCost: 0,
            id: `${id_prefix}experience_gem3`
        },

        {
            pedestalItems: [
                {'item': {'item': 'minecraft:rotten_flesh'}},
                {'item': {'item': 'minecraft:rotten_flesh'}},
                {'item': {'item': 'minecraft:rotten_flesh'}}
            ],
            reagent: [{'item': 'minecraft:gunpowder'}],
            output: {'item': 'ars_nouveau:experience_gem'},
            sourceCost: 0,
            id: `${id_prefix}experience_gem4`
        },

        {
            pedestalItems: [
                {'item': {'item': 'silentgear:blaze_gold_ingot'}}
            ],
            reagent: [{'item': 'minecraft:gunpowder'}],
            output: {'item': 'silentgear:blaze_gold_dust'},
            sourceCost: 5,
            id: `${id_prefix}blaze_gold_dust`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type:'ars_nouveau:enchanting_apparatus',
            reagent: recipe.reagent,
            pedestalItems: recipe.pedestalItems,
            output: recipe.output,
            sourceCost: recipe.sourceCost,
            keepNbtOfReagent: false
        })
        .id(recipe.id)
    });
});