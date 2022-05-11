import {LedManipulationServiceClient} from './proto_files/node_conn_grpc_web_pb.js';
import {TextMessage} from './proto_files/node_conn_pb.js';
import React, {useState} from "react";
import "./App.css";

//! MODIFY THIS VARIABLE WHEN CONNECTING TO OHER NETWORK
const LOCAL_MACHINE_IP = "192.168.1.87";
const ENVOY_PORT = "8080";

const App = () => {
	const [serverMessage, setServerMessage] = useState("");
	const [messageBgColor, setMessageBgColor] = useState("");

	const colorOptions = {
		"secuence1 accepted. Happy capstone huehue": "yellow", 
		"secuence2 accepted. Happy capstone huehue": "blue",
		"secuence3 accepted. Happy capstone huehue": "green"
	};

	// creating a new object related to the service we're using
	// the proxy envoy will be at port 8080
	const gRPCclient = new LedManipulationServiceClient(`http://${LOCAL_MACHINE_IP}:${ENVOY_PORT}`);

	const sendSecuenceToApi = (secuence) => () => {
		try {
			// making an object to send a message using the proto defined fields
			const request = new TextMessage();
			// to find this method, go to "node_conn_pb.js" and find "TextMessage.prototype"
			request.setMessage(secuence);
			// console.log(request);
			
			// to find this method, go to "node_conn_grpc_web_pb.js" and find 
			// "LedManipulationServiceClient.prototype"
			//!                         infoToSend metadata  callback
			gRPCclient.startLedPerformance(request,  {},   (err, response) => {
				const serverResponse = response.getMessage();
				setServerMessage(serverResponse);
				setMessageBgColor(colorOptions[serverResponse])
			});
		}
		catch (err) {
			console.log(err);
			setServerMessage(err.toString());
			console.log("errooooooooor")

		}
	}
	// console.log(main)
	return (
		<>
			<h1> Iniciador de secuencias de luces LED </h1>
			<article>
				<p>{`IP OBJETIVO: ${LOCAL_MACHINE_IP}:${ENVOY_PORT}`}</p>
				<p>Selecciona la secuencia a iniciar</p>
				<div>
					<button onClick={sendSecuenceToApi("secuence1")}>AMARILLO</button>
					<button onClick={sendSecuenceToApi("secuence2")}>AZUL</button>
					<button onClick={sendSecuenceToApi("secuence3")}>VERDE</button>
				</div>
				<p id="server-res-text" style={{"background-color": messageBgColor}}>
					{serverMessage}
				</p>
			</article>
		</>
	)
};

export default App;