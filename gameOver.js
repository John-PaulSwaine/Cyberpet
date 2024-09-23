const start = document.getElementById('startGameBtn')
const feed = document.getElementById('feed')
const sleep = document.getElementById('sleep')
const drink = document.getElementById('drink')
const howl = document.getElementById('howl')
const hunt = document.getElementById('hunt')
const fish = document.getElementById('fish')
const hunger = document.getElementById('hunger')
const health = document.getElementById('health')
const thirst = document.getElementById('thirst')
const tiredness = document.getElementById('tiredness')
const polarBear = document.getElementById('polarBearBtn')
const snowLeopard = document.getElementById('snowLeopardBtn')
const wolf = document.getElementById('wolfBtn')
const reset = document.getElementById('reset')
const statBars = document.getElementById('statBars')
const polarBearImg = document.getElementById('polarBearImg')
const wolfImg = document.getElementById('wolfImg')
const snowLeopardImg = document.getElementById('snowLeopardImg')
const subheading = document.getElementById('subheading')

const hideAllActions = () => {
    hunt.style.display = 'none'
    howl.style.display = 'none'
    fish.style.display = 'none'
    start.style.display = 'none'
    feed.style.display = 'none'
    drink.style.display = 'none'
    sleep.style.display = 'none'
    reset.style.display = 'none'
    wolf.style.display = 'none'
    polarBear.style.display = 'none'
    snowLeopard.style.display = 'none'
    subheading.style.display = 'none'
}

const hideAllStats = () => {
    statBars.style.display = 'none'
}

const hideAllImages = () => {
    polarBearImg.style.display = 'none'
    wolfImg.style.display = 'none'
    snowLeopardImg.style.display = 'none'
}

polarBear.addEventListener('click', () => {
    hideAllActions()
    hideAllImages()
    fish.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    polarBearImg.style.display = 'block'
    statBars.style.display = 'block'
})

snowLeopard.addEventListener('click', () => {
    hideAllActions()
    hunt.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    snowLeopardImg.style.display = 'block'
    statBars.style.display = 'block'
})

wolf.addEventListener('click', () => {
    hideAllActions()
    hideAllImages()
    howl.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    wolfImg.style.display = 'block'
    statBars.style.display = 'block'
})

let healthvalue = 100
let hungervalue = 100
let thirstvalue = 100
let tirednessvalue = 100

const resetGame = () => {
    healthvalue = 100
    hungervalue = 100
    thirstvalue = 100
    tirednessvalue = 100
    hideAllActions()
    hideAllImages()
    hideAllStats()
    polarBear.style.display = 'block'
    snowLeopard.style.display = 'block'
    wolf.style.display = 'block'
    subheading.style.display = 'block'
}

const checkGameOver = () => {
    if (healthvalue == 0 || hungervalue == 0 || thirstvalue == 0 || tirednessvalue == 0) {
        clearInterval(statInterval)
        alert(`Game Over!!! Your pet has died!!! Press Reset Game to return to main menu!`)
        hideAllActions()
        reset.style.display = 'block'
    }
}

reset.addEventListener('click', () => {
    resetGame()
})

start.addEventListener("click", () => {
    statInterval = setInterval(() => {
        healthvalue = Math.max(healthvalue - 1, 0)
        hungervalue = Math.max(hungervalue - 1, 0)
        thirstvalue = Math.max(thirstvalue - 1, 0)
        tirednessvalue = Math.max(tirednessvalue - 1, 0)
        // decreasing and updating progress bars
        health.value = healthvalue
        hunger.value = hungervalue
        thirst.value = thirstvalue
        tiredness.value = tirednessvalue
        console.log(healthvalue)
        checkGameOver()
    }, 500)
    start.style.display = 'none'
})

// Function to increase health when other stats are increased
const increaseHealth = (amount) => {
    healthvalue = Math.min(healthvalue + amount, 100) 
    health.value = healthvalue 
}

// Functionality for feed, sleep, and drink buttons
feed.addEventListener("click", () => {
    hungervalue = Math.min(hungervalue + 5, 100) // Increase hunger level by 5, max 100
    hunger.value = hungervalue 
    thirstvalue = Math.max(thirstvalue - 3, 0) // Lose 3 thirst when feeding
    increaseHealth(4) // Increase health by 5 when feeding
})

sleep.addEventListener("click", () => {
    tirednessvalue = Math.min(tirednessvalue + 5, 100) // Increase tiredness level by 5, max 100
    tiredness.value = tirednessvalue 
    hungervalue = Math.max(hungervalue - 4, 0) // Lose 4 hunger when sleeping
    thirstvalue = Math.max(thirstvalue - 4, 0) // Lose 4 thirst when sleeping
    increaseHealth(4) // Increase health by 5 when sleeping
})

drink.addEventListener("click", () => {
    thirstvalue = Math.min(thirstvalue + 5, 100) // Increase thirst level by 5, max 100
    thirst.value = thirstvalue 
    increaseHealth(4) // Increase health by 4 when drinking
})

// Functionality for hunt, fish, and howl buttons
hunt.addEventListener("click", () => {
    hungervalue = Math.max(hungervalue - 5, 0); // Decrease hunger by 5
    thirstvalue = Math.max(thirstvalue - 5, 0); // Decrease thirst by 5
    tirednessvalue = Math.max(tirednessvalue - 5, 0); // Decrease tiredness by 5
    hunger.value = hungervalue; 
    thirst.value = thirstvalue; 
});

fish.addEventListener("click", () => {
    hungervalue = Math.max(hungervalue - 5, 0); // Decrease hunger by 5
    thirstvalue = Math.max(thirstvalue - 3, 0); // Decrease thirst by 3
    tirednessvalue = Math.max(tirednessvalue - 3, 0); // Decrease tiredness by 3
    hunger.value = hungervalue; 
    thirst.value = thirstvalue; 
});

howl.addEventListener("click", () => {
    hungervalue = Math.max(hungervalue - 3, 0); // Decrease hunger by 3
    thirstvalue = Math.max(thirstvalue - 3, 0); // Decrease thirst by 3
    tirednessvalue = Math.max(tirednessvalue - 5, 0); // Decrease tiredness by 5
    hunger.value = hungervalue; 
    tiredness.value = tirednessvalue; 
});

window.onload = () => {
    resetGame()
}
