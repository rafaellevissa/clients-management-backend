const yup = require('yup');
const uuidValidate = require('uuid-validate');

const { ClientModel } = require("../models/client");
const { RouteFinderService } = require("../services/route-finder");

const clientSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
});

async function find(req, res) {
    try {
        const { name, email, phone } = req.query;

        const result = await ClientModel.query({ name, email, phone });

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function findById(req, res) {
    const { id } = req.params;

    if (!uuidValidate(id, 4)) {
        return res.status(400).json({ error: 'The Id should be an uuid' });
    }

    try {
        const result = await ClientModel.query({ id });

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function create(req, res) {
    try {
        await clientSchema.validate(req.body);

        const result = await ClientModel.create(req.body);

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function update(req, res) {
    try {
        await clientSchema.validate(req.body);

        const { id } = req.params;

        if (!uuidValidate(id, 4)) {
            return res.status(400).json({ error: 'The Id should be an uuid' });
        }

        const result = await ClientModel.update({ id, ...req.body });

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function remove(req, res) {
    const { id } = req.params;

    if (!uuidValidate(id, 4)) {
        return res.status(400).json({ error: 'The Id should be an uuid' });
    }

    try {
        const result = await ClientModel.remove({ id });

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function optimizedRoute(req, res) {
    try {
        const clients = await ClientModel.query();
        const result = RouteFinderService.findBestRoute(clients);

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove,
    optimizedRoute,
};
