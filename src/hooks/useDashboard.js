import { useState } from "react";

export default function useList() {
    const [maintance, setMaintance] = useState(0);
    const [reserved, setReserved] = useState(0);
    const [free, setFree] = useState(0)

    return { maintance, setMaintance, reserved, setReserved, free, setFree };
}