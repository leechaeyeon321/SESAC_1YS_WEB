const Sequelize = require("sequelize");
Sequelize.INTEGER
const config = require("../config/config.json")["development"];
//json 파일은 확장자를 적어줘야 함.

//config에 담겨 있는 것
// config = {
//         "host": "localhost",
//         "database": "SESAC_TEST",
//         "username": "user",
//         "password": "Mghgh5483!!",
//         "dialect": "mysql" 
// }

const db = {};

const sequelize = new Sequelize(
    config.database, 
    config.username,
    config.password,
    config
); //just 인자 4개

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize, Sequelize);

db.User = require('./User')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);
db.Payment = require('./Payment')(sequelize, Sequelize);

db.User.hasMany(db, Payment, {
    foreignKey : "user_id", //payment table에 있는 컬럼 아이디
    sourceKey: "user_id",
    onDelete: "cascade"
});

db.Payment.belongsTo(db.User,{ // user라는 테이블을 참조하고 있다는 뜻
    foreignKey : "user_id",
    sourceKey: "user_id",
    onDelete: "cascade"
});

db.Payment.hasMany(db.Payment, {
    foreignKey : "product_id",
    sourceKey: "product_id",
    onDelete: "cascade"
})

//현재 db에 담겨 있는 것
// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize,
//     "Visitor": "Visitor.js에서 return 받은 값"
// }

module.exports = db;