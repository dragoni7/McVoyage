WorldgenEvents.remove((event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'gobber2:gobber2_ore',
            'gobber2:gobber2_ore_deepslate',
            'gobber2:gobber2_ore_nether',
            'gobber2:gobber2_ore_end',
            'gobber2:gobber2_lucky_block',
            'gobber2:gobber2_lucky_block_deepslate',
            'gobber2:gobber2_lucky_nether',
            'gobber2:gobber2_lucky_block_end',
        ];
    });
});