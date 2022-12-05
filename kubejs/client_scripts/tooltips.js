ItemEvents.tooltip((event) => {
    const items = [
        {
            items: [
                'kubejs:boss_essence'
            ],
            text: [Text.of('Rewarded by slaining bosses').lightPurple()]
        },

        {
            items: [
                'silentgear:azure_silver_ingot'
            ],
            text: [Text.of('Found in the End').lightPurple()]
        },

        {
            items: [
                'kubejs:infused_component'
            ],
            text: [Text.of('Living mechanism').darkPurple()]
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
        },

        {
            items: [
                'undergarden:cloggrum_ingot',
                'undergarden:froststeel_ingot',
                'undergarden:forgotten_ingot',
                'undergarden:utherium_crystal',
                'undergarden:regalium_crystal'
            ],
            text: [Text.of('Found in the Undergarden').green()]
        },

        {
            items: [
                'undergarden:catalyst'
            ],
            text: [Text.of('Powerful enough to open a portal from a stonebrick frame').green()]
        },

        {
            items: [
                'twilightforest:borer_essence'
            ],
            text: [Text.of('Dropped by tower borer and ghastguards').yellow()]
        }
    ]

    items.forEach((toolTip) => {
        event.add(toolTip.items, toolTip.text);
    })
})