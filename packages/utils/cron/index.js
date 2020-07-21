import schedule from 'node-schedule';

export default (ruleString, job) => {
  const rule = new schedule.RecurrenceRule();

  const format = ruleString.split(' ');

  rule.second = format[0];
  rule.minute = format[1];
  rule.hour = format[2];
  rule.date = format[3];
  rule.month = format[4];
  rule.dayOfWeek = format[5];

  return schedule.scheduleJob(rule, job);
};
