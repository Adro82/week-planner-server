const router = require("express").Router()

const mealsRoutes = require("./meal.routes")
const recipesRoutes = require("./recipe.routes")

router.use("/meals", mealsRoutes)
router.use("/recipes", recipesRoutes)

module.exports = router