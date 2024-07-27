const mongoose=require("mongoose")

function main(){
try {
    mongoose.connect("mongodb://localhost:27017/olympics")
    console.log("database connect");
} catch (error) {
    console.log(error);
}
}
main()