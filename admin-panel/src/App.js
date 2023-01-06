import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pages from "./components/Pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const mockData = [
    {
      id: 0,
      message: "All videos",
      data: [1, 2, 3, 4, 5],
    },
    {
      id: 1,
      message: "All levels",
      data: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      message: "All musics",
      data: [
        {
          id: 1,
          title: "Music 1",
          author: "Diyorbek Rustamjonov",
          url: "https://test.com/asdasdasd",
        },
        {
          id: 2,
          title: "Music 2",
          author: "Diyorbek Rustamjonov",
          url: "https://test.com/asdasdasd",
        },
        {
          id: 3,
          title: "Music 3",
          author: "Diyorbek Rustamjonov",
          url: "https://test.com/asdasdasd",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Home data={mockData} />} />
          <Route path={`/admin/:page`} element={<Pages allData={mockData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
