import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

function importBuildTarget() {
	if (process.env.REACT_APP_BUILD_TARGET === "examiner") {
		return import("./examiner/App.js");
	} else if (process.env.REACT_APP_BUILD_TARGET === "examinee") {
		return import("./examinee/App.js");
	} else {
		return Promise.reject(
			new Error("No such build target: " + process.env.REACT_APP_BUILD_TARGET)
		);
	}
}

// Import the entry point and render it's default export
importBuildTarget().then(({ default: Environment }) =>
	// eslint-disable-next-line react/no-render-return-value
	ReactDOM.render(
		<React.StrictMode>
			<Environment />
		</React.StrictMode>,
		document.getElementById("root")
	)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
