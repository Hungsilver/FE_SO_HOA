const Search = ({props} : any) => {
    return(
        <div className="w-full h-40 mt-20">
            <h1 className="text-2xl uppercase font-bold mt-10 ml-5">Danh sách sách</h1>
            <div className="flex mt-16 ml-10">
                <input placeholder="Tên sách" className="border rounded-lg h-10 w-1/4 p-2 outline-none focus:outline-blue-500"/>
                <input placeholder="Mã sách" className="border rounded-lg ml-28 h-10 w-1/4 p-2 outline-none focus:outline-blue-500"/>
            </div>
        </div>
    );
}
export default Search;