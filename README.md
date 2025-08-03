# Memory Game

This is a Pokémon-themed memory game that uses the Pokémon API for dynamic and responsive card generation.

## API Strategy

To improve performance and eliminate loading delays:

- I made **two API calls** at the start.
- I used the first response immediately to render the cards.
- The second response was **stored**.
- On each card click, I used the stored data and triggered another API call to refill the storage.

This approach kept gameplay smooth without waiting for new data during interactions.

## Features

- **Sound Effects** — This was my first real project with integrated audio. I'm proud of how the sound effects turned out.
- **Animations** — Added lots of visual feedback for actions like card flips and wrong card picks.
- **Component Structure** — Focused on organizing my components into a clean file structure for maintainability.

## Sound Credits

- **Ding**: [freesound_community](https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=101492) via [Pixabay](https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=101492)  
- **Buzzer**: [Nhựt Bùi](https://pixabay.com/users/eritnhut1992-25656588/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582) via [Pixabay](https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20582)  
- **Woosh**: [Jurij](https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=383019) via [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=383019)  
- **Womp Womp Womp**: [freesound_community](https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6347) via [Pixabay](https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6347)
