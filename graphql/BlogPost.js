// For using node 8 and above (native async/await)
const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');
const { labelSchema } = require('./Label');
const { BlogPostModel } = require('../models/BlogPost');

const blogPostType = composeWithMongoose(BlogPostModel);

schemaComposer.Query.addFields({
  blogPostById: blogPostType.getResolver('findById'),
  blogPostByIds: blogPostType.getResolver('findByIds'),
  blogPostOne: blogPostType.getResolver('findOne'),
  blogPostMany: blogPostType.getResolver('findMany'),
  blogPostCount: blogPostType.getResolver('count'),
  blogPostConnection: blogPostType.getResolver('connection'),
  blogPostPagination: blogPostType.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  blogPostCreateOne: blogPostType.getResolver('createOne'),
  blogPostCreateMany: blogPostType.getResolver('createMany'),
  blogPostUpdateById: blogPostType.getResolver('updateById'),
  blogPostUpdateOne: blogPostType.getResolver('updateOne'),
  blogPostUpdateMany: blogPostType.getResolver('updateMany'),
  blogPostRemoveById: blogPostType.getResolver('removeById'),
  blogPostRemoveOne: blogPostType.getResolver('removeOne'),
  blogPostRemoveMany: blogPostType.getResolver('removeMany'),
});

blogPostType.addRelation('label', {
  resolver: () => labelSchema.getResolver('findById'),
  prepareArgs: {
    name: (source) => source.name,
  },
});

const blogPostSchema = schemaComposer.buildSchema();

module.exports = {
  blogPostType,
  blogPostSchema,
};
