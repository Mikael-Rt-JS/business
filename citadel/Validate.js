class Validate{

	// Общие ошибки
	static err_general={
		required:{
			en:'This field is required.',
			ru:'Поле обязательно для заполнение.'
		},
		invalid:{
			en:'Invalid input.',
			ru:'Введено некорректное значение.'
		}
	}	
	
	// Ошибки валидации формы (текст, число, email)
	static err_form={
		name:{
			en:'Please enter a valid name.',
			ru:'Пожалуйста, введите корректное имя.'
		},
		email:{
			// example@mail.com
			en:'Please enter a valid email address (e.g., {MAIL_FORMAT}).',
			ru:'Введите корректный email (например, {MAIL_FORMAT}).'
		},
		num:{
			en:'This field must contain only numbers.',
			ru:'Поле должно содержать только цифры.'
		},
		str_long: {
			en:'The entered value is too long.',
			ru:'Введённое значение слишком длинное.'
		}
	}
	
	// Ошибки пароля
	static err_password={
		min_length:{
			// 8
			en:'Password must be at least {PASS_MIN_LENGTH} characters long.',
			ru:'Пароль должен содержать минимум {PASS_MIN_LENGTH} символов.'
		},
		max_length:{
			// 255
			en:'Password must be at least {PASS_MAX_LENGTH} characters long.',
			ru:'Пароль должен содержать минимум {PASS_MAX_LENGTH} символов.'
		},
		have_num_str:{
			en:'Password must contain at least one number and one letter.',
			ru:'Пароль должен содержать хотя бы одну цифру и одну букву.'
		},
		no_match:{
			en:'Passwords do not match.',
			ru:'Пароли не совпадают.'
		}
	}
	
	// Ошибки телефона
	static err_phone={
		invalid:{
			// +1 123 456-7890
			en:'Please enter a valid phone number (e.g., {PHONE_FORMAT}).',
			// +7 900 123-45-67
			ru:'Введите корректный номер телефона (например, {PHONE_FORMAT}).'
		}
	}
	
	// Ошибки даты
	static err_date={
		invalid_date:{
			// DD.MM.YYYY
		en:'Please enter a valid date in the format {DATE_FORMAT}.',
			// ДД.ММ.ГГГГ
			ru:'Введите корректную дату в формате {DATE_FORMAT}.'
		},
		past_date:{
			en:'Date cannot be in the past.',
			ru:'Дата не может быть в прошлом.'
		}
	}

	
	// Ошибки загрузки файлов
	static err_files={
		file_size:{
			// 5MB
			en:'The file is too large. Maximum size: {FILE_SIZE}.',
			ru:'Файл слишком большой. Максимальный размер: {FILE_SIZE}.'
		},
		file_format:{
			// JPG, PNG, PDF
			en:'Invalid file format. Only {FILE_FORMAT} are allowed.',
			ru:'Недопустимый формат файла. Разрешены только {FILE_FORMAT}.'
		}
	}
	
	/*
	static names_type({input,min_leng,max_leng,reg}){
		if(input.length<min_leng){
			
		}
	}
	*/
}	

/*
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let errors = [];

    const companyName = form.company_name.value.trim();
    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    const phone = form.phone.value.trim();
    const telegramId = form.telegram_id.value.trim();
    const password = form.password.value.trim();
    const repeatPassword = form.repeat_password.value.trim();
    const status = form.status.value;

    if (!companyName) errors.push("Введите название компании");
    if (!name) errors.push("Введите имя");
    if (!surname) errors.push("Введите фамилию");
    if (!phone) errors.push("Введите телефон");
    if (!/^\d+$/.test(phone)) errors.push("Телефон должен содержать только цифры");
    if (!telegramId) errors.push("Введите Telegram ID");
    if (!status) errors.push("Выберите статус");
    
    if (!password) {
      errors.push("Введите пароль");
    } else if (password.length < 6) {
      errors.push("Пароль должен быть не менее 6 символов");
    }

    if (password !== repeatPassword) {
      errors.push("Пароли не совпадают");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Форма успешно отправлена!");
      form.submit(); // Убирай эту строку, если не хочешь реальной отправки
    }
  });
});

err_company_name: '',
		err_name: '',
		err_surname: '',
		err_phone: '',
		err_telegram_id: '',
		err_password: '',
		err_repeat_password: ''

*/