import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Layout from './components/Layout';
import Contacts from './components/Contacts';
import Charts from './components/Charts';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const routes = [
    {
      path: "/",
      element: <Contacts />,
    },
    {
      path: "/charts",
      element: <Charts />,
    },
  ]
  return (<Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Layout>
    </QueryClientProvider>
  </Provider>);
}

export default App;
