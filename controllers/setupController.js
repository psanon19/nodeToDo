const ToDos = require('../models/todoModel.js');

module.exports= function (app)
{
    app.get('/api/setupToDos', function (req,res) {
        const starterToDos = [
            {
                username: 'String',
                todo: 'String',
                isDone: false
            },

            {
                username: 'String1',
                todo: 'String1',
                isDone: false
            },
            {
                username: 'String2',
                todo: 'String2',
                isDone: false
            }
        ];

        ToDos.create(starterToDos, function (err, results) {
            res.send(results)
        })
    })

};