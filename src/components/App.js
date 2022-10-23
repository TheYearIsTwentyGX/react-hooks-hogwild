import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [greased, setGreased] = React.useState(false);
	const [sort, setSort] = React.useState("none");

	return (
		<div className="App">
			<Nav />
			<div>
				<hr/>
				<input name="greased" type="checkbox" checked={greased} onChange={() => setGreased(!greased)}/>
				<label htmlFor="greased"> Only show greased hogs</label>
				<br/><br/><p>Sort Style:</p>
				<input name="sort" type="radio" value="none" checked={sort === "none"} onChange={() => setSort("none")}/>
				<label htmlFor="sort"> None</label>
				<br/>
				<input name="sort" type="radio" value="name" checked={sort === "name"} onChange={() => setSort("name")}/>
				<label htmlFor="sort"> Name</label>
				<br/>
				<input name="sort" type="radio" value="weight" checked={sort === "weight"} onChange={() => setSort("weight")}/>
				<label htmlFor="sort"> Weight</label>
				
				<hr/>
			</div>
			<HogList hogs={hogs} filterGreased={greased} sortHogs={sort}/>
		</div>
	);
}

export default App;
