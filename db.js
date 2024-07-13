// // require('dotenv').config();
// const mongoose = require('mongoose');
// const MONGODBURI="mongodb+srv://huzaifazafar750:food123@cluster0.tsktv8v.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

// // console.log('MONGODBURI:', process.env.MONGODBURI); // Add this line to debug


// // const mongoURI = process.env.MONGODBURI;

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(MONGODBURI);
//         console.log("Connected to MongoDB!");

//         const fetchedData = await mongoose.connection.db.collection("food_items");
//         const foodItemsData = await fetchedData.find({}).toArray();

//         const foodCategoryData = await mongoose.connection.db.collection("food_category").find({}).toArray();

//         return { foodItems: foodItemsData, foodCategory: foodCategoryData };
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };

// module.exports = mongoDB;


// require('dotenv').config();
// const mongoose = require('mongoose');

// // Retrieve MongoDB URI from environment variable
// const MONGODBURI = process.env.MONGODBURI;

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(MONGODBURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to MongoDB!");

//         const fetchedData = await mongoose.connection.db.collection("food_items");
//         const foodItemsData = await fetchedData.find({}).toArray();

//         const foodCategoryData = await mongoose.connection.db.collection("food_category").find({}).toArray();

//         return { foodItems: foodItemsData, foodCategory: foodCategoryData };
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };

// module.exports = mongoDB;




require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

// Retrieve MongoDB URI from environment variable
const MONGODBURI = process.env.MONGODBURI; // Use process.env

const mongoDB = async () => {
  try {
    await mongoose.connect(MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB!");

    const fetchedData = await mongoose.connection.db.collection("food_items");
    const foodItemsData = await fetchedData.find({}).toArray();

    const foodCategoryData = await mongoose.connection.db.collection("food_category").find({}).toArray();

    return { foodItems: foodItemsData, foodCategory: foodCategoryData };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = mongoDB;
