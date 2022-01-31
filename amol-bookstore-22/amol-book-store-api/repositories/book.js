// Step 1: Import mongodb config

const db = require("../configs/mongodb");

exports.getAll = (cb)=>{
    console.log("getall");
    const collection = db.getCollection('book');
    collection.find().toArray()
        .then((books)=>{
            console.log();
            cb(books);
        })
        .catch(err=>{console.log(err)})
}
exports.storeBookInfo = (book)=>{
    // console.log(book)
    const collection = db.getCollection('Book');
    collection.insertOne(book).then(res=>console.log("record stored")).
    catch(err=>console.log(err));
}
    
