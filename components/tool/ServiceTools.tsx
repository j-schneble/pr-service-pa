import { cn } from '../../lib/classNames'

interface ServiceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Servicetool({
    name,
  
    icon,
    url,
  }: ServiceProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            '',
            'rounded-lg ',
            
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
         <div className='flex p-4 '>
          <div className='pl-2 pr-1 text-xl text-orange-500 rounded-full '>{icon}</div>
        <div className=''>
          <h2 className='text-white font-regular gradient-name font-sfprodisplayregular '>{name}</h2>
            </div>
          </div>
        </a>
      )
    }