export default {
  format (date) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = tidy(d.getMonth()+1);
    var date = tidy(d.getDate());
    var hour = tidy(d.getHours());
    var minute = tidy(d.getMinutes());
    // 时间补零
    function tidy(time) {
        if (time.toString().length == 1) {
            time = "0" + time;
        } else {
            time = time;
        }
        return time;
    }
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
  }
}
