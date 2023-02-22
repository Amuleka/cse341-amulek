const awesomeFunction = (req, res, next) => {
    res.json('Moy Cardenas');
};

const returnanotherPerson = (req, res, next) => {
    res.json('Jaime Corral');
};

module.exports = {awesomeFunction, returnanotherPerson};