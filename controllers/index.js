const friendName = (req, res, next) => {
    res.json('Moy Cardenas');
};

const anotherFriendName = (req, res, next) => {
    res.json('Jaime Corral');
};

module.exports = {friendName, anotherFriendName};