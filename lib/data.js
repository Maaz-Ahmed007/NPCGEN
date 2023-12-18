// const { readDataFromFile, writeDataToFile } = require('./fileService');

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         const data = readDataFromFile();
//         res.status(200).json({ data });
//     } else if (req.method === 'POST') {
//         const newData = req.body;
//         writeDataToFile(newData);
//         res.status(200).json({ message: 'Data updated successfully' });
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }

// let npcs = readDataFromFile() || [
//     {
//         id: 'npc001',
//         name: 'Aldric',
//         description: 'A brave warrior on a quest',
//         race: 'Human',
//         class: 'Warrior',
//         isActive: true, // Boolean
//         skills: ['Swordsmanship', 'Archery'], // Array
//         equipment: {
//             weapon: 'Sword',
//             armor: 'Plate Mail',
//         }, // Nested Object
//         creationDate: new Date('2023-01-01'), // Date
//         optionalField: null, // Null or Undefined
//         attributes: {
//             bod: 6,
//             dex: 6,
//             mnd: 6,
//             cha: 6,
//         },
//     },
//     {
//         id: 'npc002',
//         name: 'Elara',
//         description: 'An elven mage with arcane knowledge',
//         race: 'Elf',
//         class: 'Mage',
//         isActive: false,
//         skills: ['Arcane Magic', 'Teleportation'],
//         equipment: {
//             weapon: 'Staff',
//             armor: 'Robes',
//         },
//         creationDate: new Date('2023-02-15'),
//         optionalField: 'Some optional data',
//         attributes: {
//             bod: 4,
//             dex: 8,
//             mnd: 9,
//             cha: 7,
//         },
//     },
//     {
//         id: 'npc003',
//         name: 'Zoro',
//         description: 'Zoro is the best Swordsman in One Piece after Mihawks.',
//         race: 'Human',
//         class: 'Swordsman',
//         isActive: true,
//         skills: ['Swordsmanship', 'Haki'],
//         equipment: {
//             weapon: '3 Swords',
//             armor: 'None',
//         },
//         creationDate: new Date('2023-02-15'),
//         optionalField: 'He can use lots of different swords move.',
//         attributes: {
//             bod: 8,
//             dex: 8,
//             mnd: 9,
//             cha: 9,
//         },
//     },
//     // Add more NPCs as needed
// ];

// const updateDataFile = () => {
//     writeDataToFile({ npcs });
// };

// module.exports = {
//     npcs,
//     updateDataFile,
// };

let npcs = [
    {
        id: 'npc001',
        name: 'Aldric',
        description: 'A brave warrior on a quest',
        race: ['Human', 'Elf', 'goblin'], //enum
        class: 'Warrior',
        isActive: true, // Boolean
        skills: ['Swordsmanship', 'Archery'], // Array
        equipment: {
            weapon: 'Sword',
            armor: 'Plate Mail',
        }, // Nested Object
        creationDate: new Date('2023-01-01'), // Date
        optionalField: null, // Null or Undefined
        attributes: {
            bod: 6,
            dex: 6,
            mnd: 6,
            cha: 6,
        },
    },
    {
        id: 'npc002',
        name: 'Elara',
        description: 'An elven mage with arcane knowledge',
        race: 'Elf',
        class: 'Mage',
        isActive: false,
        skills: ['Arcane Magic', 'Teleportation'],
        equipment: {
            weapon: 'Staff',
            armor: 'Robes',
        },
        creationDate: new Date('2023-02-15'),
        optionalField: 'Some optional data',
        attributes: {
            bod: 4,
            dex: 8,
            mnd: 9,
            cha: 7,
        },
    },
    {
        id: 'npc003',
        name: 'Zoro',
        description: 'Zoro is the best Swordsman in One Piece after Mihawks.',
        race: 'Human',
        class: 'Swordsman',
        isActive: true,
        skills: ['Swordsmanship', 'Haki'],
        equipment: {
            weapon: '3 Swords',
            armor: 'None',
        },
        creationDate: new Date('2023-02-15'),
        optionalField: 'He can use lots of different swords move.',
        attributes: {
            bod: 8,
            dex: 8,
            mnd: 9,
            cha: 9,
        },
    },
    // Add more NPCs as needed
];

module.exports = {
    npcs,
};
