import Icon from "../icon";

interface BookStatusProps {
    books: Book[];
  }

const BookStatus = ({books} : BookStatusProps) => {
    return(
        <div className="shadow-lg rounded-lg mt-5 ml-10 h-auto w-[95.8%] p-2">
            <div className="border-b-2 h-10 flex">
                <Icon
                    idicon = 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
                    style = 'w-6 h-6'
                />
                <p className="ml-2">Sách đang thực hiện</p>
            </div>
            <div className="mt-4">
                {books.length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border-b-2 px-4 py-2 text-left">Tiêu đề</th>
                                <th className="border-b-2 px-4 py-2 text-left">Tác giả</th>
                                <th className="border-b-2 px-4 py-2 text-left">NXB</th>
                                <th className="border-b-2 px-4 py-2 text-left">Năm XB</th>
                            </tr>
                         </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={index} className="bg-white">
                                    <td className="border-b-2 px-4 py-2">{book.tieude}</td>
                                    <td className="border-b-2 px-4 py-2">{book.tacgia}</td>
                                    <td className="border-b-2 px-4 py-2">{book.nxb}</td>
                                    <td className="border-b-2 px-4 py-2">{book.namxb}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Không có sách đang thực hiện.</p>
                )}
            </div>
        </div>
    );
}
export default BookStatus;