function writeUserData(userId, name, email, imageUrl) {
	const db = getDatabase();
	set(ref(db, 'users/' + userId), {
		username: name,
		email: email,
		profile_picture : imageUrl
	});
}

// ========


const signup_form=$(`#signup_form`)

signup_form.addEventListener("submit", async function (event) {
    event.preventDefault();
	const saltRounds = 10;
	empty_html([
		'err_company_name',
		'err_name',
		'err_surname',
		'err_phone',
		// 'err_telegram_id',
		'err_email',
		'err_password',
		'err_repeat_password'
	])
	
    let isValid = true;
    let errors = {};

    const companyName = signup_form.company_name.value.trim();
    const name = signup_form.name.value.trim();
    const surname = signup_form.surname.value.trim();
    const phone = signup_form.phone.value.trim();
    //const telegramId = signup_form.telegram_id.value.trim();
    const email = signup_form.email.value.trim();
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
	if (!email) {
		errors.err_email='Введите ваш Email'
    }
	/*
	if (!telegramId) {
		errors.err_telegram_id='Введите Telegram ID'
    }
	*/
	
    if (!password) {
		errors.err_password='Введите пароль'
    } else if (password.length < 6) {
		errors.err_password='Пароль должен быть не менее 6 символов'
    }

    if (password !== repeatPassword) {
		errors.err_repeat_password='Пароли не совпадают'
    }
	const hash_pass=await fetch('https://f33dd3b4-5ece-46b2-ae9d-b7e941a18829-00-25wi78uquvuo.spock.replit.dev/catch_request/hash.php', {
		//https://b821d2bd-b9b2-49b5-b950-38f7167df114-00-22p1ln5523dm8.picard.replit.dev/catch_request/hash.php
		//https://f33dd3b4-5ece-46b2-ae9d-b7e941a18829-00-25wi78uquvuo.spock.replit.dev/catch_request/hash.php
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' //application/json+protobuf; charset=UTF-8
        },
        body: JSON.stringify({
			password: password
		})
	})
	.then(res=>res.json())
	.then(data=>data)
	.catch(err=>{
		errors.err_password=err
	})
	
	if (Object.keys(errors).length === 0) {
		let date =new Date()
		//getAllDate(db,table_name,ref,onValue)
		const secretCode = Math.floor(100000 + Math.random() * 900000);
		
		Local_store.w(['user',JSON.stringify({
			company_name:companyName,
			name: name,
			surname: surname,
			phone: phone,
			email:email,
			password: hash_pass,
			status: status,
			my_group:[],
			extension: '',
			registration_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
			})
		])
		
		Local_store.w(['sc',secretCode])
		
		let result=$('.err_msg')
		
		result.innerHTML=''
		//signup_form.submit(); // Убирай эту строку, если не хочешь реальной отправки
		fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				access_key: signup_form.access_key.value.trim(),
				company_name:companyName,
				name: name,
				surname: surname,
				phone: phone,
				email:email,
				msg: `Уважаемый ,
Ваш код: ${secretCode}. Используйте его для доступа к своему аккаунту.

Если вы этого не запрашивали, просто проигнорируйте это сообщение.

С уважением,
Команда ForYourBusiness
-------------------------
Dear ,

Your code is: ${secretCode}. Use it to access your account.

If you didn't request this, simply ignore this message.

Yours,
The ForYourBusiness Team`
})
		}).then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
				window.location.href='./confirm_email.html'
            } else {
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            // console.log(error);
			// "Something went wrong!"
            result.innerHTML = "Что-то пошло не так!";
        })
        /*.then(function() {
            //form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });*/
		
		//alert("Форма успешно отправлена!");
    } else {
		for (let [key,val] of Object.entries(errors)) {
			$(`.${key}`).innerHTML=val
		}
    }
	
 });