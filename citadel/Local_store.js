class Local_store{
	
	// Запись - Записываем данные:
	static w([key,val]){
		let message=''
		try{
			window.localStorage.setItem(key,val)
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
		let data=window.localStorage.getItem(key) 
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
			window.localStorage.clear()
		}else{
			window.localStorage.clear()
			return true
		}
	}
	
	/*
	Удаление - Удаляет запись из хранилища removeItem('ключ').
	Он успешно выполнится даже если указанного ключа не существует в хранилище.
	*/
	static re(key){
		window.localStorage.removeItem(key)
	}
	
	toString(answer){
		if(answer){
			return JSON.stringify(this)
		}else{
			console.log(this)
		}
	}
}
let lse=new Local_store()