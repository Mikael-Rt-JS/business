class RINI{
	static readFile(input) {
	  //let file = input.files[0];

	  let reader = new FileReader();

	  reader.readAsText(`${input}`);

	  reader.onload = function() {
		console.log(reader.result);
	  };

	  reader.onerror = function() {
		console.log(reader.error);
	  };

	}
}
RINI.readFile('./config.ini')