import Icon from "../icon";

const CompleteBook = () => {
    return(
        <div className="rounded-lg shadow-lg w-1/2 h-full mr-10 ml-5">
            <div className="flex items-center border-b-2 h-12 p-2">
                <Icon
                    idicon = 'M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z'
                    style = 'w-6 h-6'
                />
                <p className="ml-2">Sách đã hoàn tất</p>
            </div>
        </div>
    );
}
export default CompleteBook;