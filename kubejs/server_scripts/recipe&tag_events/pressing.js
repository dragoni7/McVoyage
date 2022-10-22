ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/pressing/';
    const recipes = [
        
    ];

    recipes.forEach((recipe) => {

        event.custom({
            type: 'create:pressing',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    });
});