use farm;

db.animals.insert({
    name: "Clive",
    type: "Donkey"
});

db.animals.insert([
    
    {
    name: "Blake",
    type: "Donkey"
    },
    {
    name: "Lucy",
    type: "Python"
    }

]);

db.animals.updateMany(
   { type: "Donkey" },
   { $set: { type: "Cow" } }
);

db.animals.find().pretty();

db.dropDatabase();