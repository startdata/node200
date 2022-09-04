const schedule = require("node-schedule");

// 특정 시간에 한 번
// 2022/12/25 오후 1시 10분에 수행
const date = new Date(2022, 12, 25, 13, 10, 0);

console.log(date);

const j = schedule.scheduleJob(date, () => {
  console.log("no pain, no gain");
});

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule();
rule.minute = 32;

const k = schedule.scheduleJob(rule, () => {
  console.log("1hour scedule");
});
