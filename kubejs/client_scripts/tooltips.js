ItemEvents.tooltip((event) => {
    const spellBooks = [
        'ars_nouveau:novice_spell_book',
        'ars_nouveau:apprentice_spell_book',
        'ars_nouveau:archmage_spell_book'
    ]
    const toolTips = [
        {
            items: [
                'kubejs:boss_essence'
            ],
            text: [Text.of('Dropped by slain bosses').lightPurple()]
        },

        {
            items: [
                'kubejs:infused_component'
            ],
            text: [Text.of('Essence empowered mechanism').darkPurple()]
        },

        {
            items: [
                'kubejs:infernal_essence'
            ],
            text: [Text.of('Dropped by infernal foes').red()]
        },

        {
            items: [
                'kubejs:impossible_compound'
            ],
            text: [Text.of('Physics defying molecule').yellow()]
        },

        {
            items: [
                'kubejs:masticator_bait'
            ],
            text: [Text.of('Right click to summon the Masticator').green()]
        },

        {
            items: [
                'quark:soul_bead'
            ],
            text: [Text.of('Lost soul, compressed into a bead').yellow()]
        },

        {
            items: [
                'meetyourfight:phantoplasm'
            ],
            text: [Text.of('Dropped by Bellringer').yellow()]
        },

        {
            items: [
                'meetyourfight:fortunes_favor'
            ],
            text: [Text.of('Dropped by Dame Fortuna').yellow()]
        },

        {
            items: [
                'meetyourfight:mossy_tooth'
            ],
            text: [Text.of('Dropped by Swampjaw').yellow()]
        }
    ]

    spellBooks.forEach((book) => {
        event.add(book, Text.of('Press c to open').yellow());
    })

    toolTips.forEach((toolTip) => {
        event.add(toolTip.items, toolTip.text);
    })
})