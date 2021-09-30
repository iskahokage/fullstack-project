const PostService= require('./../services/postService.js')
class PostController {
    static create = async (req, res, next) =>{
        try {
            let {name, email, content} = req.body;
            let post = await PostService.create({name, email, content})
            return res.json(post)
        } catch (error) {
            next(error)
        }
    }
    static getAll = async (req, res, next) =>{
        try {
            let posts = await PostService.getAll()
            return res.json(posts)
        } catch (error) {
            next(error)
        }
    }
    static delete = async (req, res, next)=>{
        try {
            const {id} = req.params;
            let deletePost = await PostService.delete(id)
            return res.json(deletePost)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PostController;