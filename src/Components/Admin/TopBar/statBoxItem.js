import {HiOutlineUserGroup, HiOutlineMail} from 'react-icons/hi';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {AiOutlineFieldTime, AiFillGithub} from 'react-icons/ai';
import {BsListCheck} from 'react-icons/bs';
import {ImLab} from 'react-icons/im';

export const statBoxItem = [
    {
        title: 'New clients',
        href: '#',
        className: 'stat-link-box',
        icon: <HiOutlineUserGroup/>

    },
    {
        title: 'Actual projects',
        href: '#',
        className: 'stat-link-box',
        icon: <AiOutlineFieldTime/>
    },
    {
        title: 'Earnings',
        href: '#',
        className: 'stat-link-box',
        icon: <RiMoneyDollarCircleFill/>
    },
    {
        title: 'Message',
        href: '#',
        className: 'stat-link-box',
        icon: <HiOutlineMail/>,
    }
]

export const statBoxPortfolio = [
    {
        title: 'Total',
        href: '#',
        className: 'stat-link-box',
        icon: <BsListCheck/>
    },
    {
        title: 'Actual',
        href: '#',
        className: 'stat-link-box',
        icon: <AiOutlineFieldTime/>
    },
    {
        title: 'Future',
        href: '#',
        className: 'stat-link-box',
        icon: <ImLab/>
    },
    {
        title: 'Github',
        href: '#',
        className: 'stat-link-box',
        icon: <AiFillGithub/>
    }
]