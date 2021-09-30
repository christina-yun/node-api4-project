const yup = require ('yup');
const Users = require('./../users/model');


const registrationSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required')
        .min(1, 'min 1 char'),
    password: yup
        .string()
        .trim()
        .required('password is required')
        .min(5, 'min 5 chars')
})
async function validateRegistrationInput(req, res, next){
    try{
        const validated = await registrationSchema.validate(req.body);

        req.body = validated;
        next()
    }
    catch(err){
        next({ status: 400, message: 'Missing required field' })
    }
}

//not finished
// async function validateLogin(req, res, next){
//     try{
//         const validated =
//     }
//     catch(err){
//         next({ status: 400, message: 'Username or password is incorrect'})
//     }
// }

module.exports = {
    validateRegistrationInput
};