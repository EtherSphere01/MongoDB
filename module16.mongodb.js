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


db.test.aggregate([
    {$group:{_id:"$address.country", count:{$sum:1}}},
])