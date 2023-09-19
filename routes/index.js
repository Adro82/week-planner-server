const router = require("express").Router()

const mealsRoutes = require("./meal.routes")
router.use("/meals", mealsRoutes)

module.exports = router