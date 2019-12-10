let db = require("../DataBase/db.js");
const bcryptjs = require("bcryptjs");

// --------------------- searching by type --------------------- \\
const searchType = function(type, cb) {
  db.Post.find({ type: type }, function(err, posts) {
    if (err) {
      console.log("error in finding posts.");
    } else {
      cb(posts);
    }
  });
};
// searchType("scholarShip", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.types.length; i++) {
//   searchType(db.types[i], (posts) => {console.log(db.types[i], ': ', posts.length)});
// }

// --------------------- searching by majors --------------------- \\

const searchMajor = function(major, cb) {
  db.Post.find({ major: major }, function(err, posts) {
    if (err) {
      console.log("error in finding posts.");
    } else {
      cb(posts);
    }
  });
};
// searchMajor("Business", (posts) => {console.log(posts.length)});
// for (let i=0; i<db.majors.length; i++) {
//   searchMajor(db.majors[i], (posts) => {console.log(db.majors[i], ': ', posts.length)});
// }

// --------------------- searching by title --------------------- \\
const seatchTitle = function(str, cb) {
  db.Post.find({}, (err, posts) => {
    let result = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].title.includes(str)) {
        result.push(posts[i]);
      }
    }
    cb(result);
  });
};
// seatchTitle("sect", (posts) => {console.log('hahahahaha:  ', posts.length, 'like: ', posts[0].id)});

// --------------------- getFollowersEmails(the actual users's emails) of a company --------------------- \\
const getFollowersE = function(compId, cb) {
  db.User.find({},async (err, users) => {
    let result = '';
    for (let i = 0; i < users.length; i++) {
      if (users[i].followingList.includes(compId)) {
        await db.General.find({}, (err, data) => {
          for (let j = 0; j < data.length; j++) {
            if (data[j].id === users[i].id) {
              result += data[j].email+ ' , ';
            }
          }
          // cb(result);
        });
      }
    }
    cb(result.slice(0, -2));
  });
};
// getFollowersE(5, (emails) => {console.log('hahahahaha:  ', emails)});

// const getFollowersE = function(compId, cb) {
//   db.User.find({}, (err, users) => {
//     // let result = '';
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].followingList.includes(compId)) {
//         db.General.find({id: users[i].id}, (err, data) => {
//           console.log('mail: ',data[0].email);
//           // cb(data[0].email);
//         });
//       }
//     }
//     // cb(result);
//   });
// };
// getFollowersE(5, (emails) => {console.log('hahahahaha:  ', emails)});


// --------------------- searching byAll --------------------- \\

const search = function(type, major, cb, str) {
  db.Post.find({ major: major, type: type }, function(err, posts) {
    if (err) {
      console.log("error in finding posts.");
    } else {
      if (str) {
        let result = [];
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].title.includes(str)) {
            result.push(posts[i]);
          }
        }
        cb(result);
      } else {
        cb(posts);
      }
    }
  });
};
// search("jop", "Business", (posts) => {console.log(posts.length)}, "Rer");

// --------------------- for updating the passwords into hashed passwords --------------------- \\
// const x = async function(ps) {
//   var hashed = await bcryptjs.hash(ps, 10);
//   return hashed;
// };
// // x('sleepy').then((ps) => {console.log(ps)});

// const ps = function(cb) {
//   db.General.find({}, (err, posts) => {
//     let result = [];
//     for (let i = 0; i < posts.length; i++) {
//       result.push(posts[i].password);
//     }
//     cb(result);
//   });
// };

// ps(pss => {
//   for (let i = 0; i < pss.length; i++) {
//     x(pss[i]).then(async pass => {
//       await db.General.findOneAndUpdate(
//         { password: pss[i] },
//         { password: pass },
//         { new: true, useFindAndModify: false }
//       );
//       console.log(pass)
//     });
//   }
// });

module.exports.searchType = searchType;
module.exports.searchMajor = searchMajor;
module.exports.seatchTitle = seatchTitle;
module.exports.getFollowersE = getFollowersE;
module.exports.search = search;

// x("BairWInkwHp46TI");
// x("JULLGEGHtzF70F0");
// x("uhfUCXugiJR2X6f");
// x("UtoueLCTurVl_Pb");
// x("auqez2bL1SIxTzp");
// x("bJ_dvvf979uAcxd");
// x("P8dUvWByzZrpoq1");
// x("Fviv_TZwlPwPiUm");
// x("qDCiAn8qSW9shIO");
// x("lJdsOgPXW8knE25");
// x("JXTogBYiNDhfVpT");
// x("wXX5Pw2jkqsxXWm");
// x("bxgk4M_MXE9e_zy");
// x("LQl7642hTAe1NEE");
// x("5bUXH8DP4gCMH7s");
// x("lU2WeBmkxaV3M3Z");
// x("lgfsPbV5V_7VaEb");
// x("DNY4B3m1u6QLpW6");
// x("zJw08OMoerlVkkf");
// x("ZWYbJr6KxYnZHbv");
// x("xLYOlVRRp_42zXg");
// x("bZRbevbeOGLHWyT");
// x("IvwVk59w8Q911zQ");
// x("KaFRZxKROBnwvrY");
// x("6UUzdFz7mZGACzc");
// x("XUWYym57PmxasLB");
// x("iAISKysC55js8mJ");
// x("H3f4BWS8wlbJLYL");
// x("hZULiA9sWgyVsiB");
// x("V4Nfot1TwYSaPu5");
// x("TSpSO_VkZXDrQov");
// x("0YGsRNyQjFRq9Qo");
// x("JgEzHZJXbMXpIp1");
// x("YdkYwB8pBEPfqGC");
// x("BF14ifugSkJivbz");
// x("mKwJDhv3qL0mboe");
// x("AhbUWGr4Wqk1MFc");
// x("JzGc7LcY7Q40q59");
// x("TOcYo1aEYYOS8DA");
// x("dUaKYYvJFFyJ9Od");
// x("D_kDAEf4FFQckMk");
// x("3oRujdOglEXy81R");
// x("K_KM8BqDzXfS5Qq");
// x("4NXbmWCg9Lyjlfo");
// x("PwAcC5eBHdifjER");
// x("08270tzx1EvI4f1");
// x("dHyYR8FirDXlBbI");
// x("IXMfFoMd8aaNid8");
// x("duZeAhxREAszRDF");
// x("pbUcWa075qq3mb3");
