const ProfileService = require('./../services/profileService.js')

class ProfileController{
    
    static create = async(req, res, next) =>{
        try {
            let {firstName, lastName, img, phone, rate, experience,lawyerLicense, userId} = req.body;
            await ProfileService.create(firstName, lastName, img, phone, rate, experience,lawyerLicense, userId)
            return res.json({msg: "Your Lawyer profile successfully created"})
        } catch (error) {
            next(error)
        }
    }
    static update = async (req,res,next) =>{
        try {
            let {firstName, lastName, img, phone, rate, experience,lawyerLicense} = req.body;
            const {id} = req.params;
            await ProfileService.update({firstName,lastName, img, phone, rate, experience,lawyerLicense, id})
            return res.json({msg: "Your Lawyer profile successfully updated"})
        } catch (error) {
            next(error)
        }
    }
    static getOne = async (req, res, next) => {
        try {
          const { id } = req.params;
            
          const profile = await ProfileService.getOne(id);
    
          return res.json(profile);
        } catch (error) {
          next(error);
        }
    };


}

module.exports = ProfileController;