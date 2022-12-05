ServerEvents.recipes(event => {
    event.forEachRecipe({mod: 'croptopia', input: ['croptopia:frying_pan', 'croptopia:cooking_pot']}, recipe => {
        let outputItems = recipe.json.get('result');
        if (outputItems.length > 1) { return }
        let ingredientList = recipe.json.get('ingredients')
        let ingredientListShaped = recipe.json.get('key')

        // blacklist
        if(outputItems == '{"item":"farmersdelight:hamburger","count":1}' ||
        outputItems == '{"item":"neapolitan:strawberry_ice_cream"}' ||
        outputItems == '{"item":"neapolitan:vanilla_ice_cream"}' ||
        outputItems == '{"item":"create:dough","count":1}' ||
        outputItems == '{"item":"farmersdelight:apple_pie","count":1}' ||
        outputItems == '{"item":"delightful:cheeseburger","count":1}' ||
        outputItems == '{"item":"create:bar_of_chocolate","count":4}') { return }

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")
            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"croptopia:frying_pan"}' && input !== '{"item":"croptopia:cooking_pot"}' && input !== '{"item":"croptopia:food_press"}') {
                    ingredients.push(input)
                }
            })

            if (ingredientList.length > 6) { return }
            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredients,
                "result": outputItems,
                "cookingtime": 200
            })
            event.remove({id: recipeId})
            
        } else if (recipe.type == 'minecraft:crafting_shaped') {
            let ingredientsShaped = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shaped]", "")
            for (let i = 1; i <= 6; i++) {
                let item = ingredientListShaped.get(`${i}`)
                console.log(item)
                if (item !== '{"item":"croptopia:frying_pan"}' && item !== '{"item":"croptopia:cooking_pot"}' && item !== '{"item":"croptopia:food_press"}' && item !== null) {
                    ingredientsShaped.push(item)
                }
            }

            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredientsShaped,
                "result": outputItems,
                "cookingtime": 100
            })
            event.remove({id: recipeId})
        }
    })
})