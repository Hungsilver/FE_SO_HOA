'use client'

import Search from "@/components/listbook/search";
import { useEffect, useState } from "react";
import data from '@/api/data.json'
import BookTable from "@/components/listbook/booktable";
import Button from "@/components/button";

const ListBook = () => {

    const [books , setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(data.Bookdata);
    }, []);

    return(
        <div className="w-full h-full">
            <Search/>
            <BookTable books={books}/>
            <div className="flex mt-5 mr-5 justify-end">
                <Button
                    namebtn = 'Lưu thay đổi'
                    style = 'text-white w-32 h-12 rounded-lg bg-blue-400'
                />
            </div>
        </div>
    );
}
export default ListBook;