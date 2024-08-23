import BookStatus from "@/components/dashboard/bookstatus_table";
import CompleteBook from "@/components/dashboard/completebook_table";
import HeaderDashboard from "@/components/dashboard/header";
import Statistics from "@/components/dashboard/statistics_table";

const Dashboard = () => {
    return(
        <div className="h-screen w-full">
            <HeaderDashboard/>
            <div className="flex w-full h-1/2 mt-5">
                <Statistics/>
                <CompleteBook/>
            </div>
            <BookStatus/>
        </div>
    );
}

export default Dashboard;