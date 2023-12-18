"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/globalState";

const InsertName = () => {
    const [user, setUser] = useAtom(userAtom);

    return (
        <>
            <br /><br /><br /><br />
            <input
                name="name"
                placeholder="Entrer votre nom"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
        </>
    );
};

export default InsertName;