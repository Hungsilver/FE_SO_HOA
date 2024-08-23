'use client'

import sampleBooks from "@/api/fakedata";
import BookStatus from "@/components/dashboard/bookstatus_table";
import CompleteBook from "@/components/dashboard/completebook_table";
import HeaderDashboard from "@/components/dashboard/header";
import Statistics from "@/components/dashboard/statistics_table";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [books, setBooks] = useState<Book[]>(sampleBooks);

    // useEffect(() => {
    //     axios
    //       .get("https://6686088783c983911b009ac7.mockapi.io/book")
    //       .then((response) => {
    //         setBooks(response.data);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching books:", error);
    //       });
    //   }, []);

    return(
        <div className="h-screen w-full">
            <HeaderDashboard/>
            <div className="flex w-full h-1/2 mt-5">
                <Statistics/>
                <CompleteBook/>
            </div>
            <BookStatus books={books}/>
        </div>
    );
}

export default Dashboard;