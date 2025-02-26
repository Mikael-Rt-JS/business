let c=console.log

function writeUserData([userId, name, email, imageUrl],set,ref,db) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


  // Пример записи данных
  /*database.ref("users/user1").set({
    name: "Иван",
    age: 25
  });*/

  // Пример чтения данных
  /*database.ref("users/user1").on("value", (snapshot) => {
    console.log(snapshot.val()); // Выведет объект { name: "Иван", age: 25 }
  });*/




/*

<script src="https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js"></script>
	<script src="https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js"></script>
	<script>
// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
	apiKey: "AIzaSyBtIrT2oIbrOMruOfrY8yaeFiAwrJLjXAQ",
	authDomain: "foryourbusiness-de00d.firebaseapp.com",
	databaseURL: "https://foryourbusiness-de00d-default-rtdb.firebaseio.com",
	projectId: "foryourbusiness-de00d",
	storageBucket: "foryourbusiness-de00d.firebasestorage.app",
	messagingSenderId: "287215964713",
	appId: "1:287215964713:web:dd65f51fb5f43a836b4238",
	measurementId: "G-QBS3M016MX"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);
	</script>
	<script src="./static/js/firebase.js"></script>
	
	
	const firebaseConfig = {
	apiKey: "AIzaSyBtIrT2oIbrOMruOfrY8yaeFiAwrJLjXAQ",
	authDomain: "foryourbusiness-de00d.firebaseapp.com",
	databaseURL: "https://foryourbusiness-de00d-default-rtdb.firebaseio.com",
	projectId: "foryourbusiness-de00d",
	storageBucket: "foryourbusiness-de00d.firebasestorage.app",
	messagingSenderId: "287215964713",
	appId: "1:287215964713:web:dd65f51fb5f43a836b4238",
	measurementId: "G-QBS3M016MX"
  
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  <script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-app-compat.js"></script>
	<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-database-compat.js"></script>
	<script src="./static/js/firebase.js"></script>
	
	<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js" async></script>
	<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js" async></script>
	
	
	
	export {DataSnapshot,
 Database, OnDisconnect,
 QueryConstraint,
 TransactionResult,
 QueryImpl as _QueryImpl,
 QueryParams as _QueryParams,
 ReferenceImpl as _ReferenceImpl,
 forceRestClient as _TEST_ACCESS_forceRestClient,
 hijackHash as _TEST_ACCESS_hijackHash, _initStandalone,
 repoManagerDatabaseFromApp as _repoManagerDatabaseFromApp,
 setSDKVersion as _setSDKVersion, validatePathString as _validatePathString,
 validateWritablePath as _validateWritablePath, child, connectDatabaseEmulator,
 enableLogging, endAt, endBefore, equalTo, forceLongPolling, forceWebSockets,
 get, getDatabase, goOffline, goOnline, increment, limitToFirst, limitToLast,
 off, onChildAdded, onChildChanged, onChildMoved, onChildRemoved, onDisconnect,
 onValue, orderByChild, orderByKey, orderByPriority, orderByValue, push, query,
 ref, refFromURL, remove, runTransaction, serverTimestamp, set, setPriority,
 setWithPriority, startAfter, startAt, update};
*/