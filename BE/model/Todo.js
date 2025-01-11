const mongoose = require ("mongoose");

const TodoSchema = new mongoose.Schema({
    task :{
        type:String,
        required:true,
        trim:true,
        maxlength:50,
        },
        // description:{
        //     type:String,
        //     required:true,
        //     trim:true,
        //     minlength:3,
        //     maxlength:50,
        //     },
            completed:{
                type:Boolean,
                default:false,
                },
        //     createdAt:{
        //         type:Date,
        //         default:Date.now(),
        //         required:true,
        //         },
        //         updatedAt:{
        //             type:Date,
        //             default:Date.now(),
        //             required:true,
        //         }
});

module.exports = mongoose.model("Todos", TodoSchema);