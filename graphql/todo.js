// For using node 8 and above (native async/await)
const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');
const { labelType } = require('./Label');
const ToDoMongo = require('../models/test');

const todoType = composeWithMongoose(ToDoMongo);

schemaComposer.Query.addFields({
  userById: todoType.getResolver('findById'),
  userByIds: todoType.getResolver('findByIds'),
  userOne: todoType.getResolver('findOne'),
  userMany: todoType.getResolver('findMany'),
  userCount: todoType.getResolver('count'),
  userConnection: todoType.getResolver('connection'),
  userPagination: todoType.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  userCreateOne: todoType.getResolver('createOne'),
  userCreateMany: todoType.getResolver('createMany'),
  userUpdateById: todoType.getResolver('updateById'),
  userUpdateOne: todoType.getResolver('updateOne'),
  userUpdateMany: todoType.getResolver('updateMany'),
  userRemoveById: todoType.getResolver('removeById'),
  userRemoveOne: todoType.getResolver('removeOne'),
  userRemoveMany: todoType.getResolver('removeMany'),
});

todoType.addRelation('label', {
  resolver: () => labelType.getResolver('findById'),
  prepareArgs: {
    _ids: (source) => source._id,
  },
});

const todoSchema = schemaComposer.buildSchema();

module.exports = {
  todoType,
  todoSchema,
};
