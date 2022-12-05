//priority: 997
ServerEvents.tags('item', event => {
    event.add('forge:steel_casings', ['mekanism:steel_casing', 'kubejs:steel_casing'])
    event.add('forge:shards/nether_star', 'silentgear:nether_star_fragment')
    event.add('forge:shards/nether_star', 'progressivebosses:nether_star_shard')
    event.add('forge:storage_blocks/cast_iron', 'createdeco:cast_iron_block')
    event.add('forge:storage_blocks/opal', 'dreamland:opal_block')
    event.add('forge:storage_blocks/precious_opal', 'dreamland:precious_opal_block')
    event.add('forge:storage_blocks/soul_steel', 'spirit:soul_steel_block')
    event.add('c:white_sand', 'byg:white_sand')
    event.add('c:purple_sand', 'byg:purple_sand')
    event.add('c:blue_sand', 'byg:blue_sand')
    event.add('forge:storage_blocks/gobber', 'gobber2:gobber2_block')
    event.add('forge:storage_blocks/gobber_nether', 'gobber2:gobber2_block_nether')
    event.add('forge:storage_blocks/gobber_end', 'gobber2:gobber2_block_end')
    event.add('forge:dusts/salt', 'croptopia:salt')
    
    event.remove('supplementaries:chocolate_bars', 'neapolitan:chocolate_bar')
    event.add('forge:chocolate', 'croptopia:chocolate')
    event.add('forge:chocolates', 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')
    event.add('forge:chocolate_milkshakes', 'neapolitan:chocolate_milkshake')
    event.add('forge:chocolate_icecreams', ['croptopia:chocolate_ice_cream', 'neapolitan:chocolate_ice_cream'])
    event.add('forge:strawberry_ice_creams', 'neapolitan:strawberry_ice_cream')
    event.add('forge:vanilla_ice_creams', 'neapolitan:vanilla_ice_cream')
    event.add('neapolitan:dried_vanilla_pods', 'neapolitan:dried_vanilla_pods')
    event.add('forge:fruits/pineapple', 'pineapple_delight:pineapple')
    event.add('forge:fruits/blueberry', 'byg:blueberries')
    event.add('forge:fruits/lime', 'minecraft:slime_ball')
    event.add('forge:fruits/blackberry', 'ars_nouveau:source_berry')
    event.add('forge:crops/vanilla', 'neapolitan:dried_vanilla_pods')
    event.add('forge:tuna', 'aquaculture:tuna')
    event.add('forge:juices/pineapple_juice', 'pineapple_delight:pineapple_juice')
    event.add('forge:juices/melon_juice', 'farmersdelight:melon_juice')
    event.add('forge:apple_pies', 'farmersdelight:apple_pie')
    event.add('forge:cheeseburgers', 'delightful:cheeseburger')
    event.add('forge:hamburgers', 'farmersdelight:hamburger')
    event.add('forge:dough/wheat', 'croptopia:dough')
    event.add('forge:doughs', 'create:dough')
    event.add('forge:noodles', 'farmersdelight:raw_pasta')
    event.add('forge:raw_bacon', 'croptopia:bacon')
    event.add('forge:blts', 'farmersdelight:bacon_sandwich')
    event.add('forge:milk/milk_bottle', ['croptopia:milk_bottle', 'croptopia:soy_milk', 'neapolitan:milk_bottle', 'productivebees:milk_bottle'])
    event.add('forge:cheese', 'croptopia:cheese')
    event.add('forge:milks', 'farmersdelight:milk_bottle')

    event.add('alexsmobs:mungus_spawns', 'dreamland:white_mold')
    event.add('alexsmobs:crimson_mosquito_spawns', 'dreamland:white_mold')
    event.add('alexsmobs:tarantula_hawk_spawns', 'dreamland:white_mold')
    event.add('alexsmobs:cockroach_spawns', 'dreamland:white_mold')
    event.add('alexsmobs:fly_spawns', 'dreamland:white_mold')
});

ServerEvents.tags('block', event => {
    event.add('forge:needs_netherite_tool', ['majruszsdifficulty:enderium_shard_ore', 'undergarden:depthrock_cloggrum_ore', 'undergarden:shiverstone_cloggrum_ore', 'undergarden:shiverstone_froststeel_ore', 'undergarden:depthrock_utherium_ore', 'undergarden:shiverstone_utherium_ore', 'undergarden:tremblecrust_utherium_ore', 'undergarden:depthrock_regalium_ore', 'undergarden:shiverstone_regalium_ore'])
})