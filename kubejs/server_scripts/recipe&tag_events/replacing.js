//priority: 999
ServerEvents.recipes(event => {
    event.replaceOutput({mod: 'neapolitan'}, 'neapolitan:milk_bottle', 'farmersdelight:milk_bottle'),
    event.replaceInput({mod: 'neapolitan'}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate'),
    event.replaceInput({mod: 'mekanism'}, 'mekanism:steel_casing', 'kubejs:steel_casing')
});