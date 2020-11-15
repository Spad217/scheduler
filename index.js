// const tg = require('node-telegram-bot-api');
// const http = require('http');
const hbs = require("hbs");
const express = require("express");
const rp = require("require-promise");

// /const bot = new tg(process.env.API_KEY, {polling: true});
const app = express();

let db = {bots: {}};

// function createKeyboard(select){
// 	// let week = {'пн': '0', 'вт': '1', 'ср': '2', 'чт': '3', 'пт': '4', 'сб': '5', 'нд': '6'};
// 	let base = '';
// 	if(select){
// 		select = select.split(' ').reduce((acc, x) => acc.includes(x)?acc.splice(acc.indexOf(x), 1)&&acc:acc.concat(x), []);
// 		base = select.join(' ') + ' ';
// 	}
// 	return [
// 	[
// 		{ text: "пн" + (select.includes('0')?'✅':''), callback_data: base + '0' },
// 		{ text: "вт" + (select.includes('1')?'✅':''), callback_data: base + '1' },
// 		{ text: "ср" + (select.includes('2')?'✅':''), callback_data: base + '2' }
// 	], [
// 		{ text: "чт" + (select.includes('3')?'✅':''), callback_data: base + '3' },
// 		{ text: "пт" + (select.includes('4')?'✅':''), callback_data: base + '4' },
// 		{ text: "сб" + (select.includes('5')?'✅':''), callback_data: base + '5' }
// 	], [
// 		{ text: "нд" + (select.includes('6')?'✅':''), callback_data: base + '6' },
// 		{ text: "всі", callback_data: '7' },
// 		{ text: "нічого", callback_data: '8' }
// 	], [
// 		{ text: "готово", callback_data: base + '9' }
// 	]];
// }

// function set(msg, next){
// 	const chatId = msg.chat.id;
// 	let spl = msg.text.match(/\/set(@schedule_spad_bot)? (\S+)/);
// 	if(!spl){
// 		let f = next.shift();
// 		return f(msg, next);
// 	}
//
// 	let additional = {
// 		"parse_mode": "Markdown",
// 		reply_markup: {
// 			"inline_keyboard": createKeyboard('')
// 		},
// 		reply_to_message_id: msg.message_id
// 	}
// 	bot.sendMessage(chatId, `Виберіть необхідні дні`, additional);
// 	return true;
// }

// bot.on('message', (msg) => {
// 	const chatId = msg.chat.id;

// 	let array_func = [() => false];
// 	if(!set(msg, array_func)){
// 		bot.sendMessage(chatId, JSON.stringify(msg));
// 	}
// });

// bot.on('callback_query', function onCallbackQuery(callback) {
// 	console.log(callback);
// 	const msg = callback.message;
// 	if(msg.reply_to_message.from.id != callback.from.id){
// 		return bot.answerCallbackQuery(callback.id, {text:'Ти не можеш голосувати', show_alert: false})
// 	}
// 	data = callback.data
// 	if(data == '8') {
// 		data = '';
// 	} else if(data == '7') {
// 		data = '0 1 2 3 4 5 6';
// 	} else if(data.includes('9')) {
		
// 	}

// 	const opts = {
// 		chat_id: msg.chat.id,
// 		message_id: msg.message_id,
// 		"reply_markup": {
// 			"inline_keyboard": createKeyboard(data)
// 		}
// 	};
// 	bot.editMessageText(msg.text, opts).catch(err => bot.answerCallbackQuery(callback.id, {text:'', show_alert: false}));

// });

hbs.registerHelper("getTime", function(){

	var myDate = new Date();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	return "Текущее время: " + hour + ":" + minute + ":" + second;
});


app.use("/api/eval/?", function(req, res){
	if(req.query.key === process.env.SECRET_KEY)
		return res.send(eval(req.query.code || `'log'`));
	return res.send('need key');
});

app.use("/tg_bot/:token/?", function(req, res){
	if(!db.bots[req.params.token]){
	}

	rp(`https://api.telegram.org/bot${token}/sendMessage?chat_id=392041691&text=124qwe`)
});

app.use("/", function(request, response){
	console.log('send');
	response.send(hbs.compile("<h1>Страница не найдена</h1></br>{{getTime}}")({}));
});
console.log(process.env.PORT||80);
app.listen(process.env.PORT||80);
