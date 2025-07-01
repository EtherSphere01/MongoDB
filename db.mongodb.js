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

db.test.updateOne(
    {
        _id: ObjectId("6406ad63fc13ae5a40000069"),

        "education.major": "Education",
    },
    {
        $set: {
            "education.$.major": "CSE",
        },
    }
);

db.test.find({
    _id: ObjectId("6406ad63fc13ae5a40000069"),
});
