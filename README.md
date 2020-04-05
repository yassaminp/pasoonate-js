# pasoonate-js
Pasoonate is a library that includes date-time methods and calendars.

Install with [npm](https://www.npmjs.com): ```npm install pasoonate```

```
const now = Pasoonate.make();
```

```
now.gregorian().format('yyyy-MM-dd'); //2019-04-19
```

```
let datetime = now.jalali('1398/02/01 20:00:00').gregorian().getDateTime();
```

## Available calendars

- Gregorian
- Jalali
- Islamic
- Shia


## Basic methods

- getTimestamp()
- getTimezoneOffset()
- getDatetime()
- getDate()
- getTime()
- getYear()
- getMonth()
- getDay()
- getHour()
- getMinute()
- getSecond()
- getUTCDatetime()
- getUTCDate()
- getUTCTime()
- getUTCYear()
- getUTCMonth()
- getUTCDay()
- getUTCHour()
- getUTCMinute()
- getUTCSecond()
- setTimestamp(timestampAsSeconds)
- setTimezoneOffset(offsetAsMinutes)
- setDatetime(year, month, day, hour, minute, second)
- setDate(year, month, day)
- setTime(hour, minute, second)
- setYear(year)
- setMonth(month)
- setDay(day)
- setHour(hour)
- setMinute(minute)
- setSecond(second)
- setUTCDatetime(year, month, day, hour, minute, second)
- setUTCDate(year, month, day)
- setUTCTime(hour, minute, second)
- setUTCYear(year)
- setUTCMonth(month)
- setUTCDay(day)
- setUTCHour(hour)
- setUTCMinute(minute)
- setUTCSecond(second)
- dayOfWeek() `from 0 saturday to 6 friday`
- dayOfYear()
- weekOfMonth()
- weekOfYear()

## Addition and Substraction Methods

- addYear(count)
- addMonth(count)
- addDay(count)
- addHour(count)
- addMinute(count)
- addSecond(count)
- subYear(count)
- subMonth(count)
- subDay(count)
- subHour(count)
- subMinute(count)
- subSecond(count)

## Modifier Methods

### Start Of Day
Set time `00:00:00` of the day.
```
today.jalali('1399/01/15 11:22:00').startOfDay().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/15 00:00:00
```
### End Of Day
Set time `23:59:59` of the day.

```
today.jalali('1399/01/15 11:22:00').endOfDay().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/15 23:59:59
```
### Start Of Month
Set day to 1 of the month and set time as `00:00:00`.

```
today.jalali('1399/01/15 11:22:00').startOfMonth().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/01 00:00:00
```
### End Of Month
Set day to latest day of the month and set time as `23:59:59`.

```
today.jalali('1399/01/15 11:22:00').endOfMonth().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/31 23:59:59
```
### Start Of Year
Sets the day and the month to 1 of the year and set time as `00:00:00`.

```
today.jalali('1399/01/15 11:22:00').startOfYear().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/01 00:00:00
```
### End Of Year
Set day to latest day of the year and set time as `23:59:59`.

```
today.jalali('1399/01/15 11:22:00').endOfYear().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/12/30 23:59:59
```
### Start Of Week
Sets the Saturday of the same week and set time as `00:00:00`.

```
today.jalali('1399/01/15 11:22:00').startOfYear().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/09 00:00:00
```
### End Of Week
Set the Friday of the same week and set time as `23:59:59`.

```
today.jalali('1399/01/15 11:22:00').endOfYear().format('yyyy/MM/dd hh:mm:ss'); 
// 1399/01/15 23:59:59
```
