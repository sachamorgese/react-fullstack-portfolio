const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');

const { labelModel } = require('../models/Label');

const labelType = composeWithMongoose(labelModel);

schemaComposer.Query.addFields({
  labelById: labelType.getResolver('findById'),
  labelByIds: labelType.getResolver('findByIds'),
  labelOne: labelType.getResolver('findOne'),
  labelMany: labelType.getResolver('findMany'),
  labelCount: labelType.getResolver('count'),
  labelConnection: labelType.getResolver('connection'),
  labelPagination: labelType.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  labelCreateOne: labelType.getResolver('createOne'),
  labelCreateMany: labelType.getResolver('createMany'),
  labelUpdateById: labelType.getResolver('updateById'),
  labelUpdateOne: labelType.getResolver('updateOne'),
  labelUpdateMany: labelType.getResolver('updateMany'),
  labelRemoveById: labelType.getResolver('removeById'),
  labelRemoveOne: labelType.getResolver('removeOne'),
  labelRemoveMany: labelType.getResolver('removeMany'),
});

const labelSchema = schemaComposer.buildSchema();

module.exports = {
  labelType,
  labelSchema,
};
