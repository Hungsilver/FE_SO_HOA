import Image from "next/image";

const ImageArea = () => {
    return(
        <div className="flex flex-col justify-center items-center border w-48 h-80 rounded-lg bg-white">
            <Image src="/image/no-image.png" alt="noimage" width={150} height={50}/>
        </div>
    );
}
export default ImageArea;