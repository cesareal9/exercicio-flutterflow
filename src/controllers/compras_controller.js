import Compras from '../models/compras_model.js';

export const store = async (req, res) => {
    try {
        const content = await Compras.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Compras.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Compras.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Compras.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};