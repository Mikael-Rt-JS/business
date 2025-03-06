const signup_form=$(`#signup_form`)

signup_form.addEventListener("submit", function (event) {
    event.preventDefault();
	empty_html([
		'err_company_name',
		'err_email',
		'err_telegram_id',
		'err_password',
		'err_repeat_password'
	])
	
    let isValid = true;
    let errors = {};

    const companyName = signup_form.company_name.value.trim();
    const email = signup_form.phone.value.trim();
    const password = signup_form.password.value.trim();

    if (!companyName) {
		errors.err_company_name='Введите название компании'
    }
	
    if (!password) {
		errors.err_password='Введите пароль'
    } else if (password.length < 6) {
		errors.err_password='Пароль должен быть не менее 6 символов'
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