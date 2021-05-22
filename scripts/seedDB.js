const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        title: "The Hunger Games",
    },
    {
        authors: ["T. A. Acker"],
        description: "Thisbook provides insight into the complex, yet intriguing subject of love, serving as storiesthatcapture viewpointsmany people have towards relationships and friendships.These poems invite readersto explore love, anditsimpact,on many levels.Full of emotion and creativity, there is definitelya poem within this book to whichthe readercan relate, enjoy, embrace and cherish.",
        title: "Love Undefined",
    },
    {
        authors: ["Natasha Oakley"],
        description: "Once, Kate loved Gideon from afar, but her feelings were not returned. Gideon was married, and had the kind of family life that Kate knew she could never have. Distraught, she fled, determined never to return. Now, years later, Kate meets Gideon again. Life has changed them both—Kate is still tortured by her rootless upbringing, while Gideon is bringing up his two children alone. Kate craves to get close to him again, as he does to her. But that will mean finding the courage to confront her past…and find her future. Her reward could be fulfilling her lifelong wish: having a family to belong to….",
        title: "A Family to Belong To",
    },
    {
        authors: ["Karen Swan"],
        description: "No secret stays buried forever . . .In London, the snow is falling and Christmas is just around the corner - but Allegra Fisher barely has time to notice. She's pitching for the biggest deal of her career and can't afford to fail. And when she meets attractive stranger, Sam Kemp, on the plane to the meeting, she can't afford to lose her focus either. She learned to shut off her emotions long ago and only her sister and best friend Isobel knows why. But when Allegra finds herself up against Sam for the bid, their passion quickly turns sour.In Zermatt in the Swiss Alps, a long-lost mountain hut is discovered in the snow after sixty years and the last person expecting to become involved is Allegra - she hasn't even heard of the woman they found inside. But it soon becomes clear the two women are linked and, as she and Iz travel out to make sense of the mystery, hearts thaw and dark secrets are uncovered, long buried by the snow.With glamorous locations and heart-breaking twists, Christmas in the Snow by Karen Swan is all you need in your stocking for a truly decadent Christmas holiday. The perfect gift - even if it's just to yourself.",
        title: "Christmas in the Snow",
    },
    {
        authors: ["Jack Tickle"],
        description: "Pip and Pickle are very peckish penguins. They want their dinner. So SPLASH! WHOOSH! SWISH! they chase after a fish! But this fish is fast and clever – and soon Pip and Pickle are in a spot of bother! Turn the shaped pages, peep through the holes and follow the dinner-time dash! A fantastic underwater adventure, peppered with fun little rhymes and interesting pages for little hands to turn. Perfect for fans of Petr Horacek and peep-through books!",
        title: "Fish on a Dish!",
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
