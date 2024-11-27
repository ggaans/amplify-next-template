//import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
//const schema = a.schema({
//  Todo: a
//    .model({
//      content: a.string(),
//    })
//    .authorization((allow) => [allow.publicApiKey()]),
//});

///export type Schema = ClientSchema<typeof schema>;

//export const data = defineData({
//  schema,
//  authorizationModes: {
//    defaultAuthorizationMode: "apiKey",
//    apiKeyAuthorizationMode: {
//      expiresInDays: 30,
//    },
//  },
//});

import {type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Define the schema for the `Product` model
const schema = a.schema({
  Product: a
    .model({
      content: a.string(),
      id: a.string(),  // PK (Primary Key, using string as an ID)
      imageUrl: a.string(),  // imageUrl as string
      name: a.string(),  // name as string
      status: a.string(),  // status as string (enum values like 'AVAILABLE', 'OUT_OF_STOCK')
      price: a.float(),  // price as float (equivalent to numeric)
      stock: a.float(),  // stock as number (integer)
      availableAt: a.string(),  // availableAt as string (ISO 8601 timestamp)
    })
    .authorization((allow) => [allow.publicApiKey()]),  // Public access with API key
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*
import { DataStore } from 'aws-amplify';
import { Product } from './models';  // Assuming Product is your model

async function countProducts() {
  try {
    const products = await DataStore.query(Product);
    const count = products.length; // Count the number of items in the result
    console.log('Total number of products:', count);
    return count;
  } catch (error) {
    console.error('Error counting products:', error);
  }
}

countProducts();*/























/*
const productsTableSchema = {
  TableName: 'Products',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' },  // Partition key
    { AttributeName: 'availableAt', KeyType: 'RANGE' }  // Sort key (optional)
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },  // String type for id (UUID or String)
    { AttributeName: 'availableAt', AttributeType: 'S' },  // String type for timestamp (ISO string)
    { AttributeName: 'imageUrl', AttributeType: 'S' },
    { AttributeName: 'name', AttributeType: 'S' },
    { AttributeName: 'status', AttributeType: 'S' },
    { AttributeName: 'price', AttributeType: 'N' },
    { AttributeName: 'stock', AttributeType: 'N' }
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }, // You can use on-demand as well.
};
*/





/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
