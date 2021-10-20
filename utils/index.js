// 数据类型转换工具
function formatArrayToObj(arr) {
    var obj = {};
    arr.forEach((item) => {
        obj[item["name"]] = item["value"];
    });
    return obj;
}

exports.formatArrayToObj = formatArrayToObj;