// index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    async store(req, res) {

        /*
         *  Desestruturação do JS
         *  Buscando o email dentro do req.body
         */

        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user)
            user = await User.create({ email });

        // const user = await User.create({ email });

        return res.json(user);
    }
}