const slugify = require('slugify')


function myFunction(title) {
    return `/${slugify(title)}`
}
module.exports = myFunction