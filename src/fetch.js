const fetchCard = async (level) => {

  console.log('fetching with', level)
  try {
    const total = level
    const randomIds = new Set()

    while (randomIds.size < 10) {
      const rand = Math.floor(Math.random() * total) + 1;
      randomIds.add(rand)
    }

    const promises = Array.from(randomIds).map(async (id) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      return {
        name: data.name,
        url: data.sprites.front_default,
      }
    })

    const cards = await Promise.all(promises)
    return cards;
  } catch (error) {
    alert('Something went wrong: ' + error.message)
    console.error(error)
    return []
  }
}

export { fetchCard }