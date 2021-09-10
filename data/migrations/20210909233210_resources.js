
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl=>{
        tbl.increments()
        tbl.string("fullName", 255).unique().notNullable()
        tbl.string("title", 255)
        tbl.string("house", 255)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
  };
  