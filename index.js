/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:49:41
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d*|(?=\d))(\.\d*)?$/,
  email: /^(\w)+(.\w)+@(\w)+(.\w+)+$/,
  url: /^http(s?):\/\/(\w)+(.\w+)+$/,
  ipv4: /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}(?!\d)$/,
  idcard: /^[1-9][0-9]{5}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{4}$/,
};