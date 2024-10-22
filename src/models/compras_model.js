import db from '../config/db.js';

const comprasSchema = new db.Schema({
    product_name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    value: {
            type: Number,
            required: true,
    },
});

const compras = db.model('Compras', comprasSchema);

export default compras;