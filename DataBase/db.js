const faker = require("faker");// dummy Data
const mongoose = require("mongoose");  
var Schema = mongoose.Schema;
const config = require("./config/keys.js");



const uri = process.env.mongoURI || config.mongoURI;
mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true})
  // .then(() => console.log('MongoDB Connected...'))
  .catch(error => console.log("error"));



const { connection } = mongoose;

connection.once("open", () => {
  console.log("connected");
});

//--------------General schema -----------

const GeneralSchema  = Schema({
  id: {
       type: Number,
       required: true
   },
   Name :String,
   password: String,
   email : String,
   type: Boolean
  })

//---------------Creating a model for General schema----------------
const General = mongoose.model('general', GeneralSchema);

//--------------User schema -----------

const UserSchema  = Schema({
 id: {
      type: Number,
      required: true
  },
  gender : Boolean,
  birthDay : Date,
  address : String,
  mobileNumber :String,
  major : String,
  educationLevel :String,
  avatar: String,
  tags : String,
  cv: String,
  favoriteList: String,
  followingList : String,
  notificationList : String
  
});


//---------------Creating a model for user schema----------------
const User = mongoose.model('user', UserSchema);






//--------------Company schema-----------


const CompanySchema  = Schema({
 id: {
      type: Number,
      required: true
  },
  
  description : String,
  logo : String,
  twitterLink :String,
  linkedinLink :String,
  otherLink :String,
  mobileNumber :String,
  archiveList: String,
  followersList : String,
  postsList : String
  
});


//---------------Creating a model for company schema----------------
const Company = mongoose.model('company', CompanySchema);


//--------------Post schema-------------

   const PostSchema  = Schema({
   id: {
      type: Number,
      required: true
  },
  title:String,
  description: String,
  deadLine: String,
  link: String,
  tags:  String,
  logo : String,
  archived:Boolean,//true or false
  read:Boolean // true or false
  
});

//---------------Creating a model for post schema----------------
const Post = mongoose.model('post', PostSchema);


// -------------------------------------save General---------------------------------
// const save = function () {
//   for (var i = 1; i < 19; i ++) {
//     var item = new General({
//       id: faker.random.number(),
//       Name: faker.name.findName(),
//       password: faker.internet.password(),
//       email: faker.internet.email(),
//       type : faker.random.boolean()
     
//     });
//     // console.log(item);
//     item.save();
//   }
//   };
// save();
  

// -------------------------------------save Users---------------------------------
// const save = function () {
//   for (var i = 1; i < 19; i ++) {
//     var item = new User({
//       id: faker.random.number(),
//       gender : faker.random.boolean(),
//       birthDay : faker.date.past(),
//       address : faker.address.city(),
//       mobileNumber : faker.phone.phoneNumber(),
//       major : faker.lorem.sentence(),
//       educationLevel :faker.lorem.sentence(),
//       avatar: faker.image.avatar(),
//       tags : faker.lorem.words(),
//       cv: faker.system.filePath(),
//       favoriteList: faker.lorem.lines(),
//       followingList :faker.lorem.lines(),
//       notificationList : faker.lorem.lines()
    
//     });
//     item.save();
//   }
//   };
// save();

// ---------------------------------save companies-----------------------
// const save = function() {
//     for (let i = 1; i <20; i++) {
//         var item = new Company({
//           id: faker.random.number(),
//           description : faker.lorem.paragraph(),
//           logo : faker.image.business(),
//           twitterLink :faker.system.filePath(),
//           linkedinLink :faker.system.filePath(),
//           otherLink :faker.system.filePath(),
//           mobileNumber :faker.phone.phoneNumber(),
//           archiveList: faker.lorem.lines(),
//           followersList : faker.lorem.lines(),
//           postsList : faker.lorem.lines()
//         });
//         // console.log(item)
//         item.save();
//     }
   
// };
// save();




// ------------------------------------- save Posts ---------------------------------
const save = function() {
  for (let i = 1; i <20; i++) {
      var item = new Post({
          id: faker.random.number(),
          title:faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          deadLine: faker.date.future(),
          link: faker.system.filePath(),
          tags:  faker.lorem.words(),
          logo :faker.image.business(),
          archived:faker.random.boolean(),
          read:faker.random.boolean()
      });
        item.save();
  }
 
};
save();












module.exports.save = save;
module.exports.User = User;
module.exports.Company = Company;
module.exports.Post = Post;
module.exports.General = General;
