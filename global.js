let $=ip=>document.querySelector(`${ip}`);
let log=console.log
let dir=console.dir

let lang=$('#lang')
let allLength=['en','ru']

// const 

// переноправить на страницу или URL  с указанием языка
function changeURLLanguage(){
	let lang_s=lang.value
	location.href=window.location.pathname+'#'+lang_s
	lang.value=lang.value
	location.reload()
}  

// удаляет знак #
function del_hash(){
	let hash=window.location.hash
	hash=hash.substr(1)
	return hash
}

// по умолчанию и вставляет выбранный язык
function changeLanguage(){
	let hash=del_hash()
	if(!allLength.includes(hash)){
		location.href=window.location.pathname+'#en'
		location.reload()
	}
	log(3)
	lang.value=hash
}   

function empty_html(objElKey){
	log(typeof objElKey)
	
	if(typeof objElKey==='object'){
		if(Array.isArray(objElKey)){
	log(objElKey)
			
			for (let i=0; i<objElKey.length;i++) {
				$(`.${objElKey[i]}`).innerHTML=''
			}
		}else{
			for (let [key,val] of Object.entries(objElKey)) {
				$(`.${key}`).innerHTML=''
			}
		}
		
	}
}