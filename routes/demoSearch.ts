import { type Request, type Response } from 'express'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./data/juiceshop.sqlite')

export function demoSearch () {
    return (req: Request, res: Response) => {
        const q = req.query.q
        db.all("SELECT * FROM Products WHERE name LIKE '%" + q + "%'", (err: any, rows: any) => {
            res.json(rows)
        })
    }
}