const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")


const capitalizedPlanets = planets.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
    
})
    capitalizedPlanets.forEach(currentPlanet => {
        const section = document.createElement("section")
        section.textContent = currentPlanet
        planetEl.appendChild(section)
    })

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.
*/
const planetsWithE = capitalizedPlanets.filter(planet => {
    return (planet.includes("e"))
})
console.log(planetsWithE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const wordsToSentence = words.reduce(
    (currentWord, next) => currentWord + " " + next
)
console.log(wordsToSentence)