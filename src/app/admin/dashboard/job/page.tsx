'use client'
import { useRouter } from "next/navigation";


const manageJobPage = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            nested job
            <button onClick={() => handleBtn()}>Home</button>
        </div>
    )
}

export default manageJobPage;