// app/utils/githubHelpers.js
var axios = require('axios');

var id = "98dd53391dc212229f4a";
var sec = "87f87b57978949fd401ae594778f578c94b1fcb4";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        }))
            .then(function (info) {
                // console.log('INFO', info);
                return info.map(function (user) {
                    return user.data
                })
            })
            .catch(function (err) { console.warn('Error in getPlayersInfo: ', err) })
    }
};

module.exports = helpers;