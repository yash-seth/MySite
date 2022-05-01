import "../css/sidebar.css"
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GridViewIcon from '@mui/icons-material/GridView';
import SecurityIcon from '@mui/icons-material/Security';

function Sidebar(props) {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar__options">
                    <div className="sidebar__option">
                        <GridViewIcon />
                        <span>Projects</span>
                    </div>
                    <div className="sidebar__option">
                        <HomeRepairServiceIcon />
                        <span>Classrooms</span>
                    </div>
                    <div className="sidebar__option">
                        <SecurityIcon />
                        <span>Permissions</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sidebar
