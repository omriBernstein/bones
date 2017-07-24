
const {TEXT} = require('sequelize')

module.exports = db => db.define('thoughts', {
  text: TEXT
})

module.exports.associations = (Thought, {User}) => {
  Thought.belongsTo(User)
}
