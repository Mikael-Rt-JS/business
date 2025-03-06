FIREBASE

Project name: ForYourBusiness 
Project ID: foryourbusiness-de00d 
(Глобальный уникальный идентификатор вашего проекта, используемый в URL-адресе вашей базы данных Realtime,
 поддоменах Firebase Hosting и т. д. Вы не можете изменить свой идентификатор проекта после его создания.)

Помощь ИИ для вашего проекта Firebase
Gemini в Firebase интегрирован в консоль Firebase, помогая оптимизировать процесс разработки.

Пообщайтесь с Gemini, чтобы спланировать и разработать свое приложение, устранить неполадки и получить рекомендации, основанные на передовом опыте.
Получите помощь ИИ в Firebase Crashlytics для отладки и устранения неполадок в приложениях Apple и Android.

Google Analytics
для вашего проекта Firebase
Google Analytics — это бесплатное и неограниченное аналитическое решение, которое позволяет настраивать таргетинг,
 создавать отчеты и многое другое в Firebase Crashlytics, Cloud Messaging, сообщениях внутри приложений,
 Remote Config, A/B-тестировании и Cloud Functions.

Google Analytics позволяет:
A/B-тестирование

Сегментация и таргетинг пользователей в продуктах Firebase

Журналы навигации в Crashlytics

Триггеры облачных функций на основе событий

Бесплатная неограниченная отчетность

https://console.firebase.google.com/project/foryourbusiness-de00d/overview?fb_gclid=CjwKCAiAlPu9BhAjEiwA5NDSA2uPB0FLESq6exKM1FZL_BeEp6GmtTMpZpkwFexCQw28HSPsmavA1BoC0oEQAvD_BwE

ПРОБУЕМ Firestore Database
Database ID: (default)
Location: nam5 (United States)

database/<database_name>/documents/restaurants/todd_tacos
по умолчанию выглядет так правила
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

иерархический
service cloud.firestore {
  match /databases/{database}/documents {
    match /restaurants/{restaurantID} {
      
    }
    match /private-data/{privatDoc} {
      
    }
    match /restaurants/{restaurantID}/reviews/{reviewID} {
      
    }
  }
}


service cloud.firestore {
  match /databases/{database}/documents {
    match /restaurants/{restaurantID} {
      
    }
  }
}
 ладно пропускаю =======================================//
Realtime Database location
United States (us-central1)

https://foryourbusiness-de00d-default-rtdb.firebaseio.com/

ForYourBusiness
foryourbusiness-de00d

https://console.firebase.google.com/project/foryourbusiness-de00d/overview?fb_gclid=CjwKCAiAlPu9BhAjEiwA5NDSA2uPB0FLESq6exKM1FZL_BeEp6GmtTMpZpkwFexCQw28HSPsmavA1BoC0oEQAvD_BwE
Также настройте Firebase Hosting для этого приложения.
Узнать больше
Хостинг также можно настроить позже. Нет никаких затрат, чтобы начать в любое время.
oryourbusiness-de00d
(No deploys yet)

npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Use a <script> tag

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

#-----

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>