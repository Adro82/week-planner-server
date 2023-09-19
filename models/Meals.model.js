const { Schema, model } = require("mongoose");

const mealSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'La nombre es obligatoria.'],
            unique: true
        },
        tipo: {
            type: String,
            required: [true, 'El tipo es obligatorio.'],
        },
        ingredientes: {
            type: String,
            minlength: [5, 'La descripción debe tener min. 5 caracteres.'],
            required: [true, 'La descripción es obligatoria.'],
        },
        receta: {
            type: String,
            minlength: [5, 'La receta debe tener min. 5 pasos.'],
            required: [true, 'La receta es obligatoria.'],
        },
        imageUrl: {
            type: String,
            default: 'https://beanbased.es/wp-content/uploads/2022/04/cropped-image0.jpeg',
            set: value => value === '' ? 'https://beanbased.es/wp-content/uploads/2022/04/cropped-image0.jpeg' : value,
            required: [true, 'La imagen es obligatoria.'],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Meals = model("Meals", mealSchema)

module.exports = Meals;