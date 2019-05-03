
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', tbl => {
    tbl.string('description', 128)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
