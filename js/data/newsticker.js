const NEWSTICKER_LINES = [
    "Hyperinflation claims another victim.",
    "Blind notation is the best, British scientists say.",
    "This newsticker is softca",
    "Coming next update: the Ultimate challenge! Enter all Meta-Challenges at once and get to F308 matter to beat it!",
    "Matter Dimensions: rated yellow by Hevipelle.",
    "CLICK HERE TO GET 0.000000001 MATTER FOR FREE!!!",
    "The update is always 5 hours ago.",
]

const CONDITIONAL_NEWSTICKER_LINES = [
    [function() { return !player.time_started }, "Let It Go!"],
    [function() { return !player.time_started }, "To start the game, buy 1st Matter Dimension."],
    [function() { return player.matter.gt(1) && player.matter.lt(2) }, "You produced 1 Matter! Apparently, it is a thing."],
    [function() { return player.upgrades['g40'].is_active() }, "Chuck Norris can beat Photonic Challenge 1 in -7 milliseconds."],
    [function() { return player.upgrades['g40'].is_active() }, "New Game Minus: you are stuck in Photonic Challenge 2."],
    [function() { return player.upgrades['n33'].is_active() }, "The Gravitonic challenge machine is temporarily out of order."],
    [function() { return player.unlocked_vacuumic }, "Remember to expand your limit before going to sleep!"],
    [function() { return player.unlocked_vacuumic }, "In space, no one can hear you click."],
]