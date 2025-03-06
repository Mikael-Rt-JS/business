class CRUD_F{
	static writeUserData(userId,userData,table_name,set,ref,db) {
	  set(ref(db, `${table_name}` + userId),userData);
	  /*
	  {
		username: name,
		email: email,
		profile_picture : imageUrl
	  }
	  */
	}

	static getAllDate(db,table_name,ref,onValue){
		const starCountRef = ref(db, `${table_name}/`);
		onValue(starCountRef, (snapshot) => {
		  const data = snapshot.val();
		  //updateStarCount(postElement, data);
		  console.log(data)
		});
	}
}