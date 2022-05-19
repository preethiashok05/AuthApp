const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity')

const schema = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
});

schema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this.id} , process.env.JWTPRIVATEKEY)
    return token
};

const User = mongoose.model("user", schema);

const validate = (data) => {
    const schema = Joi.object({
        name:Joi.string().required().label("name"),
        email:Joi.string().email().required().label("email"),
        password:passwordComplexity().required().label("passsword")
    });
    return schema.validate(data);
};

module.exports = {User , validate}


