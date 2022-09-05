const scedule = require("node-schedule");
const j = scedule.scheduleJob("00 30 11 * * 1-5", () => {
  console.log("Cron-style Scheduling");
});

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new scedule.Range(0, 6)];
rule.hour = 17;
rule.minute = 17;

const k = scedule.scheduleJob(rule, () => {
  console.log("Recurrence Rule Scheduling");
});

const l = schedule.scheduleJob({ hour: 21, minute: 10, dayOfWeek: 6 }, () => {
  console.log("object Literal Syntax");
});

const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const m = schedule.scheduleJob(
  { start: startTime, end: endTime, rule: "*/1 * * * * * * " },
  () => {
    console.log("Set StartTime and EndTime");
  }
);
