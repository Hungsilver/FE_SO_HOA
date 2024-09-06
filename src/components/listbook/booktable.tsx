'use client'

import { useState } from "react";
import Icon from "../icon";
import { useRouter } from "next/navigation";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


interface BookProps {
    books : Book[];
}

const BookTable = ({books} : BookProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const itemsPerPage = 10;
    const router = useRouter();

    const handleEdit = () => {
        router.push("#");
    }

    const handleOpenModal = (book: Book) => {
        setSelectedBook(book);
    }

    const handleCloseModal = () => {
        setSelectedBook(null);
    }

    const handleDetail = () => {
        router.push("/detailbook");
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Cắt dữ liệu người dùng để chỉ hiển thị dữ liệu của trang hiện tại
    const currentbooks = books.slice(indexOfFirstItem, indexOfLastItem);

    // Tính toán số lượng trang
    const totalPages = Math.ceil(books.length / itemsPerPage);

    // Xử lý thay đổi trang
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return(
        <div className="shadow-lg rounded-lg mt-14 ml-10 w-[95.8%] p-2">
            {books.length > 0 ? (
                <div>
                        <table className="min-w-full table-auto border-collapse">
                            <thead className="bg-blue-100">
                                <tr className="bg-blue-100">
                                    <th className="border-b-2 px-4 py-2 text-left">Mã sách</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Tiêu đề</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Tác giả</th>
                                    <th className="border-b-2 px-4 py-2 text-left">NXB</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Năm XB</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Scan</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Text</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Audio</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Chọn công việc</th>
                                    <th className="border-b-2 px-4 py-2 text-left">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentbooks.map((book, index) => (
                                    <tr key={book.id} className="bg-white h-20 hover:bg-blue-200">
                                        <td className="border-b-2 px-4 py-2">{indexOfFirstItem + index + 1}</td>
                                        <td className="border-b-2 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]" onClick={() => handleOpenModal(book)}>{book.tieude}</td>
                                        <td className="border-b-2 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]" onClick={() => handleOpenModal(book)}>{book.tacgia}</td>
                                        <td className="border-b-2 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]" onClick={() => handleOpenModal(book)}>{book.nxb}</td>
                                        <td className="border-b-2 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]" onClick={() => handleOpenModal(book)}>{book.namxb}</td>
                                        <td className="border-b-2 px-4 py-2">
                                            <button onClick={handleDetail}>
                                                <FileOpenIcon sx = {{color : 'gray'}}/>
                                            </button>
                                        </td>
                                        <td className="border-b-2 px-4 py-2">
                                            <button onClick={handleDetail}>
                                                <FileOpenIcon sx = {{color : 'gray'}}/>
                                            </button>
                                        </td>
                                        <td className="border-b-2 px-4 py-2">
                                            <button onClick={handleDetail}>
                                                <FileOpenIcon sx = {{color : 'gray'}}/>
                                            </button>
                                        </td>
                                        <td className="border-b-2 px-4 py-2">
                                            <select
                                                className="border rounded-lg px-4 py-2 bg-white text-black hover:bg-green-200 shadow-lg outline-none"
                                            >
                                                <option value="">Chọn công việc</option>
                                                <option value="scan">Scan</option>
                                                <option value="text">Thiết lập text</option>
                                                <option value="audio">Thiết lập audio</option>
                                                <option value="audio">Kiểm duyệt scan</option>
                                                <option value="audio">Kiểm duyệt audio</option>
                                                <option value="audio">Kiểm duyệt text</option>
                                            </select>
                                        </td>
                                        <td className="border-b-2 px-4 py-2">
                                            <button onClick={handleEdit}>
                                                <Icon
                                                    idicon='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                                                    style='w-4 h-4 shadow-lg'
                                                />
                                            </button>
                                            <button>
                                                <Icon
                                                    idicon='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                                                    style='w-4 h-4 ml-2 shadow-lg'
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-400 text-white rounded-lg"
                        >
                            Trang trước
                        </button>
                        <span>
                            Trang {currentPage}/{totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-400 text-white rounded-lg"
                        >
                            Trang sau
                        </button>
                    </div>
                </div>
            ) : (
                <p className="mt-20">Không có sách.</p>
            )}
            <Modal
                open={!!selectedBook}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
                    {selectedBook && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">Chi tiết sách</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold">Mã sách:</p>
                                    <p>{selectedBook.id}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Tiêu đề:</p>
                                    <p>{selectedBook.tieude}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Tác giả:</p>
                                    <p>{selectedBook.tacgia}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">NXB:</p>
                                    <p>{selectedBook.nxb}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Năm XB:</p>
                                    <p>{selectedBook.namxb}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button onClick={handleCloseModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Đóng</button>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
export default BookTable;