class Telegram{
	TELEGRAM_BOT_TOKEN='7554180190:AAG6BhEkpLVxQ0fjmAtur4RGrvMi_K5tsiQ'
	TELEGRAM_CHAT_ID=''
	API=`https://api.telegram.org/bot${this.TELEGRAM_BOT_TOKEN}/sendMessage`
}


const TELEGRAM_BOT_TOKEN='7554180190:AAG6BhEkpLVxQ0fjmAtur4RGrvMi_K5tsiQ'
const TELEGRAM_CHAT_ID='7423872095' //username  x @jumppay_bot   
const API=`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(){
	try{
		let res=await fetch(API,{
			method: "POST",
			headers:{
				//'Content-Type': 'application/json;charset=utf-8'
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: '346347'
			})
			//body: 346347
		})
		if(res.ok){
			console.log(true)
		}else{
			throw new Error(res.statusText)
		}
	}catch(err){
		console.log(1)
	}finally{
		console.log(2)
		alert(2)
	}
}
//sendEmailTelegram()
//					<a href="https://t.me/"></a>
