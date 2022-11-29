import sqlite3 from "sqlite3"
sqlite3.verbose()
import * as dotenv from 'dotenv'
dotenv.config()

let dbName;

if (process.env.DEV === 'true') {
    dbName = 'test.db'
} else {
    dbName = 'prod.db'
}

const db = new sqlite3.Database(`./db/data/${dbName}`, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Database connection established')
        db.run('CREATE TABLE IF NOT EXISTS addItem (name, type, lotNo, addDate, expiredDate)', (err) => {
            if (err) {
              console.error(err)
            } else {
              console.log('Table addItem is ready')
            }
        })
    }
})

export default db;