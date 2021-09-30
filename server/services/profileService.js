const { buildQueryPagination, buildQuerySorting, buildQueryWhere } = require('../utils/helpers.js');
const {Profile} = require('./../models/model.js');
const ErrorHandler = require('./../utils/ErrorHandler')
class ProfileService {
    
    static create = async({firstName, lastName, img, phone, rate, experience,lawyerLicense,userId}) =>{
        try {
            
            return await Profile.create({firstName, lastName, img, phone, rate, experience, lawyerLicense, userId})
        } catch (error) {
            console.log(error)
        }
    }
    static getAll = async (query) => {
        const params = { ...query };
        const queryPagination = buildQueryPagination(params);
        const querySorting = buildQuerySorting(params);
        const queryWhere = buildQueryWhere(params);
    
        return await Profile.findAll({
          ...queryPagination,
          ...querySorting,
          where: queryWhere,
        });
      };
    static update = async({id, firstName, lastName, img, phone, rate, experience, lawyerLicense, userId}) =>{
        try {
            const profile = await Profile.findOne({ where: { id } });
            console.log(profile)
            if (!profile) {
                throw ErrorHandler.BadRequest('Profile not found');
            }
            firstName = firstName || profile.firstName;
            lastName = lastName || profile.lastName;
            rate = rate || profile.rate;
            phone = phone || profile.phone;
            experience = experience || profile.experience;
            lawyerLicense = lawyerLicense || profile.lawyerLicense;
            userId = userId || profile.userId;
            img = img || profile.img;

            await Profile.update({firstName, lastName, img, phone, rate, experience, lawyerLicense, userId}, {where:{id}})
        } catch (error) {
            console.log(error)
            
        }
    }
    static getOne = async(id) =>{
        try {
            const profile = await Profile.findOne({ where: { id } });
            if (!profile) throw ErrorHandler.BadRequest('Profile not found');
            return profile;
        } catch (error) {
            console.log(error)
            
        }
    }

}

module.exports = ProfileService;