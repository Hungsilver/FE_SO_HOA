import Icon from "../icon";

const Statistics = () => {
    return(
        <div className="rounded-lg shadow-lg w-1/2 h-full ml-10 mr-5">
            <div className="flex items-center border-b-2 h-12 p-2">
                <Icon
                    idicon = 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
                    style = 'w-6 h-6'
                />
                <p className="ml-2">Thống kê</p>
            </div>
        </div>
    )
}
export default Statistics;