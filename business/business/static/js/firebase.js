import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


window.c=console.log
// Конфигурация Firebase (замени своими данными)
window.firebaseConfig = {
	apiKey: "AIzaSyBtIrT2oIbrOMruOfrY8yaeFiAwrJLjXAQ",
	authDomain: "foryourbusiness-de00d.firebaseapp.com",
	databaseURL: "https://foryourbusiness-de00d-default-rtdb.firebaseio.com",
	projectId: "foryourbusiness-de00d",
	storageBucket: "foryourbusiness-de00d.firebasestorage.app",
	messagingSenderId: "287215964713",
	appId: "1:287215964713:web:dd65f51fb5f43a836b4238",
	measurementId: "G-QBS3M016MX"
};

window.appFbe = initializeApp(window.firebaseConfig);
window.databaseFbe = getDatabase(window.appFbe);

window.c(45)
// Пример записи данных
/*function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
writeUserData(1, 'Anni', 'email_Anni@mail.ru', 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg')
*/

  // Пример чтения данных
  /*database.ref("users/user1").on("value", (snapshot) => {
    console.log(snapshot.val()); // Выведет объект { name: "Иван", age: 25 }
  });*/