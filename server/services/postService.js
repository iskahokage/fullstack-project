const {Posts} = require('./../models/model.js');
const ErrorHander = require('./../utils/ErrorHandler.js');
class PostService{
    static create = async({name, email, content})=>{
        return await Posts.create({name, email, content})
    }
    static getAll = async()=>{
        return await Posts.findAll()
    }
    static delete = async(id)=>{
        return await Posts.destroy({where: {id}})
    }
}
module.exports=PostService;