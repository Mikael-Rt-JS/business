const signup_form=$(`#signup_form`)

signup_form.addEventListener("submit", function (event) {
    event.preventDefault();
	empty_html([
		'err_company_name',
		'err_name',
		'err_surname',
		'err_phone',
		'err_telegram_id',
		'err_password',
		'err_repeat_password'
	])
	
    let isValid = true;
    let errors = {};

    const companyName = signup_form.company_name.value.trim();
    const name = signup_form.name.value.trim();
    const surname = signup_form.surname.value.trim();
    const phone = signup_form.phone.value.trim();
    const telegramId = signup_form.telegram_id.value.trim();
    const password = signup_form.password.value.trim();
    const repeatPassword = signup_form.repeat_password.value.trim();
    const status = signup_form.status.value;

    if (!companyName) {
		errors.err_company_name='Введите название компании'
    }
	if (!name) {
		errors.err_name='Введите имя'
    }
	if (!surname) {
		errors.err_surname='Введите фамилию'
    }
	if (!phone) {
		errors.err_phone='Введите телефон'
    }
	if (!/^\d+$/.test(phone)){
		errors.err_phone='Телефон должен содержать только цифры'
    }
	if (!telegramId) {
		errors.err_telegram_id='Введите Telegram ID'
    }
	
    if (!password) {
		errors.err_password='Введите пароль'
    } else if (password.length < 6) {
		errors.err_password='Пароль должен быть не менее 6 символов'
    }

    if (password !== repeatPassword) {
		errors.err_repeat_password='Пароли не совпадают'
    }
	
	if (Object.keys(errors).length === 0) {
		signup_form.submit(); // Убирай эту строку, если не хочешь реальной отправки
		window.location.href='./confirm_email.html'
		//alert("Форма успешно отправлена!");
    } else {
		for (let [key,val] of Object.entries(errors)) {
			$(`.${key}`).innerHTML=val
		}
    }
	
 });