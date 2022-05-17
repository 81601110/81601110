/*
app下载地址：https://is.gd/atCoeV

#圈Xpear解锁会员
^https:\/\/m\.pearkin\.com\/api\/(movie\/WatchMovie|account\/IsVip|Account\/CheckVip|account\/IndexDetail|account\/IsSafeUser|PictureSet\/LookPhoto|account\/Milk|video\/watch.*|video\/WatchCount|account\/UserSetting|account\/suport|download\/CheckDownloadTorrent) url script-response-body pear.js

[mitm]
hostname =m.pearkin.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/movie/WatchMovie';

const checkvip = '/account/IsVip';

const checkvip2 = '/Account/CheckVip';

const vipinfo = '/account/IndexDetail';

const safe = '/account/IsSafeUser';

const picfree = '/PictureSet/LookPhoto';

const spfree = '/video/watch';

const spcount = '/video/WatchCount';

const milk = '/account/Milk';

const point = '/account/UserSetting';

const suport = '/account/suport';

const down = '/download/CheckDownloadTorrent';


if (url.indexOf(vip) != -1) {
	obj["canWath"] = true;
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = 1;
   obj["value"] = true;
	body = JSON.stringify(obj);
 }
if (url.indexOf(checkvip2) != -1) {
	obj["data"] = 1;
   obj["value"] = true;
	body = JSON.stringify(obj);
 }

if (url.indexOf(vipinfo) != -1) {
	obj["nickName"] = "小博VS老耿";
   obj["rewardBadge"] = true;
   obj["vipLevel"] = 3;
   obj["isTenRealCarUser"] = true;
   obj["vipEndTime"] = "2999-09-10";
   obj["cartoonVipEndTime"] = "2999-09-10";
   obj["cartoonVip"] = true;
   obj["hadTopicBadge"] = true;


	body = JSON.stringify(obj);
 }
if (url.indexOf(safe) != -1) {
	obj["value"] = true;
	body = JSON.stringify(obj);
 }
if (url.indexOf(picfree) != -1) {
	obj["value"] = true;
	body = JSON.stringify(obj);
 }
if (url.indexOf(spfree) != -1) {
	obj["value"] = true;
	body = JSON.stringify(obj);
 }
if (url.indexOf(spcount) != -1) {
	obj["todayCanWatchCount"] = 9999;
	body = JSON.stringify(obj);
 }
if (url.indexOf(milk) != -1) {
	obj["milkName"] = "肯德鸡";
   	obj["milkLevel"] = 7;
	body = JSON.stringify(obj);
 }
if (url.indexOf(point) != -1) {
	obj["orderVip"] = true;
   	obj["accountHadSet"] = true;
   obj["memberPoint"] = 8000;
	body = JSON.stringify(obj);
 }
if (url.indexOf(suport) != -1) {
	obj["outPutModel"].isVip = true;
	obj["outPutModel"].vipEndTime = "2028-05-21";
	obj["outPutModel"].nickName = "你真聪明";
	obj["giftBagDto"][1].isDefault = true;
	body = JSON.stringify(obj);
 }


if (url.indexOf(down) != -1) {
	obj["isVip"] = true;
	obj["hadLoadCount"]= 500;
	obj["toDayCanLoadCount"]= 8000;
	obj["allCount"] = 9999;
	obj["vipLevel"] = 3;
	body = JSON.stringify(obj);
 }

$done({body});

/* 
if (url.indexOf(ACG) != -1) {
	obj["data"] = 0;
	delete obj.message;
	obj["value"] = true;
	body = JSON.stringify(obj);
 } */
