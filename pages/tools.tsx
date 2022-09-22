import Container from '../components/Container/index'
import Tool from '../components/tool/ServiceTools'
import { ToolBox } from '../components/tools/toolBox'
import { Box, Flex, Heading } from "@chakra-ui/react"

const Tools = () => {
  return (

   
   <div>
           <div className='flex items-center justify-between'>      
                   
                 
                   
                   </div>
                   <div
                   className='items-center border-2 border-gray-100 rounded-sm serv4 shadd backdropblur-20 '
                  >
        <div className='items-center text-center'>
            <div className='grid grid-cols-4 grid-rows-1 gap-2 '>
                    {/* Lazy */}
          {ToolBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(tool => (
            <Tool
            icon={tool.icon}
            key={tool.name}
            name={tool.name}            
            url={tool.url}
            />
          ))}
         </div>
                    </div>
                    </div>
            </div>

  )
}

export default Tools