
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'action description', notes: 'action notes', isCompleted: false},
        {project_id: 2, description: 'action description', notes: 'action notes', isCompleted: false},
      ]);
    });
};
