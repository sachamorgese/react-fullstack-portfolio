// For using node 8 and above (native async/await)
const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');
const { labelSchema } = require('./Label');
const { BlogPostModel } = require('../models/BlogPost');

const BlogPostType = composeWithMongoose(BlogPostModel);
//
// schemaComposer.Query.addFields({
//   userById: BlogPostType.getResolver('findById'),
//   userByIds: BlogPostType.getResolver('findByIds'),
//   userOne: BlogPostType.getResolver('findOne'),
//   userMany: BlogPostType.getResolver('findMany'),
//   userCount: BlogPostType.getResolver('count'),
//   userConnection: BlogPostType.getResolver('connection'),
//   userPagination: BlogPostType.getResolver('pagination'),
// });
//
// schemaComposer.Mutation.addFields({
//   userCreateOne: BlogPostType.getResolver('createOne'),
//   userCreateMany: BlogPostType.getResolver('createMany'),
//   userUpdateById: BlogPostType.getResolver('updateById'),
//   userUpdateOne: BlogPostType.getResolver('updateOne'),
//   userUpdateMany: BlogPostType.getResolver('updateMany'),
//   userRemoveById: BlogPostType.getResolver('removeById'),
//   userRemoveOne: BlogPostType.getResolver('removeOne'),
//   userRemoveMany: BlogPostType.getResolver('removeMany'),
// });

const graphqlSchema = schemaComposer.buildSchema();

graphqlSchema.addRelation('label', {
  resolver: () => labelSchema.getResolver('findById'),
  prepareArgs: {
    _ids: (source) => source._id,
  },
});

module.exports = graphqlSchema;
