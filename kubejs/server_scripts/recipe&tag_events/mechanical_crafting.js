ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mechanicalcrafting/';
    const recipes = [

        {
            mirrored: false,
            key: {
                'S': {
                    'tag': 'forge:rods/wooden',
                },
                'M': {
                    'tag': 'forge:string',
                }
            },
            pattern: [
                'SSSS',
                'SMMS',
                'SMMS',
                'SMMS'
            ],
            result: {'item': 'createsifter:string_mesh'},
            old_id: 'createsifer:string_mesh',
            id: `${id_prefix}string_mesh`
        },

        {
            mirrored: false,
            key: {
                'S': {
                    'tag': 'forge:rods/wooden',
                },
                'M': {
                    'tag': 'forge:ingots/andesite_alloy',
                }
            },
            pattern: [
                'SSSS',
                'SMMS',
                'SMMS',
                'SMMS'
            ],
            result: {'item': 'createsifter:andesite_mesh'},
            old_id: 'createsifer:andesite_mesh',
            id: `${id_prefix}andesite_mesh`
        },

        {
            mirrored: false,
            key: {
                'S': {
                    'tag': 'forge:rods/wooden',
                },
                'M': {
                    'tag': 'forge:ingots/zinc',
                }
            },
            pattern: [
                'SSSS',
                'SMMS',
                'SMMS',
                'SMMS'
            ],
            result: {'item': 'createsifter:zinc_mesh'},
            old_id: 'createsifer:zinc_mesh',
            id: `${id_prefix}zinc_mesh`
        },

        {
            mirrored: false,
            key: {
                'S': {
                    'tag': 'forge:rods/wooden',
                },
                'M': {
                    'tag': 'forge:ingots/brass',
                }
            },
            pattern: [
                'SSSS',
                'SMMS',
                'SMMS',
                'SMMS'
            ],
            result: {'item': 'createsifter:brass_mesh'},
            old_id: 'createsifer:brass_mesh',
            id: `${id_prefix}brass_mesh`
        },

        {
            mirrored: false,
            key: {
                'G': {
                    'item': 'mekanismgenerators:solar_generator',
                },
                'A': {
                    'tag': 'mekanism:alloys/infused',
                },
                'I': {
                    'tag': 'forge:ingots/iron',
                }
            },
            pattern: [
                'GAG',
                'GAG',
                ' I ',
                'III'
            ],
            result: {'item': 'mekanismgenerators:advanced_solar_generator'},
            old_id: 'mekanismgenerators:generator/advanced_solar',
            id: `${id_prefix}advanced_solar_generator`
        },

        {
            mirrored: false,
            key: {
                'P': {
                    'item': 'create:propeller',
                },
                'O': {
                    'tag': 'forge:ingots/osmium',
                },
                'A': {
                    'tag': 'mekanism:alloys/infused',
                },
                'E': {
                    'item': 'mekanism:energy_tablet',
                },
                'C': {
                    'item': 'mekanism:basic_control_circuit',
                },
            },
            pattern: [
                ' O ',
                'OPO',
                ' O ',
                ' A ',
                'ECE'
            ],
            result: {'item': 'mekanismgenerators:wind_generator'},
            old_id: 'mekanismgenerators:generator/wind',
            id: `${id_prefix}wind_generator`
        },

        {
            mirrored: false,
            key: {
                'P': {
                    'item': 'create:precision_mechanism',
                },
                'O': {
                    'tag': 'forge:ingots/osmium',
                },
                'I': {
                    'tag': 'forge:ingots/iron',
                },
                'C': {
                    'tag': 'forge:plates/copper',
                },
                'F': {
                    'item': 'minecraft:furnace',
                }
            },
            pattern: [
                'III',
                'OPO',
                'CFC'
            ],
            result: {'item': 'mekanismgenerators:heat_generator'},
            old_id: 'mekanismgenerators:generator/heat',
            id: `${id_prefix}heat_generator`
        },

        {
            mirrored: false,
            key: {
                'G': {
                    'tag': 'forge:glass_panes',
                },
                'O': {
                    'tag': 'forge:ingots/osmium',
                },
                'A': {
                    'tag': 'mekanism:alloys/infused',
                },
                'R': {
                    'item': 'minecraft:redstone',
                }
            },
            pattern: [
                'GGGGG',
                'ORARO',
                'GGGGG'
            ],
            result: {'item': 'mekanismgenerators:solar_panel'},
            old_id: 'mekanismgenerators:solar_panel',
            id: `${id_prefix}solar_panel`
        },

        {
            mirrored: false,
            key: {
                'G': {
                    'tag': 'forge:glass_panes',
                },
                'I': {
                    'tag': 'forge:ingots/steel',
                },
                'R': {
                    'item': 'minecraft:redstone',
                }
            },
            pattern: [
                'G',
                'I',
                'R',
                'I',
                'G'
            ],
            result: {'item': 'mekanism:basic_universal_cable'},
            old_id: 'mekanism:transmitter/universal_cable/basic',
            id: `${id_prefix}basic_universal_cable`
        },

        {
            mirrored: false,
            key: {
                'G': {
                    'tag': 'forge:glass_panes',
                },
                'I': {
                    'tag': 'forge:ingots/steel',
                },
                'R': {
                    'tag': 'forge:ingots/lead',
                }
            },
            pattern: [
                'G',
                'I',
                'R',
                'I',
                'G'
            ],
            result: {'item': 'mekanism:basic_pressurized_tube'},
            old_id: 'mekanism:transmitter/pressurized_tube/basic',
            id: `${id_prefix}basic_pressurized_tube`
        },

        {
            mirrored: false,
            key: {
                'G': {
                    'tag': 'forge:glass_panes',
                },
                'I': {
                    'tag': 'forge:ingots/steel',
                },
                'R': {
                    'tag': 'forge:ingots/copper',
                }
            },
            pattern: [
                'G',
                'I',
                'R',
                'I',
                'G'
            ],
            result: {'item': 'mekanism:basic_thermodynamic_conductor'},
            old_id: 'mekanism:transmitter/thermodynamic_conductor/basic',
            id: `${id_prefix}basic_thermodynamic_conductor`
        },

        {
            mirrored: false,
            key: {
                'B': {
                    'tag': 'forge:buckets/honey',
                },
                'P': {
                    'item': 'create:precision_mechanism',
                },
                'I': {
                    'tag': 'forge:ingots/cast_iron',
                },
                'F': {
                    'item': 'minecraft:furnace',
                }
            },
            pattern: [
                'IBI',
                'IPI',
                'IFI'
            ],
            result: {'item': 'productivebees:honey_generator'},
            old_id: 'productivebees:honey_generator',
            id: `${id_prefix}honey_generator`
        },
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:mechanical_crafting',
            acceptMirrored: recipe.mirrored,
            key: recipe.key,
            pattern: recipe.pattern,
            result: recipe.result
        })
        .id(recipe.id)
    });
});