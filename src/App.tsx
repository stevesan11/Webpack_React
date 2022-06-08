import React, { useState } from "react";
import axios from "axios";

const App = () => {
	const [fetchData, setFetchData] = useState("undefined");
	const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
		await axios.get("https://localhost:3000/dummy").then((response) => {
			setFetchData(response.data.data);
		});
	};

	return (
		<>
			<button className="bg-black" onClick={clickHandler}>
				Hello World
			</button>
			<p>{`text:${fetchData}`}</p>
		</>
	);
};

export default App;
