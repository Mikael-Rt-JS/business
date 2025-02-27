class IDB{
	static idb;
	
	//https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
	
	static async make(tableName,version){
		return await window.indexedDB.open(tableName, version);
	}
}


let idb=IDB.make('sss',1)
// Настройка таблиц баз данных, если это ещё не было сделано
idb.onupgradeneeded = function (e) {
  // Захват ссылки на открытую базу данных
  idb = e.target.result;

  // Создайте objectStore, где мы сможем хранить заметки (фактически как единая таблица)
  // включая автоматически увеличивающееся значение ключа
  let objectStore = idb.createObjectStore("notes", {
    keyPath: "id",
    autoIncrement: true,
  });

  // Обозначьте, какие элементы данных будет содержать objectStore
  objectStore.createIndex("aK", "AIzaSyBtIrT2oIbrOMruOfrY8yaeFiAwrJLjXAQ", { unique: false });
  objectStore.createIndex("aD", "foryourbusiness-de00d.firebaseapp.com", { unique: false });
  objectStore.createIndex("dURL", "https://foryourbusiness-de00d-default-rtdb.firebaseio.com", { unique: false });
  objectStore.createIndex("dURL", "https://foryourbusiness-de00d-default-rtdb.firebaseio.com", { unique: false });
  objectStore.createIndex("pid", "foryourbusiness-de00d", { unique: false });
  objectStore.createIndex("sB", "", { unique: false });
  objectStore.createIndex("msId", "", { unique: false });
  objectStore.createIndex("aId", "", { unique: false });
  objectStore.createIndex("mid", "", { unique: false });

  console.log("Database setup complete");
};
// обработчик onerror означает, что база данных не открылась успешно
idb.onerror = function () {
  console.log("Database failed to open");
};

// обработчик onsuccess означает, что база данных открыта успешно
idb.onsuccess = function () {
  console.log("Database opened successfully");

  // Сохраните открытую базу данных в переменной db. Она будет использована ниже
  let idbr = idb.result;

	console.log(idbr)
  // Выполните функцию displayData() для отображения тех заметок, которые уже находятся в IDB
  //displayData();
};

idb.onsuccess()

https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API
https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage