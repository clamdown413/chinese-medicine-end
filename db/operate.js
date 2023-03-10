const db = require('./db')

function insertMedicine(id, name, medicine_number, last_data, buy_price, sale_price, grow_place, operate_mouth, operate_id) {
    let sqlstr = `insert into medicine (id,name,medicine_number,last_data,buy_price,sale_price,grow_place,operate_mouth,operate_id) values(${id},'${name}',${medicine_number},'${last_data}',${buy_price},${sale_price},'${grow_place}','${operate_mouth}','${operate_id}')`
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

function insertOperate(operate_id, operate_detail) {
    let sqlstr = `insert into operate (operate_id, operate_detail) values('${operate_id}','${operate_detail}')`

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

function selectOperate(operate_id,) {
    let sqlstr = `select * from operate where id = '${operate_id}')`

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
function selectAllOperate() {
    let sqlstr = `select * from operate`

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
    insertOperate,
    selectAllOperate,
    selectOperate
}