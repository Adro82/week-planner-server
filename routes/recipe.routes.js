const router = require("express").Router()
const { response } = require("express")
const Recipes = require("./../models/Recipes.model")
const Meals = require("./../models/Meals.model")

router.get("/getallrecipes", (req, res, next) => {

    Recipes
        .find()
        .sort({ nombre: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/getOneRecipe/:recipe_id", (req, res, next) => {

    const { recipe_id } = req.params

    Recipes
        .findById(recipe_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post("/addRecipe", (req, res, next) => {

    const { nombre, tipo, ingredientes, pasos, imageUrl, owner } = req.body

    Recipes
        .create({ nombre, tipo, ingredientes, pasos, imageUrl, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})


// router.post("/addRecipe", (req, res, next) => {

//     const { nombre, tipo, ingredientes, pasos, imageUrl } = req.body

//     Meals
//         .find({ nombre: { $in: nombre } })
//         .then(meals => {
//             const mealIds = meals.map(meal => meal._id)
//             console.log(mealIds);

//             Recipes
//                 .create({ nombre: mealIds, tipo, ingredientes, pasos, imageUrl })
//                 .then(response => res.json(response))
//                 .catch(err => next(err));
//             console.log(nombre)
//         })
//         .catch(err => next(err));
// });



module.exports = router;