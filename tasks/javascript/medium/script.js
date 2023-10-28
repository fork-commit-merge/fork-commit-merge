// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
// 设置初始时间为10秒
let timeLeft = 10;

// 获取显示时间的元素
const countdownTimer = document.getElementById("timer");

// 创建定时器
const timer = setInterval(function() {
    // 如果时间还没到0，就继续倒数
    if (timeLeft > 0) {
        timeLeft--;
        countdownTimer.innerHTML = timeLeft;
    } else {
        // 时间到了，清除定时器并输出提示信息
        clearInterval(timer);
        countdownTimer.innerHTML = "time's up！";
    }
}, 1000);

