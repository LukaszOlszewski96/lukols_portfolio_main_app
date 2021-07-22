import {MdEmail} from 'react-icons/md';
import {RiDashboardFill, RiMoneyDollarCircleFill} from 'react-icons/ri';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {DiProlog} from 'react-icons/di';



export const MenuLinks =[
    {
        title:"Dashboard",
        url:"#",
        class:"menu-link-admin",
        icon: <RiDashboardFill/>
    },
    {
        title:"Contact",
        url:"#",
        class:"menu-link-admin",
        icon: <MdEmail/>
    },
    {
        title:"Cooperation",
        url:"#",
        class:"menu-link-admin",
        icon: <RiMoneyDollarCircleFill/>
    },
    {
        title:"Portfolio",
        url:"#",
        class:"menu-link-admin",
        icon: <AiOutlineFundProjectionScreen/>
    },
    {
        title:"Skills",
        url:"#",
        class:"menu-link-admin",
        icon: <DiProlog/>
    }

];