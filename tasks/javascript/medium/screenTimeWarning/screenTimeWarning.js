/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(minutes = 30) {
    const msPerMinute = 60000;
    const timeoutMs = minutes * msPerMinute;

    console.log(`[ScreenTime] 屏幕计时已启动。将在 ${minutes} 分钟后提醒你。`);

    const timer = setTimeout(() => {
        console.warn(
            "%c ☕ 休息时间到了！",
            "color: #ff9800; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px #ccc;"
        );
        console.warn(`你已经持续盯着屏幕 ${minutes} 分钟了。请起身活动一下，远眺 20 秒，保护眼睛。`);
    }, timeoutMs);

    // 返回清理函数，以便在页面组件卸载时取消计时
    return () => clearTimeout(timer);
}
// Example usage
startScreenTimeWarning(10);
