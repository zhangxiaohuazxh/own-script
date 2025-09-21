// ==UserScript==
// @name         抖音取消喜欢脚本
// @namespace    https://docs.scriptcat.org/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.douyin.com/user/**
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function () {
    var favoriteBtn = $($("span[class='InzHcQtz']")[2]);
    if (favoriteBtn) {
        favoriteBtn.click();
        executeWithTimeout(() => handleClickComplete(), 3000)
    } else {
        console.log("未找到喜欢按钮元素");
    }
})()

function handleClickComplete() {
    if (document.querySelectorAll("div[class='RYJmZORF']").length < 20) {
        return
    }
    executeWithTimeout(() => $("div[class='buGg4uBH']").click())
    executeWithTimeout(() => $("span[class='semi-checkbox-addon']").click())
    executeWithTimeout(() => $("span[class='mXQccqGS']").click())
    executeWithTimeout(() => $("button[class='semi-button semi-button-primary xwGCO8jQ']").click());
    executeWithTimeout(() => window.location.href = "")
}

function executeWithTimeout(fun, timeout = 2000) {
    setTimeout(fun, timeout)
}