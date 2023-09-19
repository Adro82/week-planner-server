const router = require("express").Router()

const { response } = require("express");
const Meals = require('./../models/Meals.model')

router.get("/getAllMeals", (req, res, next) => {
    Meals
        .find()
        .sort({ title: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
});

router.get("/getMeal/:meal_id", (req, res, next) => {

    const { meal_id } = req.params

    Meals
        .findById(meal_id)
        .then(response => res.json(response))
        .catch(err => next(err))
});

router.post("/addMeal", (req, res, next) => {
    const { nombre, tipo, ingredientes, receta, imageUrl } = req.body

    Meals
        .create({ nombre, tipo, ingredientes, receta, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router;