ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/extruding/';
    
    const recipes = [
        {
            cookingtime: 100,
            exp: 1.0,
            result: {'item': 'dreamland:bowl_of_jelly'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                }],
            tab: 'meals',
            id: `${id_prefix}bowl_of_jelly`,
            old_id: 'dreamland:bowl_of_jelly'
        },

        {
            cookingtime: 100,
            exp: 1.0,
            result: {'item': 'byg:white_puffball_stew'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'byg:cooked_white_puffball_cap',
                },
                {
                    'item': 'byg:cooked_white_puffball_cap',
                }],
            tab: 'meals',
            id: `${id_prefix}white_puffball_stew`,
            old_id: 'byg:white_puffball_stew'
        },

        {
            cookingtime: 200,
            exp: 1.0,
            result: {'item': 'aquaculture:turtle_soup'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'tag': 'aquaculture:turtle',
                },
                {
                    'tag': 'forge:crops/carrot',
                }],
            tab: 'meals',
            id: `${id_prefix}sopa_de_macaco`,
            old_id: 'aquaculture:turtle_soup'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        if (recipe.container) {
            event.custom({
                type: 'farmersdelight:cooking',
                container: recipe.container,
                cookingtime: recipe.cookingtime,
                experience: recipe.exp,
                ingredients: recipe.ingredients,
                recipe_book_tab: recipe.tab,
                result: recipe.result
            })
            .id(recipe.id)
        } else {
            event.custom({
                type: 'farmersdelight:cooking',
                cookingtime: recipe.cookingtime,
                experience: recipe.exp,
                ingredients: recipe.ingredients,
                recipe_book_tab: recipe.tab,
                result: recipe.result
            })
            .id(recipe.id)
        }
    });
});