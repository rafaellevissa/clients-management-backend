const db = require("../database");

class ClientModel {
    static async query({ id, name, email, phone } = {}) {
        let query = 'SELECT * FROM clients';

        const conditions = [];
        const values = [];

        if (id) {
            conditions.push('id = $' + (values.length + 1));
            values.push(id);
        }

        if (name) {
            conditions.push('name = $' + (values.length + 1));
            values.push(name);
        }

        if (email) {
            conditions.push('email = $' + (values.length + 1));
            values.push(email);
        }

        if (phone) {
            conditions.push('phone = $' + (values.length + 1));
            values.push(phone);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        const result = await db.query(query, values);

        return id ? result.rows[0] : result.rows;
    }

    static async create({ name, email, phone }) {
        const result = await db.query("INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *", [name, email, phone]);

        return result.rows;
    }

    static async update({ id, name, email, phone }) {
        if (!id) {
            throw new Error('ID is required for update.');
        }

        let query = 'UPDATE clients SET ';
        const setValues = [];
        const values = [];

        if (name) {
            setValues.push('name = $' + (values.length + 1));
            values.push(name);
        }

        if (email) {
            setValues.push('email = $' + (values.length + 1));
            values.push(email);
        }

        if (phone) {
            setValues.push('phone = $' + (values.length + 1));
            values.push(phone);
        }

        if (setValues.length === 0) {
            throw new Error('At least one parameter (name, email, phone) must be provided for update.');
        }

        query += setValues.join(', ') + ' WHERE id = $' + (values.length + 1) + ' RETURNING *';
        values.push(id);

        const result = await db.query(query, values);

        return result.rows[0];

    }

    static async remove({ id }) {
        if (!id) {
            throw new Error('ID is required for removal.');
        }

        const query = 'DELETE FROM clients WHERE id = $1 RETURNING *';
        const result = await db.query(query, [id]);

        return result.rows[0];
    }
}

module.exports = {
    ClientModel
};