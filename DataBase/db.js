const faker = require("faker"); // dummy Data
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const config = require("./config/keys.js");

const uri = process.env.mongoURI || config.mongoURI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  // .then(() => console.log('MongoDB Connected...'))
  .catch(error => console.log("error"));

const { connection } = mongoose;

connection.once("open", () => {
  console.log("connected");
});

const majors = [
  "Achitecture",
  "Art",
  "Business",
  "Media",
  "Computer",
  "Science",
  "Medicine",
  "Languages",
  "Law",
  "Philosophy",
  "Political",
  "Tourisim",
  "Sports",
  "History",
  "Engineerong",
  "IT",
  "Education",
  "Literature"
];
const types = ["scholarShip", "jop", "training"];
const addresses = [
  "Jerusalem",
  "Safed",
  "Haifa",
  "Bisan",
  "Akka",
  "Nablus",
  "Tulkarm",
  "Qalqilya",
  "Caesarea",
  "Ramallah",
  "Al-Bireh",
  "Al-Roll",
  "Jaffa",
  "Jericho",
  "Bethlehem",
  "Hebron",
  "Ashkelon",
  "Khan Younis",
  "Rafah",
  "Beersheba"
];
const eduLevels = [
  "high school",
  "diploma",
  "bachelor's degree",
  "master's degree",
  "doctoral degree"
];

//--------------General schema -----------
const GeneralSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  Name: String,
  password: String,
  email: String,
  type: Boolean
});

//---------------Creating a model for General schema----------------
const General = mongoose.model("general", GeneralSchema);

//--------------User schema -----------
const UserSchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  gender: Boolean,
  birthDay: Date,
  address: String,
  mobileNumber: String,
  major: String,
  educationLevel: String,
  avatar: String,
  tags: [String],
  cv: String,
  favoriteList: [Number],
  followingList: [Number],
  notificationList: [Number]
});

//---------------Creating a model for user schema----------------
const User = mongoose.model("user", UserSchema);

//--------------Company schema-----------
const CompanySchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },

  description: String,
  logo: String,
  twitterLink: String,
  linkedinLink: String,
  otherLink: String,
  mobileNumber: String,
  archiveList: [Number],
  followersList: [Number],
  postsList: [Number]
});
//---------------Creating a model for company schema----------------
const Company = mongoose.model("company", CompanySchema);

//--------------Post schema-------------
const PostSchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  comId: Number,
  title: String,
  description: String,
  deadLine: Date,
  link: String,
  major: String,
  logo: String,
  type: String,
  archived: Boolean, //true or false
  read: Boolean // true or false
});
// ---------------Creating a model for post schema----------------
const Post = mongoose.model("post", PostSchema);

const selectAll = function(model, callback) {
  model.find({}, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const select = function(model, id, callback) {
  model.find({ id: id }, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const selectP = function(id, callback) {
  Post.find({ comId: id }, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const random = function(arr) {
  var result = [];
  while (result.length < 3) {
    var randomnum = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[randomnum])) {
      result.push(arr[randomnum]);
    }
  }
  return result;
};

const random2 = function(arr) {
  let result = [];
  let randNum = Math.random() * 12 + 3;
  while (result.length < randNum) {
    var randomnum = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[randomnum].id)) {
      result.push(arr[randomnum].id);
    }
  }
  return result;
};


// -------------------------------------save General---------------------------------
// const save = function() {
//   for (var i = 1; i <= 50; i++) {
//     var item = new General({
//       id: i,
//       Name: faker.name.findName(),
//       password: faker.internet.password(),
//       email: faker.internet.email(),
//       type: faker.random.boolean()

//     });
//     item.save();
//   }
//   console.log('saved?');
// };
// save();

// -------------------------------------save Users---------------------------------
// const save = function() {
//   for (var i = 1; i <= 50; i++) {
//     var item = new User({
//       id: i,
//       gender: faker.random.boolean(),
//       birthDay: faker.date.past(),
//       address: addresses[Math.floor(Math.random() * addresses.length)],
//       mobileNumber: faker.phone.phoneNumber(),
//       major: majors[Math.floor(Math.random() * majors.length)],
//       educationLevel: eduLevels[Math.floor(Math.random() * eduLevels.length)],
//       avatar: faker.image.avatar(),
//       tags: random(majors),
//       cv: faker.system.filePath(),
//       favoriteList: [],
//       followingList: [],
//       notificationList: []
//     });
//     item.save();
//   }
//   console.log("saved?");
// };
// save();

// const save = async function() {
//   selectAll(Company, (err, comps) => {
//     async function x() {
//       let obj = {};
//       // console.log("comps length is: ", comps.length);
//       for (let i = 1; i <= 50; i++) {
//         let list = comps[i - 1].followersList;
//         for (let j = 0; j < list.length; j++) {
//           // console.log("ha? ", list);
//           if (obj[list[j]]) {
//             obj[list[j]].push(comps[i - 1].id);
//           } else {
//             obj[list[j]] = [comps[i - 1].id];
//           }
//         }
//         // console.log('folowers list ia: ', list);
//       }
//       selectAll(Post, (err, posts) => {
//         for (var i = 1; i <= 50; i++) {
//           var item = new User({
//             id: i,
//             gender: faker.random.boolean(),
//             birthDay: faker.date.past(),
//             address: addresses[Math.floor(Math.random() * addresses.length)],
//             mobileNumber: faker.phone.phoneNumber(),
//             major: majors[Math.floor(Math.random() * majors.length)],
//             educationLevel: eduLevels[Math.floor(Math.random() * eduLevels.length)],
//             avatar: faker.image.avatar(),
//             tags: random(majors),
//             cv: faker.system.filePath(),
//             favoriteList: random2(posts),
//             followingList: obj[i],
//             notificationList: []
//           });
//           item.save();
//         }

//         console.log("comps length is: ", obj);
//       });
//     }
//     x();
//   });
// };
// save();

// ---------------------------------save companies-----------------------
// const save = function() {
//   selectAll(User, (err, users) => {
//     for (var i = 1; i <= 50; i++) {
//       var item = new Company({
//         id: i,
//         description : faker.lorem.paragraph(),
//         logo : faker.image.business(),
//         twitterLink :faker.system.filePath(),
//         linkedinLink :faker.system.filePath(),
//         otherLink :faker.system.filePath(),
//         mobileNumber :faker.phone.phoneNumber(),
//         archiveList: [],
//         followersList : random2(users),
//         postsList : []
//       });
//       item.save();
//     }
//     console.log('saved?');
//   });
// };
// save();

// const save = async function() {
//   await User.find({}, function(err, users) {
//     if (err) {
//       console.log("error user");
//     }
//   }).then(users => {
//     async function x() {
//       for (var i = 1; i <= 50; i++) {
//         await Post.find({ comId: i }, (err, posts) => {
//           if (err) {
//             console.log("error post");
//           }
//           // console.log('first i is: ', i);
//         }).then(posts => {
//           // console.log('last i is: ', i);
//           let ps = [];
//           for (let j = 0; j < posts.length; j++) {
//             ps.push(posts[j].id);
//           }
//           console.log("ps is: ", ps);
//           var item = new Company({
//             id: i,
//             description: faker.lorem.paragraph(),
//             logo: faker.image.business(),
//             twitterLink: faker.system.filePath(),
//             linkedinLink: faker.system.filePath(),
//             otherLink: faker.system.filePath(),
//             mobileNumber: faker.phone.phoneNumber(),
//             archiveList: [],
//             followersList: random2(users),
//             postsList: ps
//           });
//           item.save();
//         });
//       }
//     }
//     x();
//   });
// };
// save();

// ------------------------------------- save Posts ---------------------------------
// const save = function() {
//   selectAll(Company, (err, comps) => {
//     for (var i = 1; i <= 50; i++) {
//       var item = new Post({
//           id: i,
//           comId: comps[Math.floor(Math.random() * comps.length)].id,
//           title:faker.lorem.sentence(),
//           description: faker.lorem.paragraph(),
//           deadLine: faker.date.future(),
//           link: faker.system.filePath(),
//           major: majors[Math.floor(Math.random() * majors.length)],
//           logo :faker.image.business(),
//           type: types[Math.floor(Math.random() * types.length)],
//           archived:faker.random.boolean(),
//           read:faker.random.boolean()
//       });
//       item.save();
//     }
//     console.log('saved?');
//   });
// };
// save();

// module.exports.save = save;
module.exports.selectAll = selectAll;
module.exports.select = select;
module.exports.selectP = selectP;
module.exports.User = User;
module.exports.Company = Company;
module.exports.Post = Post;
module.exports.General = General;
module.exports.majors = majors;
module.exports.types = types;
module.exports.addresses = addresses;
module.exports.eduLevels = eduLevels;

