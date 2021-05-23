const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log('Error:', err);
                res.status(422).json(err)
            });
    },
    findById: function (req, res) {
        db.Book
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log('Error:', err);
                res.status(422).json(err)
            });
    },
    create: function (req, res) {
        console.log('creating book...');
        console.log(req.body);
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log('Error:', err);
                res.status(422).json(err)
            });
    },
    update: function (req, res) {
        console.log('updating book...')
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log('Error:', err);
                res.status(422).json(err)
            });
    },
    remove: function (req, res) {
        console.log('deleting book...');
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log('Error:', err);
                res.status(422).json(err)
            });
    }
};
