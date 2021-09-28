const AdminBro = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize')
const AdminBroExpress = require('@admin-bro/express');
const db = require('./db.js')
AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
    databases: [db],
    rootPath: '/admin',

})

const adminRouter = AdminBroExpress.buildRouter(adminBro);

module.exports = {adminBro, adminRouter};