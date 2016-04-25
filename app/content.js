var app = require('express');
var router = app.Router();
var url = require('url');


module.exports = function(app, connection, io) {

    var classification = {
        male: [
            'Tryndamere', 'Gragas', 'Ryze', 'Olaf', 'Viktor', 'Garen', 'Singed', 'Zed',
            'Darius', 'Vayne', 'Varus', 'Jayce', 'Pantheon', 'Corki', 'Azir', 'Graves', 'Malzahar', 'Kayle', 'LeeSin', 'Nunu',
            'TwistedFate', 'Jax', 'Vladimir', 'Quinn', 'Lucian', 'Yasuo', 'Draven', 'Swain', 'Talon', 'Ekko', 'Zilean', 'Braum',
            'XinZhao', 'MasterYi', 'Taric', 'Gangplank', 'JarvanIV', 'Ezreal', 'Udyr'
        ],
        female: [
            'Cassiopeia', 'Poppy', 'Annie', 'Karma', 'Lux', 'Ahri', 'Lissandra', 'Morgana', 'Evelynn', 'Sona', 'Katarina',
            'Lulu', 'Ashe', 'Leona', 'Syndra', 'Riven', 'Caitlyn', 'Nidalee', 'Vi', 'Irelia', 'Elise', 'Shyvana', 'Kalista',
            'Diana', 'Sejuani', 'Akali', 'Sivir', 'Janna', 'Orianna', 'Fiora', 'Leblanc', 'Jinx', 'MissFortune', 'Zyra', 'Nami'
        ],
        creature: [
            'Anivia', 'Maokai', 'Fizz', 'Heimerdinger', 'Rumble', 'Mordekaiser', 'KogMaw', 'Karthus', 'Alistar', 'Khazix',
            'Galio', 'Kennen', 'Veigar', 'Bard', 'Gnar', 'Volibear', 'DrMundo', 'Brand', 'Zac', 'RekSai', 'Tristana', 'Hecarim',
            'Rengar', 'Warwick', 'Skarner', 'Malphite', 'Xerath', 'Teemo', 'Nasus', 'Renekton', 'Shaco', 'Ziggs', 'FiddleSticks',
            'Rammus', 'Chogath', 'Soraka', 'Nocturne', 'Yorick', 'Urgot', 'MonkeyKing', 'Blitzcrank', 'Shen', 'Twitch', 'Amumu',
            'Trundle', 'Kassadin', 'Velkoz', 'Aatrox', 'Thresh', 'Sion', 'Nautilus'
        ]
    };


    io.on('connection', function (socket) {
        socket.emit('courses', {
            data: classification
        });
    });
    
/*
    connection.query('SELECT email from students',  function (err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (i = 0; i < rows.length; i++) {
            data.push(rows[i].email);
        }
        io.on('connection', function (socket) {
            socket.emit('courses', {
                data: data
            });
        });
    });*/

    app.get('/profile',function(req, res){
        res.render('profile.ejs');
    });

};