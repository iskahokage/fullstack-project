const sequelize = require("./../db.js");

const { DataTypes } = require("sequelize");



const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "lawyer" },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activationLink: { type: DataTypes.STRING },
});

const Profile = sequelize.define("lawyer", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    rate: {type: DataTypes.FLOAT},
    experience: {type: DataTypes.INTEGER},
    lawyerLicense:{type: DataTypes.INTEGER}
});

const Favorite = sequelize.define('favorite', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating= sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    won: {type: DataTypes.INTEGER},
    lose: {type: DataTypes.INTEGER}
})

const Posts = sequelize.define("posts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    content: {type: DataTypes.TEXT},
})

User.hasOne(Profile)
Profile.belongsTo(User)

User.hasOne(Favorite)
Favorite.belongsTo(User)

Profile.hasMany(Rating)
Rating.belongsTo(Profile)

module.exports = {
    User,
    Profile,
    Favorite,
    Rating,
    Posts
}