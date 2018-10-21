const types = require('graphql/type');
const ToDoMongo = require('../models/test');

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} = types;

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      const newProjections = { ...projections };
      newProjections[selection.name.value] = true;
      return newProjections;
    },
    {},
  );
}

const todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'todo item',
  fields: () => ({
    itemId: {
      type: GraphQLInt,
      description: 'The id of the todo.',
    },
    item: {
      type: GraphQLString,
      description: 'The name of the todo.',
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Completed todo? ',
    },
  }),
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      todo: {
        type: new GraphQLList(todoType),
        args: {
          itemId: {
            name: 'itemId',
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
        resolve: (root, { itemId }, source, fieldASTs) => {
          const projections = getProjection(fieldASTs);
          const foundItems = new Promise((resolve, reject) => {
            ToDoMongo.find({ itemId }, projections, (err, todos) => {
              err ? reject(err) : resolve(todos);
            });
          });

          return foundItems;
        },
      },
    },
  }),
});

module.exports = {
  schema,
  getProjection,
};
