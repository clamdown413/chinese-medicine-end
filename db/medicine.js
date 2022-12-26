const db = require('./db')

function insertMedicine(id, name, number, last_data, buy_price, sale_price, grow_place) {
    let sqlstr = `insert into medicine values(${id},'${name}',${number},'${last_data}',${buy_price},${sale_price},'${grow_place}')`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function selectAll() {
    let sqlstr = `select * from medicine`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function orderByBuy() {
    let sqlstr = `select * from medicine order by buy_price`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function orderBySale() {
    let sqlstr = `select * from medicine order by sale_price`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function orderByProfit() {
    let sqlstr = `select * from medicine order by sale_price - buy_price`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function deleteMedicine(id) {
    let sqlstr = `DELETE FROM medicine WHERE id = ${id}`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function search(string) {
    let sqlstr = `SELECT * FROM medicine o  where concat(o.name,o.grow_place) like "%${string}%"`
    return new Promise((resolve, reject) => {
        db.query(sqlstr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
module.exports = {
    insertMedicine,
    selectAll,
    orderByBuy,
    orderBySale,
    orderByProfit,
    deleteMedicine,
    search
}