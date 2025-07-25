// db.test.aggregate([
//     {
//         $match: { gender: "Male" },
//     },
//     {
//         $addFields: {
//             course: "level-2",
//         },
//     },
//     {
//         $project: {
//             course: 1,
//         },
//     },
// ]);

// db.test.aggregate([
//     {$group:{_id:"$address.country", count:{$sum:1}}},
// ])

// db.test
//     .find({
//         $and: [
//             {
//                 age: { $ne: 20 },
//                 age: { $lte: 35 },
//             },
//         ],
//     })
//     .projection({
//         age: 1,
//         gender: 1,
//         name: 1,
//     })
//     .sort({ age: 1 });

// db.test.find({
//     age: { $exists: true },
// });

// db.test.find({
//     age: { $type: "int" },
// });

// db.test
//     .find({
//         friends: { $size: 4 },
//     })
//     .projection({
//         friends: 1,

//     });

// db.test.find({
//     "interests.0" :"Cooking"
// }).projection({
//     interests:1
// })

// db.test
//     .find({
//         interests: { $all: ["Cooking", "Reading"] },
//     })
//     .projection({
//         interests: 1,
//     });

// db.test
//     .find({
//         skills: {
//             $elemMatch: {
//                 name: "JAVASCRIPT",
//                 level: "Intermidiate",
//             },
//         },
//     })
//     .projection({
//         skills: 1,
//     });

// 6406ad63fc13ae5a40000069

// db.test.updateOne(
//     {
//         _id: ObjectId("6406ad63fc13ae5a40000069"),
//     },
//     { $set: { age: 400 } }
// );

// db.test.updateOne(
//     {
//         _id: ObjectId("6406ad63fc13ae5a40000069"),
//     },
//     { $pop: { skills: 1 } }
// );

// db.test.updateOne(
//     {
//         _id: ObjectId("6406ad63fc13ae5a40000069"),

//         "education.major": "Education",
//     },
//     {
//         $set: {
//             "education.$.major": "CSE",
//         },
//     }
// );

// db.test.find({
//     _id: ObjectId("6406ad63fc13ae5a40000069"),
// });

// db.test.aggregate([
//     {
//         $unwind: "$friends",
//     },
//     {
//         $group: { _id: "$friends", count: { $sum: 1 } },
//     },
// ]);

// db.test.aggregate([
//     {
//         $unwind: "$interests",
//     },
//     { $group: { _id: "$age", interestPerAge: { $push: "$interests" } } },
// ]);

// db.test.aggregate([
//     {
//         $bucket: {
//             groupBy: "$age",
//             boundaries: [20, 40, 60, 80],
//             default: "80 er upore",
//             output: {
//                 count: { $sum: 1 },
//                 karakara: {
//                     $push: {
//                         name: "$name",
//                     },
//                 },
//             },
//         },
//     },

//     { $sort: { count: -1 } },
//     {
//         $limit: 5,
//     },
// ]);

// db.test.aggregate([
//     {
//         $facet: {
//             //pipeline1:
//             friendsCount: [
//                 {
//                     $unwind: "$friends",
//                 },
//                 {
//                     $group: { _id: "$friends", count: { $sum: 1 } },
//                 },
//             ],
//             //pipeline2:
//             educationCount: [
//                 {
//                     $unwind: "$education",
//                 },
//                 {
//                     $group: { _id: "$education", count: { $sum: 1 } },
//                 },
//             ],
//             //pipeline3:
//             SkillsCount: [
//                 {
//                     $unwind: "$skills",
//                 },
//                 {
//                     $group: { _id: "$skills", count: { $sum: 1 } },
//                 },
//             ],
//         },
//     },
// ]);
// db = db.getSiblingDB("orders");
// db = db.getSiblingDB("test");

// db.orders.aggregate([
//     {
//         $lookup: {
//             from: "test",
//             localField: "userId",
//             foreignField: "_id",
//             as: "user",
//         },
//     },
// ]);

// db.test.find({
//     _id: ObjectId("6406ad63fc13ae5a40000069")
// }).explain("executionStats");

//indexing

db.test.createIndex({ email: 1 });
