module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `JNF`,
        fieldName: `jnf`,
        url: `http://localhost:5000/graphql/`,
      },
    },
  ],
}
