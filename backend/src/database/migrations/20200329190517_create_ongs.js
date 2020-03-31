
//método up: responsável pela criação do comando
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });  
};

// ação a ser executada caso aconteça algum erro no exports.up
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
