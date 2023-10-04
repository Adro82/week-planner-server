const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
    {
        nombre: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'Meals'
            },
            //required: [true, 'La nombre es obligatoria.'],
            //unique: true
        },
        tipo: {
            type: String,
            required: [true, 'El tipo es obligatorio.'],
        },
        ingredientes: {
            type: [String],
            minlength: [5, 'La descripción debe tener min. 5 caracteres.'],
            required: [true, 'Los ingredientes son necesarios'],
        },
        pasos: {
            //type: [{ description: String, }],
            type: [String],
            minlength: [5, 'La receta debe tener min. 5 pasos.'],
            required: [true, 'Los pasos de la receta son obligatorios.'],
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

const Recipe = model("Recipe", recipeSchema)

module.exports = Recipe;