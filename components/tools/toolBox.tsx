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
        name: 'Excavating/Grading',
        icon : <GiCargoCrane />,
        url: "https://www.google.com/search?q=what+is+excavating&oq=what+is+excavating&aqs=chrome..69i57j0i457i512j0i10i512l8.3270j1j7&sourceid=chrome&ie=UTF-8",
    },

    {
        name : 'Trenching',
        icon: <GiDigDug />,
        url: "https://www.google.com/search?q=what+is+trenching&ei=bpBQY7LZIvHIwbkP39qLCA&ved=0ahUKEwiyyOz-wO36AhVxZDABHV_tAgEQ4dUDCBA&uact=5&oq=what+is+trenching&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOg0IABBHENYEELADEMkDOgoIABBHENYEELADOgcIABCwAxBDOgsIABCABBCxAxCDAToICAAQsQMQgwE6CAgAEIAEELEDOgsIABCABBCxAxDJAzoFCAAQkQI6CwguEIAEELEDEIMBSgQITRgBSgQIQRgASgQIRhgAUM4gWNwsYJsuaApwAXgAgAF3iAH8BpIBAzQuNZgBAKABAcgBCcABAQ&sclient=gws-wiz",
    },
    {
        name: 'Backfilling',
        icon: <GiBulldozer />,
        url: "https://www.google.com/search?q=what+is+backfilling&ei=hZBQY8meEdmqwbkPqJuSUA&ved=0ahUKEwiJ9daJwe36AhVZVTABHaiNBAoQ4dUDCBA&uact=5&oq=what+is+backfilling&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOgQIABBDOgsIABCABBCxAxCDAToICAAQgAQQsQM6CAgAELEDEIMBOgUIABCRAkoECE0YAUoECEEYAEoECEYYAFCUDVi-G2DEH2gDcAF4AIAB1gGIAcQIkgEFOC4yLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz",
    },
    {
        name:'Stormwater',
        icon: <MdWater />,
        url: 'https://www.google.com/search?q=what+is+stormwater&ei=bpBQY7LZIvHIwbkP39qLCA&ved=0ahUKEwiyyOz-wO36AhVxZDABHV_tAgEQ4dUDCBA&uact=5&oq=what+is+stormwater&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOg0IABBHENYEELADEMkDOgoIABBHENYEELADOgcIABCwAxBDOgUIABCRAjoICAAQgAQQsQM6CwgAEIAEELEDEIMBOggIABCxAxCDAUoECE0YAUoECEEYAEoECEYYAFDHC1j6F2D2GmgDcAF4AYABjAOIAeILkgEHNC40LjEuMZgBAKABAcgBCcABAQ&sclient=gws-wiz',     
    },
    {
        name:'Demolition',
        icon: <GiHammerBreak />,
        url: 'https://www.google.com/search?q=what+is+demolition&oq=what+is+demolition&aqs=chrome..69i57j0i512l9.2367j0j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Land Clearing',
        icon: <MdOutlineGrass />,
        url: 'https://www.google.com/search?q=what+is+land+clearing&oq=what+is+land+clearing&aqs=chrome..69i57j0i512l4j0i22i30l5.2604j1j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Field Mowing',
        icon: <MdOutlineGrass />,
        url: 'https://www.google.com/search?q=what+is+field+mowing&oq=what+is+field+mowing&aqs=chrome..69i57j0i22i30l2j0i22i30i457j0i22i30l4j0i390l2.3343j1j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Stone ',
        icon: <GiStonePath />,
        url: 'https://www.google.com/search?q=what+is+stone&ei=tJBQY4SSB4uEwbkPvtOf0Ac&ved=0ahUKEwiEvIGgwe36AhULQjABHb7pB3oQ4dUDCBA&uact=5&oq=what+is+stone&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDSgQITRgBSgQIQRgASgQIRhgAUNcMWNcMYIAOaAFwAXgAgAFpiAFpkgEDMC4xmAEAoAEByAEKwAEB&sclient=gws-wiz',     
    },
    {
        name:'Removal',
        icon: <GiStumpRegrowth />,
        url: 'https://www.google.com/search?q=what+is+stump+removal&oq=what+is+stump+removal&aqs=chrome..69i57j0i22i30l5j0i22i30i457j0i22i30l3.2701j1j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Pool',
        icon: <MdPool />,
        url: 'https://www.google.com/search?q=what+is+pool+installation&oq=what+is+pool+installation&aqs=chrome..69i57j0i22i30l2j0i22i30i457j0i390l3.4912j1j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Paving ',
        icon: <GiOBrick />,
        url: 'https://www.google.com/search?q=what+is+paving&oq=what+is+paving&aqs=chrome..69i57j0i512l9.3148j1j7&sourceid=chrome&ie=UTF-8',     
    },
    {
        name:'Wall Retain',
        icon: <GiBrokenWall />,
        url: 'https://www.google.com/search?q=what+is+wall+retaining&oq=what+is+wall+retaining&aqs=chrome..69i57j0i22i30l9.3245j1j7&sourceid=chrome&ie=UTF-8',     
    },
]














