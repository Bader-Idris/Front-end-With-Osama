// instead of using client, this approach is faster and works better wit async
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
});

// connectionString ?: string, // e.g. postgres://user:password@host:5432/database
// https://node-postgres.com/features/pooling#examples



// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })
// client.release()
// const client = await pool.connect()//If you don't release the client your application will leak them and eventually
// your pool will be empty forever and all future requests to check out a client from the pool will wait forever.
// const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
// console.log(res.rows[0])

module.exports = pool;

// check https://node-postgres.com/apis/client
/* optional configuration

type Config = {
  user?: string, // default process.env.PGUSER || process.env.USER
  password?: string or function, //default process.env.PGPASSWORD
  host?: string, // default process.env.PGHOST
  database?: string, // default process.env.PGDATABASE || user
  port?: number, // default process.env.PGPORT
  connectionString?: string, // e.g. postgres://user:password@host:5432/database
  ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
  types?: any, // custom type parsers
  statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
  query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
  application_name?: string, // The name of the application that created this Client instance
  connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
  idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
}
*/


/*
Parameterized query
  import { Client } from 'pg'
  const client = new Client()
  await client.connect()
? const result = await client.query('SELECT $1::text as name', ['brianc'])
  console.log(result)
  await client.end()
*/