import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function Hello() {
// 	let phrase="Hello, Hi !"
// 	return (
// 			<h1>{phrase} World </h1>
// 		)
// }
// function FullName (props){
// 	return (
// 			<div>
// 			<h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
// 			<a href={props.link} >Link to my page...</a>
// 			</div>
// 		)
// }
// function MeetAll(){
// 	return(
// 		<div>
// 			<FullName name="Sami" surname="Yusuf" link="vk.com" />
// 			<FullName name="Maher" surname="Zain" link="ok.ru" />
// 			<FullName name="Ivan" surname="Ivanov" link="#" />
// 		</div>
// 		)
	
// }


{/*const elem= <FullName name="Sami" surname="Yusuf" link="vk.com" />*/}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
