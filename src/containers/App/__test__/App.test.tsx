import React from "react";
// import { mount } from "enzyme";
// import { App } from "App";
// import * as redux from "react-redux";
// import { Context } from "react-responsive";
// import { store } from "application";
// import {MockedProvider} from "@apollo/client/testing";

// describe("[Root] <App>", () => 
// {
// 	it("Starting application", () => 
// 	{
// 		mount((
// 			<MockedProvider>
// 				<redux.Provider store={store}>
// 					<App {...store.getState().app} />
// 				</redux.Provider>
// 			</MockedProvider>
// 		));
// 	});
    
// 	it("Portrait mode", () =>
// 	{
// 		const Context = React.createContext({});
// 		mount((
// 			<MockedProvider>
// 				<redux.Provider store={store}>
// 					<Context.Provider value={{orientation: "portrait"}}>
// 						<App {...store.getState().app} />
// 					</Context.Provider>
// 				</redux.Provider>
// 			</MockedProvider>
// 		));
// 	});

// 	it("Mobile mode", () =>
// 	{
// 		const Context = React.createContext({});
// 		mount((
// 			<MockedProvider>
// 				<redux.Provider store={store}>
// 					<Context.Provider value={{maxDeviceWidth: "1224px"}}>
// 						<App {...store.getState().app} />
// 					</Context.Provider>
// 				</redux.Provider>
// 			</MockedProvider>
// 		));
// 	});

// 	it("Dark mode", () =>
// 	{
// 		mount((
// 			<MockedProvider>
// 				<redux.Provider store={store}>
// 					<App {...store.getState().app} isDarkMode={true} />
// 				</redux.Provider>
// 			</MockedProvider>
// 		));
// 	});

// 	it("Modal active", () =>
// 	{
// 		mount((
// 			<MockedProvider>
// 				<redux.Provider store={store}>
// 					<App {...store.getState().app} isModalActive={true} />
// 				</redux.Provider>
// 			</MockedProvider>
// 		));
// 	});
// });
