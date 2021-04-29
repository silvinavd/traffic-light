import React from "react";

export const Color = () => {
	return (
		<div className="bg-dark width">
			<div className="d-flex align-items-center flex-column bd-highlight mb-3">
				<button
					type="button"
					className="btn btn-danger btn-lg rounded-circle m-1">
					{/*<i class="fas fa-ban"></i>*/}R
				</button>

				<button
					type="button"
					className="btn btn-warning btn-lg rounded-circle m-1">
					A{/*<i class="fas fa-exclamation"></i>*/}
				</button>
				<button
					type="button"
					className="btn btn-success btn-lg rounded-circle m-1">
					{/*<i class="fas fa-walking"></i>*/}V
				</button>
				<div className="barra"></div>
		</div>
        		</div>

	);
};
