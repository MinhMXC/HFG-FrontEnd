import React, {useState} from 'react';
import TemporaryDrawer from "../components/TemporaryDrawer";
import MediaCard from "../components/MediaCard";
import '../App.css'

function MainPage() {
    return (
        <>
            <div className="container">
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>

            </div>

            {/*<Box sx={{ display: "flex" }}>*/}
            {/*    <Topbar />*/}
            {/*    <Box*/}
            {/*        components="nav"*/}
            {/*        sx={{*/}
            {/*            width: sizeConfigs.sidebar.width,*/}
            {/*            flexShrink: 0*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Sidebar />*/}
            {/*    </Box>*/}
            {/*    <Box*/}
            {/*        components="main"*/}
            {/*        sx={{*/}
            {/*            flexGrow: 1,*/}
            {/*            p: 3,*/}
            {/*            width: `calc(100% - ${sizeConfigs.sidebar.width})`,*/}
            {/*            minHeight: "100vh",*/}
            {/*            backgroundColor: colorConfigs.mainBg*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Toolbar />*/}
            {/*        <Outlet />*/}
            {/*    </Box>*/}
            {/*</Box>*/}
        </>

    );
}

export default MainPage;