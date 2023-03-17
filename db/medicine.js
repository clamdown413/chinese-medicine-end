const db = require('./db')

function insertMedicine(name, medicine_number, last_data, buy_price, sale_price, grow_place) {
    let sqlstr = `insert into medicine (name,medicine_number,last_data,buy_price,sale_price,grow_place) values('${name}',${medicine_number},'${last_data}',${buy_price},${sale_price},'${grow_place}')`
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

function updated(id, name, medicine_number, last_data, buy_price, sale_price, grow_place) {
    let sql = `update medicine set name = '${name}',medicine_number = ${medicine_number},last_data = '${last_data}',buy_price = ${buy_price},sale_price = ${sale_price},grow_place = '${grow_place}' where id = ${id}`
    console.log(sql);
    return new Promise((reslove, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                reslove(result)
            }
        })
    })
}



function insertOperate(operate_mouth, operate_id) {
    let sql = `insert medicine ((operate_mouth,operate_id) values ${operate_mouth},${operate_id}`
    return new Promise((reslove, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                reslove(result)
            }
        })
    })
}

function updateOperate(id, operate_mouth,operate_id) {
    let sql = `update medicine set opreate_id = '${operate_id}' set operate_mouth = '${operate_mouth}' where id = ${id}`
    return new Promise((reslove, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                reslove(result)
            }
        })
    })
}

function selectOperate(id){
    let sql = `select operate_mouth,operate_id from medicine where id = ${id}`
    return new Promise((reslove, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                reslove(result)
            }
        })
    })
}
function getMedicineInfoById(id){
    let sql = `select * from medicine where id = ${id}`
    return new Promise((reslove, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                reslove(result)
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
    search,
    updated,
    insertOperate,
    updateOperate,
    selectOperate,
    getMedicineInfoById
}