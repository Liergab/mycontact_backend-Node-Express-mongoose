const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const EmployeeSchema = new Schema ({
    name:{
        type:String,
        required:[true, "Please add the Contact Name"]
    },
    age:{
        type:Number,
        required:[true, "Please add the Age"]
    },
    gender:{
        type:String,
        required:[true, "Please add the Gender"]
    }
}, {
    versionKey: false,
    timestamps:true
});

module.exports = mongoose.model('Employee', EmployeeSchema, 'contacts')

