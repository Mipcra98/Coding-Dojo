import { Outlet } from "react-router-dom"
import SPHeaders from "./components/SongPlaylistHeader"
import { Stack } from "@mui/material"

const Layout = () => {
    return (
        <>
            <SPHeaders/>
            <Stack sx={{ ml: 20, mr: 20, mt: 10, mb: 3 }} spacing={2}>
                <Outlet />
            </Stack>
        </>
    )
}

export default Layout