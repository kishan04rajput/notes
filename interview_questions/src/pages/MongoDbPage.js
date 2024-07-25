import { QAReturn } from "../components/QAReturn";

export const MongoDbPage = () => {
  const QA = [
    {
      Q: `What is MongoDB?`,
      A: `MongoDB is a no-sequel database.`,
    },
    {
      Q: `How to perform crud in MongoDB?`,
      A: `Performing CRUD (Create, Read, Update, Delete) operations in MongoDB involves using its query language and methods.`,
    },
    {
      Q: `What are documents and collections in MongoDB?`,
      A: `A document is the basic unit of data storage, similar to a row in a relational database. A collection, on the other hand, is a grouping of MongoDB documents.`,
    },
    {
      Q: `Explain what is MongoDB and its features?`,
      A: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Features include schema-less design, scalability, high performance, and support for geospatial queries.`,
    },
    {
      Q: `What are some alternative NoSQL databases to MongoDB?`,
      A: `Alternatives include Cassandra, CouchDB, Redis, and Neo4j.`,
    },
    {
      Q: `What type of NoSQL database is MongoDB?`,
      A: `MongoDB is a document-oriented NoSQL database.`,
    },
    {
      Q: `How does MongoDB store data?`,
      A: `MongoDB stores data in BSON (Binary JSON) format, which allows for embedded documents and arrays.`,
    },
    {
      Q: `MongoDB is a schema-less database. If yes, how do you create schema in MongoDB?`,
      A: `Yes, MongoDB is schema-less, but you can enforce schema using MongoDB's Schema Validation feature.`,
    },
    {
      Q: `How is MongoDB different from SQL and better than MySQL?`,
      A: `MongoDB offers flexible schema, horizontal scalability, and high performance for read/write operations, unlike the rigid schema and vertical scaling of MySQL.`,
    },
    {
      Q: `What are the different data models in MongoDB?`,
      A: `Data models include embedded documents and references, allowing for flexible and efficient data representation.`,
    },
    {
      Q: `How does indexing work in MongoDB?`,
      A: `Indexing in MongoDB improves query performance by creating indexes on specified fields. The default index is on the _id field.`,
    },
    {
      Q: `What is MongoDB replication and sharding?`,
      A: `Replication involves copying data across multiple servers for high availability. Sharding distributes data across multiple machines for horizontal scaling.`,
    },
    {
      Q: `Explain horizontal and vertical scaling?`,
      A: `Horizontal scaling (sharding) adds more servers to handle data. Vertical scaling adds more resources (CPU, RAM) to an existing server.`,
    },
    {
      Q: `When should we embed one document with another?`,
      A: `Embed documents when data is frequently accessed together, to avoid joins and improve read performance.`,
    },
    {
      Q: `What are replica sets? Explain primary and secondary replica sets?`,
      A: `Replica sets are groups of MongoDB servers that maintain the same data. The primary replica receives writes, and secondary replicas replicate data from the primary.`,
    },
    {
      Q: `What is the use of capped collection?`,
      A: `Capped collections are fixed-size, high-performance collections that maintain insertion order and automatically delete oldest entries when the limit is reached.`,
    },
    {
      Q: `How can you store images, and other large files (>16MB)?`,
      A: `Use GridFS to store and retrieve large files by dividing them into smaller chunks.`,
    },
    {
      Q: `Explain aggregation in MongoDB?`,
      A: `Aggregation processes data records and returns computed results, using pipelines to filter, sort, group, and transform data.`,
    },
    {
      Q: `What is meant by _id field in MongoDB?`,
      A: `The _id field is a unique identifier for each document in a MongoDB collection, automatically indexed.`,
    },
    {
      Q: `What are some utilities for backup and restoring in MongoDB?`,
      A: `Utilities include mongodump, mongorestore, mongoexport, and mongoimport.`,
    },
    {
      Q: `Can you explain about MapReduce process in MongoDB?`,
      A: `MapReduce is a data processing paradigm that uses map and reduce functions to process large data sets in parallel.`,
    },
    {
      Q: `How does MongoDB ensure high availability of data?`,
      A: `High availability is ensured through replication and automatic failover in replica sets.`,
    },
    {
      Q: `What is the role of profiler in MongoDB?`,
      A: `The profiler collects detailed information about database operations, helping to analyze and optimize performance.`,
    },
    {
      Q: `Can we use regular expressions in MongoDB?`,
      A: `Yes, regular expressions can be used to search for patterns within string fields in documents.`,
    },
    {
      Q: `How do you search for documents in which a specific field has one or more values?`,
      A: `Use the $in operator to match documents where a field contains any of the specified values.`,
    },
    {
      Q: `Which commands are used to insert single and multiple documents into a collection?`,
      A: `Use insertOne() for a single document and insertMany() for multiple documents.`,
    },
    {
      Q: `What is the difference between $all and $in operator?`,
      A: `$all requires all specified values to match, while $in matches if any one of the specified values is present.`,
    },
    {
      Q: `Both writes and reads become faster when you add more slaves to replica set. Is this statement true or false? Explain the reason?`,
      A: `False. Writes are handled by the primary replica, so adding more secondaries improves read performance, not write speed.`,
    },
    {
      Q: `What is sharding key and mention the components of MongoDB shard cluster?`,
      A: `The sharding key determines how data is distributed across shards. Components include shard servers, config servers, and mongos routers.`,
    },
    {
      Q: `The join clause is a key feature of relational DB systems. What is the MongoDB equivalent, if any, and are there any limitations?`,
      A: `MongoDB uses the $lookup operator for joins, but it can be less performant than relational DB joins and is limited to a single aggregation pipeline stage.`,
    },
    {
      Q: `Mention some pros and cons of normalizing data in MongoDB?`,
      A: `Pros: Reduces data redundancy, ensures data integrity. Cons: Requires more complex queries, may lead to slower read performance.`,
    },
    {
      Q: `What are the advantages of using MongoDB?`,
      A: `Advantages include flexible schema design, horizontal scalability, high performance for read/write operations, and ease of use with JSON-like documents.`,
    },
    {
      Q: `What are the applications of MongoDB?`,
      A: `Applications include content management systems, real-time analytics, IoT, mobile apps, and any system requiring scalable, high-performance data storage.`,
    },
    {
      Q: ``,
      A: ``,
    },
  ];

  

  return <QAReturn QA={QA} />;
};
