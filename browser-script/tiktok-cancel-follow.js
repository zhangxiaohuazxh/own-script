// ==UserScript==
// @name         抖音取关脚本
// @namespace    https://docs.scriptcat.org/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.douyin.com/user/**
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==
(function () {
    var userInfoFlowEle = $("div[data-e2e='user-info-follow']")[0];
    // 监听click事件执行成功后再执行后续逻辑
    if (userInfoFlowEle) {
        // 创建自定义事件处理器
        var handleClickComplete = function () {
            setTimeout(() => {
                cancel();
            })
        };
        // 点击元素
        userInfoFlowEle.click();
        // 立即触发后续逻辑，因为普通click事件是同步执行的
        // 在实际场景中，可能需要根据具体情况调整触发时机
        setTimeout(handleClickComplete, 3000);
    } else {
        console.log("未找到关注按钮元素");
    }
})();


const proctedNameList = ["xxx","xxx"];

var page = undefined;

function cancel() {
    console.log("---------------------定时器1开始执行--------------------- ");
    page = $("div[data-e2e='user-fans-container']")[0];
    console.log("page", page.children[0]);
    var sort = $("div[class='mhBFMREC']")[0];
    var sortEle = $(sort).find("span[class='arnSiSbK']");
    sortEle[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    page.children[0].children.forEach((ele, index) => {
        if(index > 100) {
            return
        }
        // 用户名
        var username = $(ele).find("div[class='kUKK9Qal']").text().trim();
        if(!username) {
            return
        }
        // 检查用户名是否在保护名单中
        if (proctedNameList.includes(username)) {
            console.log(`用户名 ${username} 在保护名单中，跳过取关`);
            return; // 跳过当前循环，继续下一个元素
        }
        var fllowedBtn = $(ele.children[2]).find("div[class='zPZJ3j40']")[0];
        console.log('name ',fllowedBtn);
        if(confirm('是否取关 '+username)){
            $(fllowedBtn).click();
        }
    })
    console.log("---------------------定时器1执行结束--------------------- ");
}