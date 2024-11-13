import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import {Route, Routes} from "react-router-dom";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Technology from "./pages/Technology";
import Politics from "./pages/Politics";
import Automobile from "./pages/Automobile";
import Health from "./pages/Health";
import InteractiveSessions from "./pages/InteractiveSessions";
import StockMarket from "./pages/StockMarket";
import Lenis from "lenis";
import axios from "axios";

function App() {
    const [Product, setProduct] = useState([]);

    const BlogData = () => {
        axios.get("https://fakestoreapi.com/products").then((raw) => {
            console.log(raw);
            setProduct(raw.data);
        });
    };
    useEffect(() => {
        BlogData();

        return () => {
            // second
        };
    }, []);

    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
        console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <div className=" bg-zinc-50">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BlogDetails" element={<BlogDetail />} />
                <Route path="/Category/StockMarket" element={<StockMarket />} />
                <Route path="/Category/Technology" element={<Technology />} />
                <Route path="/Category/Politics" element={<Politics />} />
                <Route path="/Category/AutoMobile" element={<Automobile Product={Product} />} />
                <Route path="/Category/Health" element={<Health />} />
                <Route path="/Category/InteractiveHealth" element={<InteractiveSessions />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
