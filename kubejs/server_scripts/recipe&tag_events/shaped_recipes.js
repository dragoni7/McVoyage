ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:/shaped/';

    const recipes = [
        {
            output: Item.of('mekanism:metallurgic_infuser', 1),
            old_id: 'mekanism:metallurgic_infuser',
            pattern: 
            ['OFO',
             'AMA', 
             'OFO'],
            key: {
                O: 'mekanism:ingot_osmium',
                F: 'minecraft:furnace',
                A: 'kubejs:infused_mechanism',
                M: 'create:brass_casing'
            },
            id:  `${id_prefix}metallurgic_infuser`
        },

        {
            output: Item.of('mekanism:pressurized_reaction_chamber', 1),
            old_id: 'mekanism:pressurized_reaction_chamber',
            pattern: 
            ['SAS',
             'CMC', 
             'BDB'],
            key: {
                S: '#forge:ingots/steel',
                A: '#mekanism:alloys/reinforced',
                C: 'mekanism:elite_control_circuit',
                B: 'mekanism:basic_chemical_tank',
                D: 'create:fluid_tank',
                M: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}pressurized_reaction_chamber`
        },

        {
            output: Item.of('mekanism:purification_chamber', 1),
            old_id: 'mekanism:purification_chamber',
            pattern: 
            ['ACA',
             'OMO', 
             'ACA'],
            key: {
                O: '#forge:ingots/osmium',
                A: '#mekanism:alloys/reinforced',
                C: 'mekanism:elite_control_circuit',
                M: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}purification_chamber`
        },

        {
            output: Item.of('mekanism:pressurized_reaction_chamber', 1),
            old_id: 'mekanism:pressurized_reaction_chamber',
            pattern: 
            ['SAS',
             'CMC', 
             'BDB'],
            key: {
                S: '#forge:ingots/steel',
                A: '#mekanism:alloys/reinforced',
                C: 'mekanism:elite_control_circuit',
                B: 'mekanism:basic_chemical_tank',
                D: 'mekanism:dynamic_tank',
                M: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}pressurized_reaction_chamber`
        },

        {
            output: Item.of('mekanism:chemical_infuser', 1),
            old_id: 'mekanism:chemical_infuser',
            pattern: 
            ['ACA',
             'TST', 
             'ACA'],
            key: {
                A: '#mekanism:alloys/infused',
                C: 'mekanism:basic_control_circuit',
                T: 'mekanism:basic_chemical_tank',
                S: 'kubejs:steel_casing'
            },
            id:  `${id_prefix}chemical_infuser`
        },

        {
            output: Item.of('mekanism:antiprotonic_nucleosynthesizer', 1),
            old_id: 'mekanism:antiprotonic_nucleosynthesizer',
            pattern: 
            ['ACA',
             'TST', 
             'ACA'],
            key: {
                A: '#mekanism:alloys/atomic',
                C: 'mekanism:ultimate_control_circuit',
                T: 'mekanism:pellet_antimatter',
                S: 'kubejs:azure_casing'
            },
            id:  `${id_prefix}antiprotonic_nucleosynthesizer`
        },

        {
            output: Item.of('mekanism:chemical_dissolution_chamber', 1),
            old_id: 'mekanism:chemical_dissolution_chamber',
            pattern: 
            ['ACA',
             'TST', 
             'ACA'],
            key: {
                A: '#forge:ingots/steel',
                C: 'mekanism:basic_chemical_tank',
                T: 'mekanism:ultimate_control_circuit',
                S: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}chemical_dissolution_chamber`
        },

        {
            output: Item.of('mekanism:chemical_washer', 1),
            old_id: 'mekanism:chemical_washer',
            pattern: 
            ['ACA',
             'TST', 
             'AGA'],
            key: {
                A: '#forge:ingots/bronze',
                C: 'create:fluid_tank',
                T: 'mekanism:ultimate_control_circuit',
                S: 'kubejs:obsidian_casing',
                G: 'mekanism:basic_chemical_tank'
            },
            id:  `${id_prefix}chemical_washer`
        },

        {
            output: Item.of('mekanism:enrichment_chamber', 1),
            old_id: 'mekanism:enrichment_chamber',
            pattern: 
            ['ACA',
             'TST', 
             'AGA'],
            key: {
                A: 'minecraft:redstone',
                C: 'mekanism:basic_control_circuit',
                T: '#forge:ingots/iron',
                S: 'kubejs:steel_casing',
                G: 'kubejs:infused_mechanism'
            },
            id:  `${id_prefix}enrichment_chamber`
        },

        {
            output: Item.of('mekanism:resistive_heater', 1),
            old_id: 'mekanism:resistive_heater',
            pattern: 
            ['APA',
             'RSR', 
             'AGA'],
            key: {
                A: '#forge:ingots/tin',
                R: 'minecraft:redstone',
                P: 'create:precision_mechanism',
                S: 'kubejs:steel_casing',
                G: 'mekanism:energy_tablet'
            },
            id:  `${id_prefix}resistive_heater`
        },

        {
            output: Item.of('mekanism:laser', 1),
            old_id: 'mekanism:laser',
            pattern: 
            ['AE ',
             'ASD', 
             'AE '],
            key: {
                A: '#mekanism:alloys/reinforced',
                S: 'kubejs:steel_casing',
                E: 'mekanism:energy_tablet',
                D: 'minecraft:diamond'
            },
            id:  `${id_prefix}laser`
        },

        {
            output: Item.of('mekanism:electric_pump', 1),
            old_id: 'mekanism:electric_pump',
            pattern: 
            [' P ',
             'ASA', 
             'III'],
            key: {
                I: '#forge:ingots/osmium',
                S: 'kubejs:steel_casing',
                A: '#mekanism:alloys/infused',
                P: 'create:fluid_pipe'
            },
            id:  `${id_prefix}electric_pump`
        },

        {
            output: Item.of('mekanism:pigment_extractor', 1),
            old_id: 'mekanism:pigment_extractor',
            pattern: 
            ['ACA',
             'RSR', 
             'ACA'],
            key: {
                C: 'mekanism:basic_control_circuit',
                S: 'kubejs:steel_casing',
                A: 'minecraft:redstone',
                R: 'create:cogwheel'
            },
            id:  `${id_prefix}pigment_extractor`
        },

        {
            output: Item.of('mekanism:basic_energy_cube', 1),
            old_id: 'mekanism:energy_cube/basic',
            pattern: 
            ['ACA',
             'RSR', 
             'ACA'],
            key: {
                C: 'mekanism:energy_tablet',
                S: 'kubejs:steel_casing',
                A: 'minecraft:redstone',
                R: '#forge:ingots/copper'
            },
            id:  `${id_prefix}basic_energy_cube`
        },

        {
            output: Item.of('mekanism:seismic_vibrator', 1),
            old_id: 'mekanism:seismic_vibrator',
            pattern: 
            ['ACA',
             'RSR', 
             'AAA'],
            key: {
                C: 'minecraft:lapis_lazuli',
                S: 'kubejs:steel_casing',
                A: '#forge:ingots/tin',
                R: 'mekanism:basic_control_circuit'
            },
            id:  `${id_prefix}seismic_vibrator`
        },

        {
            output: Item.of('mekanismgenerators:fusion_reactor_frame', 4),
            old_id: 'mekanismgenerators:reactor/frame',
            pattern: 
            ['AIA',
             'ISI', 
             'AIA'],
            key: {
                I: 'mekanism:pellet_polonium',
                A: 'mekanism:alloy_atomic',
                S: 'kubejs:steel_casing'
            },
            id:  `${id_prefix}fusion_reactor_frame`
        },

        {
            output: Item.of('mekanismgenerators:fission_reactor_casing', 4),
            old_id: 'mekanismgenerators:fission_reactor/casing',
            pattern: 
            [' I ',
             'ISI', 
             ' I '],
            key: {
                I: '#forge:ingots/lead',
                S: 'kubejs:steel_casing'
            },
            id:  `${id_prefix}fission_reactor_casing`
        },

        {
            output: Item.of('mekanismgenerators:gas_burning_generator', 1),
            old_id: 'mekanismgenerators:generator/gas_burning',
            pattern: 
            ['ACA',
             'TST', 
             'ACA'],
            key: {
                A: '#forge:ingots/osmium',
                C: '#mekanism:alloys/infused',
                S: 'kubejs:steel_casing',
                T: 'mekanism:electrolytic_core'
            },
            id:  `${id_prefix}gas_burning_generator`
        },

        {
            output: Item.of('mekanism:rotary_condensentrator', 1),
            old_id: 'mekanism:rotary_condensentrator',
            pattern: 
            ['AMA',
             'GST', 
             'ACA'],
            key: {
                A: '#forge:glass',
                C: 'mekanism:basic_control_circuit',
                M: 'create:precision_mechanism',
                S: 'kubejs:obsidian_casing',
                T: 'create:fluid_tank',
                G: 'mekanism:basic_chemical_tank'
            },
            id:  `${id_prefix}rotary_condensentrator`
        },

        {
            output: Item.of('ae2:item_cell_housing', 1),
            old_id: 'ae2:network/cells/item_cell_housing',
            pattern: 
            ['GRG',
             'R R', 
             'CCC'],
            key: {
                G: 'ae2:quartz_glass',
                R: 'minecraft:redstone',
                C: '#forge:ingots/steel'
            },
            id:  `${id_prefix}item_cell_housing`
        },

        {
            output: 'spirit:soul_pedestal',
            old_id: 'spirit:crafting/soul_pedestal',
            pattern: 
            ['IBI',
             'ACA', 
             'SSS'],
            key: {
                I: 'spirit:soul_steel_ingot',
                B: 'spirit:soul_steel_block',
                A: 'quark:soul_bead',
                C: 'spirit:crystal_pedestal',
                S: 'spirit:soul_slate',
            },
            id:  `${id_prefix}soul_pedestal`
        },

        {
            output: 'mekanism:meka_tool',
            old_id: 'mekanism:meka_tool',
            pattern: 
            ['CWC',
             'HAH', 
             'PIP'],
            key: {
                C: 'mekanism:ultimate_control_circuit',
                W: 'alexsmobs:void_worm_beak',
                H: 'mekanism:hdpe_sheet',
                A: 'mekanism:atomic_disassembler',
                P: 'mekanism:pellet_polonium',
                I: 'mekanism:basic_induction_cell'
            },
            id:  `${id_prefix}meka_tool`
        },

        {
            output: 'meetyourfight:fossil_bait',
            old_id: 'meetyourfight:fossil_bait',
            pattern: 
            ['WEW',
             'EFE', 
             'WSW'],
            key: {
                W: 'minecraft:nether_wart',
                E: 'kubejs:infernal_essence',
                F: '#forge:raw_fishes',
                S: 'minecraft:bone_block'
            },
            id:  `${id_prefix}fossil_bait`
        },

        {
            output: 'meetyourfight:haunted_bell',
            old_id: 'meetyourfight:haunted_bell',
            pattern: 
            ['WEW',
             'EFE', 
             'WTW'],
            key: {
                W: 'spirit:soul_powder',
                E: 'kubejs:infernal_essence',
                F: 'minecraft:bell',
                T: 'meetyourfight:mossy_tooth'
            },
            id:  `${id_prefix}haunted_bell`
        },

        {
            output: 'meetyourfight:devils_ante',
            old_id: 'meetyourfight:devils_ante',
            pattern: 
            ['WEW',
             'EFE', 
             'WTW'],
            key: {
                W: '#forge:gems/rose_quartz',
                E: 'kubejs:infernal_essence',
                F: 'createdeco:netherite_coin',
                T: 'meetyourfight:phantoplasm'
            },
            id:  `${id_prefix}devils_ante`
        },

        {
            output: 'ae2:inscriber',
            old_id: 'ae2:network/blocks/inscribers',
            pattern: 
            ['APA',
             'MSM', 
             'APA'],
            key: {
                A: '#mekanism:alloys/reinforced',
                P: 'create:precision_mechanism',
                M: 'kubejs:infused_mechanism',
                S: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}inscriber`
        },

        {
            output: 'ae2:charger',
            old_id: 'ae2:network/blocks/crystal_processing_charger',
            pattern: 
            ['APA',
             'PSP', 
             'APA'],
            key: {
                A: '#mekanism:alloys/reinforced',
                P: '#forge:plates/copper',
                S: 'kubejs:obsidian_casing'
            },
            id:  `${id_prefix}charger`
        },

        {
            output: 'ae2:molecular_assembler',
            old_id: 'ae2:network/crafting/molecular_assembler',
            pattern: 
            ['IGI',
             'ACF', 
             'IGI'],
            key: {
                I: '#forge:ingots/refined_obsidian',
                C: 'mekanism:elite_control_circuit',
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core'
            },
            id:  `${id_prefix}molecular_assembler`
        },

        {
            output: 'ae2:condenser',
            old_id: 'ae2:network/blocks/io_condenser',
            pattern: 
            ['IGI',
             'GDG', 
             'IGI'],
            key: {
                I: '#forge:ingots/tyrian_steel',
                D: '#forge:dusts/ender_pearl',
                G: 'kubejs:azure_casing'
            },
            id:  `${id_prefix}condenser`
        },

        {
            output: 'ae2:interface',
            old_id: 'ae2:network/blocks/interfaces_interface',
            pattern: 
            ['IGI',
             'ACF', 
             'IGI'],
            key: {
                I: '#forge:ingots/iron',
                C: 'mekanism:basic_control_circuit',
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core'
            },
            id:  `${id_prefix}interface`
        },

        {
            output: 'megacells:cell_component_1m',
            old_id: 'megacells:cell_component_1m',
            pattern: 
            ['DPD',
             'SGS', 
             'DSD'],
            key: {
                P: 'ae2:calculation_processor',
                D: '#forge:dusts/azure_silver',
                S: 'ae2:cell_component_256k',
                G: 'ae2:quartz_vibrant_glass'
            },
            id:  `${id_prefix}cell_component_1m`
        },

        {
            output: 'megacells:cell_component_4m',
            old_id: 'megacells:cell_component_4m',
            pattern: 
            ['DPD',
             'SGS', 
             'DSD'],
            key: {
                P: 'ae2:calculation_processor',
                D: '#forge:dusts/azure_electrum',
                S: 'megacells:cell_component_1m',
                G: 'ae2:quartz_vibrant_glass'
            },
            id:  `${id_prefix}cell_component_4m`
        },

        {
            output: 'megacells:cell_component_16m',
            old_id: 'megacells:cell_component_16m',
            pattern: 
            ['DPD',
             'SGS', 
             'DSD'],
            key: {
                P: 'ae2:calculation_processor',
                D: '#forge:dusts/starmetal',
                S: 'megacells:cell_component_4m',
                G: 'ae2:quartz_vibrant_glass'
            },
            id:  `${id_prefix}cell_component_16m`
        },

        {
            output: 'megacells:cell_component_64m',
            old_id: 'megacells:cell_component_64m',
            pattern: 
            ['DPD',
             'SGS', 
             'DSD'],
            key: {
                P: 'ae2:calculation_processor',
                D: 'ae2:matter_ball',
                S: 'megacells:cell_component_16m',
                G: 'majruszsdifficulty:enderium_ingot'
            },
            id:  `${id_prefix}cell_component_64m`
        },

        {
            output: 'megacells:cell_component_256m',
            old_id: 'megacells:cell_component_256m',
            pattern: 
            ['DPD',
             'SGS', 
             'DSD'],
            key: {
                P: 'ae2:calculation_processor',
                D: 'ae2:matter_ball',
                S: 'megacells:cell_component_64m',
                G: 'ae2:quantum_entangled_singularity'
            },
            id:  `${id_prefix}cell_component_256m`
        },

        {
            output: Item.of('ae2:fluix_glass_cable', 5),
            old_id: 'ae2:network/cables/glass_fluix',
            pattern: 
            [' F ',
             'DQD', 
             ' F '],
            key: {
                Q: 'ae2:quartz_fiber',
                F: '#forge:gems/fluix',
                D: '#forge:dusts/refined_obsidian'

            },
            id:  `${id_prefix}fluix_glass_cable`
        },

        {
            output: 'ae2:quartz_vibrant_glass',
            old_id: 'ae2:decorative/quartz_vibrant_glass',
            pattern: 
            ['   ',
             'DGD', 
             '   '],
            key: {
                G: 'ae2:quartz_glass',
                D: '#forge:ingots/refined_glowstone'

            },
            id:  `${id_prefix}quartz_vibrant_glass`
        },

        {
            output: Item.of('ae2:semi_dark_monitor', 3),
            old_id: 'ae2:network/parts/panels_semi_dark_monitor',
            pattern: 
            [' CG',
             'IRV', 
             '  G'],
            key: {
                G: 'ae2:quartz_glass',
                V: 'ae2:quartz_vibrant_glass',
                R: 'minecraft:redstone',
                I: '#forge:ingots/osmium',
                C: 'mekanism:basic_control_circuit'

            },
            id:  `${id_prefix}panels_semi_dark_monitor`
        },

        {
            output: 'ae2:energy_cell',
            old_id: 'ae2:network/blocks/energy_energy_cell',
            pattern: 
            ['CDC',
             'DTD', 
             'CDC'],
            key: {
                C: '#forge:gems/certus_quartz',
                D: '#forge:dusts/fluix',
                T: 'mekanism:energy_tablet'
            },
            id:  `${id_prefix}energy_cell`
        },

        {
            output: 'mekanism:module_gravitational_modulating_unit',
            old_id: 'mekanism:module_gravitational_modulating_unit',
            pattern: 
            ['AIA',
             'UMU', 
             'PPP'],
            key: {
                A: 'mekanism:alloy_atomic',
                I: 'kubejs:impossible_compound',
                U: 'mekanism:ultimate_induction_provider',
                M: 'mekanism:module_base',
                P: 'mekanism:pellet_antimatter'
            },
            id:  `${id_prefix}module_gravitational_modulating_unit`
        },

        {
            output: 'ae2:quartz_growth_accelerator',
            old_id: 'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
            pattern: 
            ['IFI',
             'GMG', 
             'IFI'],
            key: {
                I: '#forge:ingots/refined_glowstone',
                M: 'kubejs:obsidian_casing',
                G: 'ae2:quartz_glass',
                F: 'ae2:fluix_glass_cable'
            },
            id:  `${id_prefix}quartz_growth_accelerator`
        },

        {
            output: 'ae2:wireless_access_point',
            old_id: 'ae2:network/wireless_access_point',
            pattern: 
            [' W ',
             'PCP', 
             ' F '],
            key: {
                W: 'ae2:wireless_receiver',
                P: 'ae2:calculation_processor',
                C: 'kubejs:azure_casing',
                F: 'ae2:fluix_glass_cable'
            },
            id:  `${id_prefix}wireless_access_point`
        },

        {
            output: 'ae2:io_port',
            old_id: 'ae2:network/blocks/io_port',
            pattern: 
            ['GGG',
             'DCD', 
             'IPI'],
            key: {
                G: '#forge:glass',
                P: 'ae2:logic_processor',
                D: 'ae2:drive',
                C: 'kubejs:obsidian_casing',
                I: '#forge:ingots/iron'
            },
            id:  `${id_prefix}io_port`
        },

        {
            output: 'meetyourfight:ace_of_iron',
            old_id: 'meetyourfight:ace_of_iron',
            pattern: 
            ['IBI',
             'EFE', 
             'IBI'],
            key: {
                F: 'meetyourfight:fortunes_favor',
                I: '#forge:ingots/iron',
                E: '#forge:ingots/azure_electrum',
                B: '#forge:storage_blocks/knightmetal'
            },
            id:  `${id_prefix}ace_of_iron`
        },

        {
            output: 'silentgear:hammer_blueprint',
            old_id: 'silentgear:hammer_blueprint',
            pattern: 
            ['BBB',
             'BBB', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: '#forge:ingots/cloggrum'
            },
            id:  `${id_prefix}hammer_blueprint`
        },

        {
            output: 'silentgear:excavator_blueprint',
            old_id: 'silentgear:excavator_blueprint',
            pattern: 
            ['B B',
             'BBB', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: '#forge:ingots/cloggrum'
            },
            id:  `${id_prefix}excavator_blueprint`
        },

        {
            output: 'silentgear:prospector_hammer_blueprint',
            old_id: 'silentgear:prospector_hammer_blueprint',
            pattern: 
            ['BB ',
             ' I ', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: '#forge:ingots/crimson_iron'
            },
            id:  `${id_prefix}prospector_hammer_blueprint`
        },

        {
            output: 'silentgear:lining_blueprint',
            old_id: 'silentgear:lining_blueprint',
            pattern: 
            ['BBB',
             'CCS', 
             'S  '],
            key: {
                B: 'silentgear:blueprint_paper',
                C: 'the_bumblezone:sticky_honey_residue',
                S: 'minecraft:string'
            },
            id:  `${id_prefix}lining_blueprint`
        },

        {
            output: 'silentgear:katana_blueprint',
            old_id: 'silentgear:katana_blueprint',
            pattern: 
            ['BB ',
             'B  ', 
             'I  '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: 'minecraft:diamond'
            },
            id:  `${id_prefix}katana_blueprint`
        },

        {
            output: 'meetyourfight:caged_heart',
            old_id: 'meetyourfight:caged_heart',
            pattern: 
            ['BIB',
             'BIB', 
             ' T '],
            key: {
                B: '#forge:bones',
                I: '#forge:ingots/azure_electrum',
                T: 'meetyourfight:mossy_tooth'
            },
            id:  `${id_prefix}caged_heart`
        },

        {
            output: 'meetyourfight:spectres_eye',
            old_id: 'meetyourfight:spectres_eye',
            pattern: 
            ['III',
             'EPE', 
             'III'],
            key: {
                E: 'minecraft:ender_eye',
                I: '#forge:ingots/blaze_gold',
                P: 'meetyourfight:phantoplasm'
            },
            id:  `${id_prefix}spectres_eye`
        },

        {
            output: 'minecraft:ender_eye',
            old_id: 'minecraft:ender_eye',
            pattern: 
            ['   ',
             'CPB', 
             '   '],
            key: {
                B: 'minecraft:blaze_powder',
                C: 'the_bumblezone:honey_crystal_shards',
                P: 'minecraft:ender_pearl'
            },
            id:  `${id_prefix}ender_eye`
        },

        {
            output: 'ars_nouveau:ritual_wilden_summon',
            old_id: 'ars_nouveau:ritual_wilden_summon',
            pattern: 
            ['IWI',
             'WLW', 
             'IWI'],
            key: {
                I: '#forge:ingots/cloggrum',
                L: 'ars_nouveau:purple_archwood_log',
                W: '#ars_nouveau:wilden_drop'
            },
            id:  `${id_prefix}ritual_wilden_summon`
        },

        {
            output: 'scalinghealth:heart_crystal',
            old_id: 'scalinghealth:heart_crystal',
            pattern: 
            ['SSS',
             'SIS', 
             'SSS'],
            key: {
                S: 'scalinghealth:heart_crystal_shard',
                I: '#forge:ingots/netherite'
            },
            id:  `${id_prefix}heart_crystal`
        },

        {
            output: Item.of('scalinghealth:bandages', 2),
            old_id: 'scalinghealth:bandages',
            pattern: 
            ['PPP',
             'GGG', 
             ' I '],
            key: {
                G: 'minecraft:glistering_melon_slice',
                P: '#forge:paper',
                I: 'kubejs:infernal_essence'
            },
            id:  `${id_prefix}bandages`
        },

        {
            output: Item.of('scalinghealth:medkit', 2),
            old_id: 'scalinghealth:medkit',
            pattern: 
            ['SSS',
             'BGB', 
             'III'],
            key: {
                G: 'minecraft:glistering_melon_slice',
                S: 'supplementaries:soap',
                B: 'scalinghealth:bandages',
                I: 'kubejs:infernal_essence'
            },
            id:  `${id_prefix}medkit`
        },

        // NEW RECIPES

        {
            output: 'endrem:evil_eye',
            pattern: 
            ['MSM',
             'SES', 
             'MSM'],
            key: {
                M: 'ars_nouveau:manipulation_essence',
                E: 'minecraft:ender_eye',
                S: 'undergarden:masticator_scales'
            },
            id:  `${id_prefix}evil_eye`
        },

        {
            output: 'kubejs:masticator_bait',
            pattern: 
            ['VUV',
             'UBU', 
             'VUV'],
            key: {
                B: 'farmersdelight:minced_beef',
                V: 'deeperdarker:sculk_vines',
                U: 'undergarden:utherium_crystal'
            },
            id:  `${id_prefix}masticator_bait`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});