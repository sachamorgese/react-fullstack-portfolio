const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} = require('graphql');
const LabelGraphQLSchema = require('./Label');
const CommentGraphQLSchema = require('./Comment');
const LabelMongoDBSchema = require('../models/Label');
const CommentMongoDBSchema = require('../models/Comment')

module.exports = new GraphQLObjectType({
  name: 'BlogPost',
  description: 'A post for the blog',
  fields: {
    id: {
      type: GraphQLInt,
    },
    content: {
      type: GraphQLString,
    },
    labels: {
      type: GraphQLList(LabelGraphQLSchema),
      resolve: (post) => {
        LabelMongoDBSchema.findById
      },
    published: {
      type: GraphQLBoolean,
    },
    created: {
      type: GraphQLString,
    },
  },
});
