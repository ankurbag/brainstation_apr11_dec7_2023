import React from "react";

class HelloWorld extends React.Component {
	render() {
		// return (
		// 	<>
		// 		<h1>Hello Ankur</h1>
		// 	</>
		// );

		return React.createElement("h1", null, "Hello Ankur");
	}
}

export default HelloWorld;
