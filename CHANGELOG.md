# Changelog

## Version 1.0 - Official Release

This is it, the official release of HungryHipp.us! This final version is the culmination of a bunch of work building new features, fixing bugs, and adding great new art to the game. Here's what's new:

### Features

- Major art overhaul! We now have a slick design aesthetic and a pretty new hippo head.
- Hippos now smoothly enter and leave the screen. ([#50](https://github.com/excaliburHisSheath/hangry-river-horse/pull/50))
- The labels that show each hippo's name and score have been tweaked to be more visible.
- At the end of a nose-goes event, all players that haven't tapped are knocked out. ([#52](https://github.com/excaliburHisSheath/hangry-river-horse/pull/52))
- The player with the most points gets a 👑! ([#55](https://github.com/excaliburHisSheath/hangry-river-horse/pull/55))
- The first player to tap during a nose-goes event wins the points of any players that are knocked out. ([#57](https://github.com/excaliburHisSheath/hangry-river-horse/pull/57))
- If the host or player pages disconnect from the server, they will automatically reconnect and resume play. ([#59](https://github.com/excaliburHisSheath/hangry-river-horse/pull/59))

### Fixes

- Fix an issue with the nose-goes event that would cause players to be knocked out even if they tapped in time. ([#48](https://github.com/excaliburHisSheath/hangry-river-horse/pull/48))
- If the player refreshes their browser, they no longer start over with a new hippo. ([#54](https://github.com/excaliburHisSheath/hangry-river-horse/pull/54))

## Version 0.4 - Nose-goes!

For this release we rolled back to the one-tap-earns-one-point model, and instead added a new nose-goes mechanic. Every 30 seconds a nose-goes event begins. During this event each player will see a poison marble appear on their screen. Everybody has 10 seconds to tap the marble to get rid of it. The last player to have not tapped their poison marble gets knocked out. In the next few releases we'll be iterating on this mechanic, as well as adding other ways for players to interact with each other.

### Features

- Revert the hippo feeding mechanic. ([#46](http://github.com/excaliburHisSheath/hangry-river-horse/pull/46))
- Add nose-goes mechanic. ([#47](http://github.com/excaliburHisSheath/hangry-river-horse/pull/47))

## Version 0.3 - It's Raining Marbles!

For this release we experimented with adding idle-game mechanics that would allow the game to be played over a longer period of time. While this is an interesting concept, it's not the direction that we want to take HungryHipp.us in for now. For the next release we'll be trying something new.

### Features

- Have hippos chomp on their own. Now Tapping drops marbles in front of the hippo for them to eat. (#35)
- Generate names for hippos. (#9)

### Fixes

- Fix issue where tapping on iOS devices would select text. (#33)

## Version 0.2 - Hippos for Days

This marks the first playable release of the game!

### Features

- The host display now creates a hippo for each player, including the hippo's name (a placeholder, for now) and their score (#11).
- When a player scores a point, the hippo head "chomps" (#12).
- The host display now has an attract message that tells players how to join the game (#5).

### Fixes

- Host displays now display all users, even those that joined before the host display opened (#4).
- New users (and hosts) joining the game no longer causes everything to lag severely (#30).
- More than 2 players can be actively playing at a time (#30).
- iOS devices are now able to play the game (#25).
