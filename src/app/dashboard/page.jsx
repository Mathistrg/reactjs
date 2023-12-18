"use client"

import AddArticle from "@/components/articles/AddArticle"
import { useAtom } from "jotai";
import { userAtom } from "@/globalState";
import InsertName from "@/components/articles/InsertName";

const Dashboard = () => {
    const [user] = useAtom(userAtom);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Votre activité, {user.name}</p>
            <AddArticle/>
            <InsertName />
        </div>
    )
}

export default Dashboard;