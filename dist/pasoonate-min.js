const AdditionAndSubtraction={addYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.year+t,s=this._currentCalendar.daysInMonth(a,e.month),n=e.day<=s?e.day:s,i=this._currentCalendar.dateToTimestamp(a,e.month,n,e.hour,e.minute,e.second);return this._timestamp=i-this._timezoneOffset,this},addMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.month+t,s=e.year+Math.ceil(a/12-1),n=a%12==0?12:a%12,i=this._currentCalendar.daysInMonth(s,n),r=e.day<=i?e.day:i,o=this._currentCalendar.dateToTimestamp(s,n,r,e.hour,e.minute,e.second);return this._timestamp=o-this._timezoneOffset,this},addDay(t){return this._timestamp+=86400*t,this},addHour(t){return this._timestamp+=3600*t,this},addMinute(t){return this._timestamp+=60*t,this},addSecond(t){return this._timestamp+=t,this},subYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.year-t,s=this._currentCalendar.daysInMonth(a,e.month),n=e.day<=s?e.day:s,i=this._currentCalendar.dateToTimestamp(a,e.month,n,e.hour,e.minute,e.second);return this._timestamp=i-this._timezoneOffset,this},subMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=e.month-t,s=e.year,n=a;a<=0&&(a=-a,s-=Math.floor(a/12)+1,n=12-a%12);let i=this._currentCalendar.daysInMonth(s,n),r=e.day<=i?e.day:i,o=this._currentCalendar.dateToTimestamp(s,n,r,e.hour,e.minute,e.second);return this._timestamp=o-this._timezoneOffset,this},subDay(t){return this._timestamp-=86400*t,this},subHour(t){return this._timestamp-=3600*t,this},subMinute(t){return this._timestamp-=60*t,this},subSecond(t){return this._timestamp-=t,this}},Base={setTimestamp(t){return this._timestamp=t,this},getTimestamp(){return this._timestamp},setTimezoneOffset(t){return this._timezoneOffset=t,this},getTimezoneOffset(){return this._timezoneOffset},setYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(t,e.month,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getYear(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).year},setMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,t,e.day,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getMonth(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).month},setDay(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,t,e.hour,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getDay(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).day},setHour(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,t,e.minute,e.second);return this._timestamp=a-this._timezoneOffset,this},getHour(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).hour},setMinute(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,t,e.second);return this._timestamp=a-this._timezoneOffset,this},getMinute(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).minute},setSecond(t){let e=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),a=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,e.minute,t);return this._timestamp=a-this._timezoneOffset,this},getSecond(){return this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset).second},setUTCYear(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e.month,e.day,e.hour,e.minute,e.second),this},getUTCYear(){return this._currentCalendar.timestampToDate(this._timestamp).year},setUTCMonth(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,t,e.day,e.hour,e.minute,e.second),this},getUTCMonth(){return this._currentCalendar.timestampToDate(this._timestamp).month},setUTCDay(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,t,e.hour,e.minute,e.second),this},getUTCDay(){return this._currentCalendar.timestampToDate(this._timestamp).day},setUTCHour(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,t,e.minute,e.second),this},getUTCHour(){return this._currentCalendar.timestampToDate(this._timestamp).hour},setUTCMinute(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,t,e.second),this},getUTCMinute(){return this._currentCalendar.timestampToDate(this._timestamp).minute},setUTCSecond(t){let e=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(e.year,e.month,e.day,e.hour,e.minute,t),this},getUTCSecond(){return this._currentCalendar.timestampToDate(this._timestamp).second},setDate(t,e,a){let s=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),n=this._currentCalendar.dateToTimestamp(t,e,a,s.hour,s.minute,s.second);return this._timestamp=n-this._timezoneOffset,this},getDate(){let t=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset);return{year:t.year,month:t.month,day:t.day}},setTime(t,e,a){let s=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset),n=this._currentCalendar.dateToTimestamp(s.year,s.month,s.day,t,e,a);return this._timestamp=n-this._timezoneOffset,this},getTime(){let t=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset);return{hour:t.hour,minute:t.minute,second:t.second}},setDateTime(t,e,a,s,n,i){this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset);let r=this._currentCalendar.dateToTimestamp(t,e,a,s,n,i);return this._timestamp=r-this._timezoneOffset,this},getDateTime(){let t=this._currentCalendar.timestampToDate(this._timestamp+this._timezoneOffset);return{year:t.year,month:t.month,day:t.day,hour:t.hour,minute:t.minute,second:t.second}},setUTCDate(t,e,a){let s=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e,a,s.hour,s.minute,s.second),this},getUTCDate(){let t=this._currentCalendar.timestampToDate(this._timestamp);return{year:t.year,month:t.month,day:t.day}},setUTCTime(t,e,a){let s=this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(s.year,s.month,s.day,t,e,a),this},getUTCTime(){let t=this._currentCalendar.timestampToDate(this._timestamp);return{hour:t.hour,minute:t.minute,second:t.second}},setUTCDateTime(t,e,a,s,n,i){this._currentCalendar.timestampToDate(this._timestamp);return this._timestamp=this._currentCalendar.dateToTimestamp(t,e,a,s,n,i),this},getUTCDateTime(){let t=this._currentCalendar.timestampToDate(this._timestamp);return{year:t.year,month:t.month,day:t.day,hour:t.hour,minute:t.minute,second:t.second}},dayOfWeek(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)},dayOfYear(){return this._currentCalendar.dayOfYear(this._timestamp+this._timezoneOffset)},weekOfMonth(){return this._currentCalendar.weekOfMonth(this._timestamp+this._timezoneOffset)},weekOfYear(){return this._currentCalendar.weekOfYear(this._timestamp+this._timezoneOffset)}},Comparison={equal(t){return this._timestamp===t._timestamp},afterThan(t){return this._timestamp>t._timestamp},afterThanOrEqual(t){return this._timestamp>=t._timestamp},beforeThan(t){return this._timestamp<t._timestamp},beforeThanOrEqual(t){return this._timestamp<=t._timestamp},between(t,e){return t<=this._timestamp&&e._timestamp>=this._timestamp},min(t){return this._timestamp<=t._timestamp?this:t},max(t){return this._timestamp>=t._timestamp?this:t},isWeekday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)!==Constants.Friday},isWeekend(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Friday},isSaturday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Saturday},isSunday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Sunday},isMonday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Monday},isTuesday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Tuesday},isWednesday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Wednesday},isThursday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Thursday},isFriday(){return this._currentCalendar.dayOfWeek(this._timestamp+this._timezoneOffset)===Constants.Friday},isYesterday(){const t=Pasoonate.make().gregorian().subDay(1);return 0===this.gregorian().diffInDays(t)},isToday(){const t=Pasoonate.make().gregorian();return 0===this.gregorian().diffInDays(t)},isTomorrow(){const t=Pasoonate.make().gregorian().addDay(1);return 0===this.gregorian().diffInDays(t)},isFuture(){const t=Pasoonate.make().gregorian();return this.gregorian().diffInDays(t)>1},isPast(){return Pasoonate.make().gregorian().gregorian().diffInDays(this)>1},isLeapYear(){return this._currentCalendar.isLeap(this._currentCalendar.getYear())},isSameDay(t){return 0===this.gregorian().diffInDays(t)}},Difference={diff(t){const e=this.diffInSeconds(t),a=e/Constants.DayInSeconds,s=parseInt(a)/Constants.YearInDays,n=parseInt(a)/Constants.MonthInDays,i=this.diffInDays(t)%Constants.MonthInDays,r=this.diffInHours(t)%Constants.HoursPerDay,o=this.diffInMinutes(t)%Constants.MinutesPerHour,h=e%Constants.SecondsPerMinute;return{years:parseInt(s),months:parseInt(n),days:parseInt(i),hours:parseInt(r),minutes:parseInt(o),seconds:parseInt(h)}},diffInSeconds(t){return Math.abs(this.getTimestamp()-t.getTimestamp())},diffInMinutes(t){const e=Math.abs(this.getTimestamp()-t.getTimestamp());return e>=Constants.SecondsPerMinute?parseInt(e/Constants.SecondsPerMinute):0},diffInHours(t){const e=Math.abs(this.getTimestamp()-t.getTimestamp());return e>=Constants.HourInSeconds?parseInt(e/Constants.HourInSeconds):0},diffInDays(t){const e=Math.abs(this.getTimestamp()-t.getTimestamp());return e>=Constants.DayInSeconds?parseInt(e/Constants.DayInSeconds):0},diffInMonths(t){const e=Math.abs(this.getTimestamp()-t.getTimestamp());return e>=Constants.MonthInSeconds?parseInt(e/Constants.MonthInSeconds):0},diffInYears(t){const e=Math.abs(this.getTimestamp()-t.getTimestamp());return e>=Constants.YearInSeconds?parseInt(e/Constants.YearInSeconds):0}},Modifiers={startOfDay(){return this.setTime(0,0,0)},endOfDay(){return this.setTime(23,59,59)},startOfMonth(){return this.setDay(1).startOfDay()},endOfMonth(){return this.setDay(this._currentCalendar.daysInMonth(this.getYear(),this.getMonth())).endOfDay()},startOfYear(){return this.setMonth(1).startOfMonth()},endOfYear(){return this.setMonth(12).endOfMonth()},startOfWeek(){const t=this.dayOfWeek();return this.subDay(t).startOfDay()},endOfWeek(){const t=6-this.dayOfWeek();return this.addDay(t).endOfDay()}};class Calendar{constructor(){this.J1970=2440587.5,this.name=""}getName(){return this.name}timestampToJulianDay(t){let e=t/Constants.DayInSeconds+this.J1970,a=Math.round(1e7*(e-Math.floor(e)))/1e7;return Math.floor(e)+a}julianDayToTimestamp(t){return Math.round((t-this.J1970)*Constants.DayInSeconds)}julianDayWithoutTime(t){return Math.floor(t)+(t-Math.floor(t)>=.5?.5:-.5)}extractJulianDayTime(t){t+=.5;let e=Math.floor((t-Math.floor(t))*Constants.DayInSeconds);return{hour:Math.floor(e/3600),minute:Math.floor(e/60%60),second:Math.floor(e%60)}}addTimeToJulianDay(t,e,a,s){let n=this.julianDayToTimestamp(t);n+=3600*e+60*a+s,t=this.timestampToJulianDay(n);let i=Math.round(1e7*(t-Math.floor(t)))/1e7;return Math.floor(t)+i}dateToJulianDay(t,e,a,s,n,i){}dateToTimestamp(t,e,a,s,n,i){let r=this.dateToJulianDay(t,e,a,s,n,i);return this.julianDayToTimestamp(r)}julianDayToDate(t){}timestampToDate(t){let e=this.timestampToJulianDay(t);return this.julianDayToDate(e)}daysInMonth(t,e){return 0}dayOfWeek(t){let e=this.timestampToJulianDay(t);return this.mod(Math.floor(e+2.5),7)}dayOfYear(t){let e=this.timestampToDate(t),a=this.dateToJulianDay(e.year,1,1,0,0,0),s=this.dateToJulianDay(e.year,e.month,e.day,e.hour,e.minute,e.second);return Math.floor(s-a+1)}weekOfMonth(t){let e=this.timestampToDate(t),a=this.dateToTimestamp(e.year,e.month,1,e.hour,e.minute,e.second),s=this.dayOfWeek(t),n=this.dayOfWeek(a),i=1;return e.day<=7-n?i:i+=(e.day-(7-n+(s+1)))/7+1}weekOfYear(t){let e=this.timestampToDate(t),a=this.dayOfYear(t),s=this.dateToTimestamp(e.year,1,1,e.hour,e.minute,e.second),n=this.dayOfWeek(t),i=this.dayOfWeek(s),r=1;return a<=7-i?r:r+=(a-(7-i+(n+1)))/7+1}mod(t,e){return t-e*Math.floor(t/e)}isLeap(t){}}class CalendarManager{constructor(t,e){this._gregorian=new GregorianCalendar,this._jalali=new JalaliCalendar,this._islamic=new IslamicCalendar,this._shia=new ShiaCalendar,this._currentCalendar=null,this._formatter=Pasoonate.formatter;let a=new Date;this._timestamp=t||Math.floor(a.getTime()/1e3),this._timezoneOffset=void 0!==e||60*-a.getTimezoneOffset()}gregorian(t){return this._currentCalendar=this._gregorian,this.parse(t),this}jalali(t){return this._currentCalendar=this._jalali,this.parse(t),this}islamic(t){return this._currentCalendar=this._islamic,this.parse(t),this}shia(t){return this._currentCalendar=this._shia,this.parse(t),this}name(t){if(!t)return this._currentCalendar?this._currentCalendar.getName():"";{const e=this[`_${t=String(t).toLowerCase()}`];e&&(this._currentCalendar=e)}}parse(t){if(this._currentCalendar&&t){const[e,a]=String(t).trim().split(" ");if(e){const[t,a,s]=e.trim().split(/[\/-]/g);this.setDate(Number(t),Number(a)||1,Number(s)||1)}if(a){const[t,e,s]=a.trim().split(":");this.setTime(Number(t)||0,Number(e)||0,Number(s)||0)}}return this}format(t,e){return this._formatter.setCalendar(this),this._formatter.format(t,e)}clone(){return Pasoonate.make(this.getTimestamp(),this.getTimezoneOffset())}}Object.assign(CalendarManager.prototype,Base),Object.assign(CalendarManager.prototype,AdditionAndSubtraction),Object.assign(CalendarManager.prototype,Difference),Object.assign(CalendarManager.prototype,Comparison),Object.assign(CalendarManager.prototype,Modifiers);class GregorianCalendar extends Calendar{constructor(){super(),this.name="gregorian",this.GregorianEpoch=1721425.5,Object.defineProperty(this,"GregorianEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,s,n,i){let r=this.GregorianEpoch-1;return r+=365*(t-1),r+=Math.floor((t-1)/4),r+=-1*Math.floor((t-1)/100),r+=Math.floor((t-1)/400),r+=Math.floor((367*e-362)/12+(e<=2?0:this.isLeap(t)?-1:-2)+a),this.addTimeToJulianDay(r,s,n,i)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t);let a=Math.floor(t-.5)+.5,s=a-this.GregorianEpoch,n=Math.floor(s/146097),i=this.mod(s,146097),r=Math.floor(i/36524),o=this.mod(i,36524),h=Math.floor(o/1461),m=this.mod(o,1461),u=Math.floor(m/365),d=400*n+100*r+4*h+u;4!=r&&4!=u&&d++;let l=a-this.julianDayWithoutTime(this.dateToJulianDay(d,1,1,e.hour,e.minute,e.second)),c=a<this.julianDayWithoutTime(this.dateToJulianDay(d,3,1,e.hour,e.minute,e.second))?0:this.isLeap(d)?1:2,_=Math.floor((12*(l+c)+373)/367);return{year:d,month:_,day:a-this.julianDayWithoutTime(this.dateToJulianDay(d,_,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&2==e?29:[31,28,31,30,31,30,31,31,30,31,30,31][e-1]}isLeap(t){return t%4==0&&!(t%100==0&&t%400!=0)}}class IslamicCalendar extends Calendar{constructor(){super(),this.name="islamic",this.IslamicEpoch=1948439.5,Object.defineProperty(this,"IslamicEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,s,n,i){let r=a;return r+=Math.ceil(29.5*(e-1)),r+=354*(t-1),r+=Math.floor((11*t+3)/30),r+=this.IslamicEpoch-1,this.addTimeToJulianDay(r,s,n,i)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t),t=Math.floor(t)+.5;let a=Math.floor((30*(t-this.IslamicEpoch)+10646)/10631),s=Math.min(12,Math.ceil((t-(29+this.julianDayWithoutTime(this.dateToJulianDay(a,1,1,e.hour,e.minute,e.second))))/29.5)+1);return{year:a,month:s,day:t-this.julianDayWithoutTime(this.dateToJulianDay(a,s,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&12==e?30:[30,29,30,29,30,29,30,29,30,29,30,29][e-1]}isLeap(t){return(11*t+14)%30<11}}class JalaliCalendar extends Calendar{constructor(){super(),this.name="jalali",this.JalaliEpoch=1948320.5,Object.defineProperty(this,"JalaliEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,s,n,i){let r=t-(t>=0?474:473),o=474+this.mod(r,2820),h=a;return h+=e<=7?31*(e-1):30*(e-1)+6,h+=Math.floor((682*o-110)/2816),h+=365*(o-1),h+=1029983*Math.floor(r/2820),h+=this.JalaliEpoch-1,this.addTimeToJulianDay(h,s,n,i)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t);let a,s,n,i=(t=Math.floor(t)+.5)-this.julianDayWithoutTime(this.dateToJulianDay(475,1,1,e.hour,e.minute,e.second)),r=Math.floor(i/1029983),o=this.mod(i,1029983);1029982==o?a=2820:(s=Math.floor(o/366),n=this.mod(o,366),a=Math.floor((2134*s+2816*n+2815)/1028522)+s+1);let h=a+2820*r+474;h<=0&&h--;let m=t-this.julianDayWithoutTime(this.dateToJulianDay(h,1,1,e.hour,e.minute,e.second))+1,u=m<=186?Math.ceil(m/31):Math.ceil((m-6)/30);return{year:h,month:u,day:t-this.julianDayWithoutTime(this.dateToJulianDay(h,u,1,e.hour,e.minute,e.second))+1,hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return t&&this.isLeap(t)&&12==e?30:[31,31,31,31,31,31,30,30,30,30,30,29][e-1]}isLeap(t){return 682*((t-(t>0?474:473))%2820+474+38)%2816<682}}class ShiaCalendar extends Calendar{constructor(){super(),this.name="shia",this.ShiaEpoch=1948439.5,Object.defineProperty(this,"ShiaEpoch",{writable:!1,configurable:!1})}dateToJulianDay(t,e,a,s,n,i){const r=this.daysInMonth(t,e);let o=a,h=0;a>r&&(o=a-r,t=12===e?t+1:t,e=12===e?1:e+1);for(let a=1;a<e;a++)o+=this.daysInMonth(t,a);return h+=o,h+=(t-1)*Constants.DaysOfShiaYear,h+=Math.floor((11*t+3)/30),h+=this.ShiaEpoch-(1440===t?2:1),this.addTimeToJulianDay(h,s,n,i)}julianDayToDate(t){let e=this.extractJulianDayTime(t);t=this.julianDayWithoutTime(t);let a=Math.floor((30*(t-this.ShiaEpoch)+10646)/10631),s=Math.min(12,Math.ceil((t-(29+this.julianDayWithoutTime(this.dateToJulianDay(a,1,1,e.hour,e.minute,e.second))))/29.5)+1),n=t-this.julianDayWithoutTime(this.dateToJulianDay(a-1,12,this.daysInMonth(a-1,12),e.hour,e.minute,e.second)),i=0;for(let t=1;t<=12;t++)if(n<=(i+=this.daysInMonth(a,t))){s=t;break}return{year:a,month:s,day:n-(i-this.daysInMonth(a,s)),hour:e.hour,minute:e.minute,second:e.second}}daysInMonth(t,e){let a=[30,29,30,29,30,29,30,29,30,29,30,29],s={1435:[29,30,29,30,29,30,29,30,30,30,29,30],1436:[29,30,29,29,30,29,30,29,30,29,30,30],1437:[29,30,30,29,30,29,29,30,29,29,30,30],1438:[29,30,30,30,29,30,29,29,30,29,29,30],1439:[29,30,30,30,30,29,30,29,29,30,29,29],1440:[30,29,30,30,30,29,30,29,30,29,30,29],1441:[29,30,29,30,30,29,30,29,30,29,30,29]};if(e<1||e>12)throw new RangeException("$month Out Of Range Exception");return void 0===s[t]?a[e-1]:s[t][e-1]}isLeap(t){return(11*t+14)%30<11}}class DateFormat{constructor(){this._calendar=null}setCalendar(t){this._calendar=t instanceof CalendarManager?t:null}getCalendar(){return this._calendar}format(){return null===this.getCalendar()?"":`${this._calendar.getYear()}-${this._calendar.getMonth()}-${this._calendar.getDay()} ${this._calendar.getHour()}:${this._calendar.getMinute()}:${this._calendar.getSecond()}`}}class SimpleDateFormat extends DateFormat{constructor(){super()}format(t,e){return this.compile(t,e)}compile(t,e){t=String(t);let a=[],s="",n="",i=0;for(let e=0;e<t.length;e++)""!==(n=t[e])&&(n===s?a[i]+=n:a[++i]=n,s=n);for(let t in a)switch(a[t]){case"yyyy":a[t]=this.getCalendar().getYear();break;case"yy":a[t]=String(this.getCalendar().getYear()).substr(-2,2);break;case"MMMM":a[t]=Pasoonate.trans(`${this.getCalendar().name()}.month_name.${this.getCalendar().getMonth()}`);break;case"MMM":a[t]=Pasoonate.trans(`${this.getCalendar().name()}.short_month_name.${this.getCalendar().getMonth()}`);break;case"MM":a[t]=this.getCalendar().getMonth()>9?this.getCalendar().getMonth():`0${this.getCalendar().getMonth()}`;break;case"M":a[t]=this.getCalendar().getMonth();break;case"dddd":a[t]=Pasoonate.trans(`${this.getCalendar().name()}.day_name.${this.getCalendar().dayOfWeek()}`);break;case"ddd":a[t]=Pasoonate.trans(`${this.getCalendar().name()}.short_day_name.${this.getCalendar().dayOfWeek()}`);break;case"dd":a[t]=this.getCalendar().getDay()>9?this.getCalendar().getDay():`0${this.getCalendar().getDay()}`;break;case"d":a[t]=this.getCalendar().getDay();break;case"HH":a[t]=this.getCalendar().getHour()>9?this.getCalendar().getHour():`0${this.getCalendar().getHour()}`;break;case"H":a[t]=this.getCalendar().getHour();break;case"mm":a[t]=this.getCalendar().getMinute()>9?this.getCalendar().getMinute():`0${this.getCalendar().getMinute()}`;break;case"m":a[t]=this.getCalendar().getMinute();break;case"ss":a[t]=this.getCalendar().getSecond()>9?this.getCalendar().getSecond():`0${this.getCalendar().getSecond()}`;break;case"s":a[t]=this.getCalendar().getSecond()}return a.join("")}}const Constants={J1970:2440587.5,Saturday:0,Sunday:1,Monday:2,Tuesday:3,Wednesday:4,Thursday:5,Friday:6,YearsPerCentury:100,YearsPerDecade:10,MonthsPerYear:12,WeeksPerYear:52,DaysPerWeek:7,HoursPerDay:24,MinutesPerHour:60,SecondsPerMinute:60,HourInSeconds:3600,DayInSeconds:86400,WeekInSeconds:604800,MonthInSeconds:2629743,YearInSeconds:31556926,MonthInDays:30.44,YearInDays:365.24,ShiaEpoch:1948439.5,JalaliEpoch:1948320.5,GregorianEpoch:1721425.5,IslamicEpoch:1948439.5,DaysOfIslamicYear:354,DaysOfShiaYear:354,DaysOfJalaliYear:365,DaysOfGregorianYear:365,Gregorian:"gregorian",Jalali:"jalali",Shia:"shia",Islamic:"islamic"};class Localization{constructor(){this._langs={},this._locale="fa"}setLang(t,e){this._langs[t]=e}setLocale(t){this._locale=t||this._locale}getLocale(){return this._locale}isLocale(t){return this._locale===t}hasTransKey(t,e){let a=t.split(".");if(null==this._langs[e])return!1;let s=this._langs[e];for(let t=0;t<a.length;t++){if(!(a[t]in s))return!1;s=s[a[t]]}return s}getTrans(t,e){let a=this.hasTransKey(t,e);return a||t}trans(t,e){return e=e||this._locale,t=t||"",this.getTrans(t,e)}}class Pasoonate{constructor(){}static make(t,e){return new CalendarManager(t,e)}static trans(t,e){return Pasoonate.localization.trans(t,e)}static setLocale(t){Pasoonate.localization.setLocale(t)}static getLocal(){return Pasoonate.localization.getLocal()}static isLocal(t){return Pasoonate.localization.isLocal(t)}static setFormatter(t){Pasoonate.formatter=t instanceof DateFormat?t:new SimpleDateFormat}static clone(t){return Pasoonate.make(t.getTimestamp(),t.getTimezoneOffset())}}Object.assign(Pasoonate,Constants),Pasoonate.localization=new Localization,Object.defineProperty(Pasoonate,"localization",{writable:!1,configurable:!1}),Pasoonate.formatter=new SimpleDateFormat,Object.defineProperty(Pasoonate,"formatter",{writable:!0,configurable:!1});let fa={gregorian:{day_name:{0:"Saturday",1:"Sunday",2:"Monday",3:"Tuesday",4:"Wednesday",5:"Thursday",6:"Friday"},short_day_name:{0:"Sat",1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thu",6:"Fri"},month_name:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},short_month_name:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}},jalali:{day_name:{0:"شنبه",1:"یک‌شنبه",2:"دوشنبه",3:"سه‌شنبه",4:"چهارشنبه",5:"پنج‌شنبه",6:"جمعه"},short_day_name:{0:"ش",1:"ی",2:"د",3:"س",4:"چ",5:"پ",6:"ج"},month_name:{1:"فروردین",2:"اردیبهشت",3:"خرداد",4:"تیر",5:"مرداد",6:"شهریور",7:"مهر",8:"آبان",9:"آذر",10:"دی",11:"بهمن",12:"اسفند"},short_month_name:{1:"فرو",2:"ارد",3:"خرد",4:"تیر",5:"مرد",6:"شهر",7:"مهر",8:"آبا",9:"آذر",10:"دی",11:"بهم",12:"اسف"}},islamic:{day_name:{0:"السبت",1:"الأحَد",2:"الإثنين",3:"الثلاثاء",4:"الأربعاء",5:"الخميس",6:"الجمعة"},short_day_name:{0:"السبت",1:"الأحَد",2:"الإثنين",3:"الثلاثاء",4:"الأربعاء",5:"الخميس",6:"الجمعة"},month_name:{1:"محرم",2:"صفر",3:"ربیع‌الاول",4:"ربیع‌الثانی",5:"جمادی‌الاول",6:"جمادی‌الثانی",7:"رجب",8:"شعبان",9:"رمضان",10:"شوال",11:"ذیقعده",12:"ذیحجه"},short_month_name:{1:"محرم",2:"صفر",3:"ربیع‌الاول",4:"ربیع‌الثانی",5:"جمادی‌الاول",6:"جمادی‌الثانی",7:"رجب",8:"شعبان",9:"رمضان",10:"شوال",11:"ذیقعده",12:"ذیحجه"}},shia:{day_name:{0:"السبت",1:"الأحَد",2:"الإثنين",3:"الثلاثاء",4:"الأربعاء",5:"الخميس",6:"الجمعة"},short_day_name:{0:"السبت",1:"الأحَد",2:"الإثنين",3:"الثلاثاء",4:"الأربعاء",5:"الخميس",6:"الجمعة"},month_name:{1:"محرم",2:"صفر",3:"ربیع‌الاول",4:"ربیع‌الثانی",5:"جمادی‌الاول",6:"جمادی‌الثانی",7:"رجب",8:"شعبان",9:"رمضان",10:"شوال",11:"ذیقعده",12:"ذیحجه"},short_month_name:{1:"محرم",2:"صفر",3:"ربیع‌الاول",4:"ربیع‌الثانی",5:"جمادی‌الاول",6:"جمادی‌الثانی",7:"رجب",8:"شعبان",9:"رمضان",10:"شوال",11:"ذیقعده",12:"ذیحجه"}}};Pasoonate.localization.setLang("fa",fa);