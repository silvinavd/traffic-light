import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	return (
		<div className="bg-dark width">
			<div className="d-flex align-items-center flex-column bd-highlight mb-3">
				<button
					className={
						"btn btn-danger btn-lg rounded-circle m-1 " +
						(color == "red" ? "selected" : "")
					}
					onClick={() => setColor("red")}
					type="button">
					{"R"}
				</button>

				<button
					className={
						"btn btn-warning btn-lg rounded-circle m-1 " +
						(color == "yellow" ? "selected" : "")
					}
					onClick={() => setColor("yellow")}
					type="button">
					A{/*<i class="fas fa-exclamation"></i>*/}
				</button>
				<button
					className={
						"btn btn-success btn-lg rounded-circle m-1 " +
						(color == "green" ? "selected" : "")
					}
					onClick={() => setColor("green")}
					type="button">
					{/*<i class="fas fa-walking"></i>*/}V
				</button>
				<div className="barra"></div>
			</div>
		</div>
	);
}
