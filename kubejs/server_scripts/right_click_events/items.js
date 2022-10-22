ItemEvents.rightClicked(event => {
    if (event.item.id == 'kubejs:masticator_bait') {
        event.player.getMainHandItem().count--;
        let player = event.player;
        event.server.runCommand(
            '/summon undergarden:masticator ' + player.x + ' ' + player.y + ' ' + player.z
        );
    }
});