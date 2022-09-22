import { 
    GiCargoCrane, 
    GiDigDug, 
    GiDigHole, 
    GiBrokenWall, 
    GiOBrick, 
    GiStumpRegrowth,
    GiStonePath,
    GiHighGrass,
    Gi3DHammer,
    GiHammerBreak,
    GiBulldozer
} from 'react-icons/gi'

import {
    MdPool,
    MdOutlineGrass,
    MdWater
} from 'react-icons/md'

import {
    FaSwimmingPool,
    FaWater
} from 'react-icons/fa'

import {

TbBulldozer

} from 'react-icons/tb'


interface Tool {
    name: string
    url: string
    icon?: React.ReactNode
}

export const ToolBox: Tool[] = [
    {
        name: 'Excavating + Grading',
        icon : <GiCargoCrane />,
        url: "https://primeservicespa.com",
    },

    {
        name : 'Utility Trenching',
        icon: <GiDigDug />,
        url: "https://primeservicespa.com",
    },
    {
        name: 'Backfilling',
        icon: <GiBulldozer />,
        url: "https://primeservicespa.com",
    },
    {
        name:'Stormwater Management',
        icon: <MdWater />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Demolition',
        icon: <GiHammerBreak />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Land Clearing',
        icon: <MdOutlineGrass />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Field Mowing',
        icon: <MdOutlineGrass />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Stone Driveways Millings',
        icon: <GiStonePath />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Stump Removal',
        icon: <GiStumpRegrowth />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Pool pre+demo',
        icon: <MdPool />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Paving',
        icon: <GiOBrick />,
        url: 'https://primeservicespa.com',     
    },
    {
        name:'Retaining Walls',
        icon: <GiBrokenWall />,
        url: 'https://primeservicespa.com',     
    },
]














