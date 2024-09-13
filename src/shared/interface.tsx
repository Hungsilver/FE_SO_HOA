interface Book {
    id: number;
    tieude: string;
    tacgia: string;
    nxb: string;
    namxb: number;
};
interface Job {
    id: string;
    title: string;
    pages: number;
    price: number;
    task: string;
    tacgia: string;
    nxb: string;
    namxb: number;
}

interface User {
    id: number;
    ten: string;
    email: string;
    username: string;
    sdt: number;
    quyen: string;
}

interface OptionType {
    value: string;
    label: string;
}

interface Roll {
    name: string;
}