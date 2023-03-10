function gen(min, max) {
    return (Math.round(Math.random() * (max - min)) + min);
}(1,2)
let mecicine =
    `人参 人发 卜芥 儿茶 八角 丁香 刀豆 三七 三棱 干姜 干漆 广白 广角 广丹 大黄 大戟 `
mecicine = mecicine.split(" ")
let place = ['兰州市', '嘉峪关市', '金昌市', '白银市', "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", '定西市', '陇南市', "临夏回族自治州", "甘南藏族自治州"]

let caozuo = ['分布播种', '机械灌溉', "生物治虫", "死叶剪除", "科学施肥", "人工光照", "收割", "精细加工", "交货到总部"]

// let months = [gen(2, 4)(), gen(5, 10)(), gen(5, 10)(), gen(5, 10)(), gen(5, 10)(), gen(10, 12)()]

// months.sort((a, b) => { return a - b })

// let caozuos = [caozuo[0], caozuo[gen(1, 7)()], caozuo[gen(1, 7)()], caozuo[gen(1, 7)()], caozuo[8]]

mecicine.forEach((item, index) => {
    let id = index + 1
    let number = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    let year = parseInt(Math.random() * (2022 - 2018 + 1) + 2000, 10);
    let month = parseInt(Math.random() * (12 - 1 + 1) + 1, 10);
    let day = parseInt(Math.random() * (28 - 1 + 1) + 1, 10);
    let buy_price = (Math.random() * (20 - 10) + 10).toFixed(2);
    let sale_price = (Math.random() * (30 - 20) + 20).toFixed(2);
    let grow_place_index = parseInt(Math.random() * (13 - 0 + 1) + 0, 10);
    let last_data = `${year}-${month}-${day}`
    let grow_place = place[grow_place_index]


    // let str = `id=${id}&name=${item}&medicine_number=${number}&last_data=${last_data}&buy_price=${buy_price}&sale_price=${sale_price}&grow_place=${grow_place}&operate_mouth=${JSON.stringify(months)}&operate_detail=${JSON.stringify(caozuos)}`
    // console.log(str);



})

let options = [
    {
        value: '兰州市',
        label: '兰州市',
    }, {
        value: '嘉峪关市',
        label: '嘉峪关市',
    }, {
        value: '金昌市',
        label: '金昌市',
    }, {
        value: '白银市',
        label: '白银市',
    }, {
        value: '天水市',
        label: '天水市',
    }, {
        value: '武威市',
        label: '武威市',
    }, {
        value: '张掖市',
        label: '张掖市',
    }, {
        value: '平凉市',
        label: '平凉市',
    }, {
        value: '酒泉市',
        label: '酒泉市',
    }, {
        value: '定西市',
        label: '定西市',
    }, {
        value: '陇南市',
        label: '陇南市',
    }, {
        value: '临夏回族自治州',
        label: '临夏回族自治州',
    }, {
        value: '甘南藏族自治州',
        label: '甘南藏族自治州',
    }
]
console.log(gen(5, 9));