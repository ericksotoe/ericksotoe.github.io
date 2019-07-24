module.exports = {
    postContact: function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var phoneNumber = req.body.phone;
        var message = req.body.message;
        console.log("got name" + name)
        require("./data.json").push(req.body);
        res.success();
    }, 
    jasperisthebest: function (req, res) {
        res.success(require("./data.json"));
    }
}