import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Header = () => {
    return(
        <div className="mt-20 w-full h-40">
            <h1 className="uppercase text-3xl mt-5 ml-5">Chi tiết sách</h1>
            <div className="flex mt-5 w-full h-20 justify-end">
                <button className="flex justify-center items-center w-40 h-12 rounded-lg mt-5 mr-5 bg-green-400 text-white">
                    <InfoOutlinedIcon/>
                    Thông tin sách
                </button>
            </div>
        </div>
    );
}
export default Header;