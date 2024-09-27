
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, fullName: 'Eddard Stark', title:"Lord of Winterfell", house: "Stark"},
        {id: 2, fullName: 'Denarys Targaryen', title:"Mother of Dragons", house: "Targaryen"},
      ]);
    });
};
