// https://doka.guide/js/session-storage/

class Sess_store{

	// Запись - Записываем данные:
	static w([key,val]){
		let message=''
		try{
			window.sessionStorage.setItem(key,val)
		}catch(err){
			if(err){
				message=err
			}
		}finally{
			message ? message : true
		}
	}
	
	/*
	Чтение - При чтении ранее записанных данных по ключу name мы получим Дока Дог:
	если по этому ключу нет значения, то метод вернёт null.
	*/
	static r([key,answer]){
		let data=window.sessionStorage.getItem(key) 
		if(data!=null && answer===0){
			return true
		}else if(data===null && answer===0){
			return false
		}else if(data!=null && answer===1){
			return data
		}
	}
	
	// Очистка хранилища - Метод clear() очищает хранилище полностью.
	static c(answer){
		if(answer===1){
			window.sessionStorage.clear()
		}else{
			window.sessionStorage.clear()
			return true
		}
	}
	
	/*
	Удаление - Удаляет запись из хранилища removeItem('ключ').
	Он успешно выполнится даже если указанного ключа не существует в хранилище.
	*/
	static re(key){
		window.sessionStorage.removeItem(key)
	}
	
	/*
	Количество полей в хранилище-
	Используя свойство length, можно узнать, сколько всего полей было записано в хранилище.
	*/
	static l(){
		return window.sessionStorage.length
	}
	
	/*
	Получение ключа по индексу
	Метод key() получает ключ по индексу.
	Значения в хранилище хранятся в порядке их добавления,
	поэтому значение, добавленное первым, будет храниться в позиции 0 и так далее.
	*/
	static indx(positionIndex){
		let key=window.sessionStorage.key(positionIndex)
		return key
	}
	
	/*
	Таким образом, используя количество полей в хранилище и получение ключа по индексу, можно перебрать все значения в хранилище.
	*/
	static loop(answer){
		let sessionStorageSize=Sess_store.l()
		// window.sessionStorage.getItem(sessionStorage.key(i))
		for (let i = 0; i < sessionStorageSize; i++) {
			if(answer===0){
				console.log(Sess_store.indx(i)) //отобразить в консоли keyname
			}else if(answer===1){
				return Sess_store.indx(i) //вернуть keyname
			}else if(answer===2){
				return Sess_store.r([Sess_store.indx(i),2]) //вернуть со значением keyname
			}else{
				console.log(Sess_store.r([Sess_store.indx(i),1])) //отобразить в консоли keyname со значением
			}
		}
	}
	
	toString(answer){
		if(answer){
			return JSON.stringify(this)
		}else{
			console.log(this)
		}
	}
}

let sse=new Sess_store()

