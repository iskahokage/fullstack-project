const {Profile} = require('./../models/model.js');
const ErrorHandler = require('./../utils/ErrorHandler')
class ProfileService {
    
    static create = async(firstName, lastName, img, phone, rate, experience,lawyerLicense,userId) =>{
        try {
            
            return await Profile.create({firstName, lastName, img, phone, rate, experience, lawyerLicense, userId})
        } catch (error) {
            console.log(error)
        }
    }
    static update = async(profileData) =>{
        try {
            const profile = await Profile.findOne({ where: { id } });
            if (!profile) throw ErrorHandler.BadRequest('Profile not found');
            let {firstName, lastName, img, phone, rate, experience, lawyerLicense, id} = profileData;
            firstName = firstName || profile.firstName;
            lastName = lastName || profile.lastName;
            rate = rate || profile.rate;
            phone = phone || profile.phone;
            experience = experience || profile.experience;
            lawyerLicense = lawyerLicense || profile.lawyerLicense;
            userId = userId || profile.userId;
            img = img || profile.img;

            return await Profile.update({firstName, lastName, img, phone, rate, experience, lawyerLicense}, {where:{id}})
        } catch (error) {
            
        }
    }
    static getOne = async(id) =>{
        try {
            const profile = await Profile.findOne({ where: { id } });
            if (!profile) throw ErrorHandler.BadRequest('Profile not found');
            return profile;
        } catch (error) {
            
        }
    }

}

module.exports = ProfileService;