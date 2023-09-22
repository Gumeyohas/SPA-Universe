import { changeUrl } from './controls.js'
import * as el from './elements.js'

el.home.addEventListener("click", () => {
    changeUrl("../assets/home.png")
})

el.universePage.addEventListener("click", () => {
    changeUrl("../assets/universe.png")
})

el.explorationPage.addEventListener("click", () => {
    changeUrl("../assets/exploration.png")
})


