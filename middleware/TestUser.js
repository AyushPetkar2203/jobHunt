import { BadRequestError } from "../errors/index.js"

const testUser = async (req,res,next) =>{
    if(req.user.testUser){
        throw new BadRequestError('Demo User. Read Only!')
    }
    next();
};

export default testUser;