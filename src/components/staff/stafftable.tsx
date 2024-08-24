import Icon from "../icon";

interface SearchStaffProps {
    users: User[];
}

const StaffTable = ({users} : SearchStaffProps) => {
    return (
        <div className="p-5 w-full h-screen">
            {users.length > 0 ? (
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border-b-2 px-4 py-2 text-left">STT</th>
                            <th className="border-b-2 px-4 py-2 text-left">Họ tên</th>
                            <th className="border-b-2 px-4 py-2 text-left">Email</th>
                            <th className="border-b-2 px-4 py-2 text-left">Username</th>
                            <th className="border-b-2 px-4 py-2 text-left">SĐT</th>
                            <th className="border-b-2 px-4 py-2 text-left">Quyền</th>
                            <th className="border-b-2 px-4 py-2 text-left">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user , index) => (
                            <tr key={user.id} className="bg-white h-20">
                                <td className="border-b-2 px-4 py-2">{index + 1}</td>
                                <td className="border-b-2 px-4 py-2">{user.ten}</td>
                                <td className="border-b-2 px-4 py-2">{user.email}</td>
                                <td className="border-b-2 px-4 py-2">{user.username}</td>
                                <td className="border-b-2 px-4 py-2">{user.sdt}</td>
                                <td className="border-b-2 px-4 py-2">{user.quyen}</td>
                                <td className="border-b-2 px-4 py-2">
                                <button>
                                    <Icon
                                        idicon = 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                                        style = 'w-4 h-4'
                                    />
                                </button>
                                <button>
                                    <Icon
                                        idicon = 'm14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                                        style = 'w-4 h-4 ml-2'
                                    />
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Không có nhân viên.</p>
            )}
        </div>
    );
}
export default StaffTable;