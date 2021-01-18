const {Shop} = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}
module.exports.getAll = () => {
    return Shop.find({});
}
module.exports.getById = (id) => {
    return Shop.findById(id);
}
module.exports.updateDataId = () => {
    return Shop.updateOne({name:'shakil-111',pation:'student'});
}
module.exports.deleteDataId = (id) => {
    return Shop.deleteOne({_id:id});
}
