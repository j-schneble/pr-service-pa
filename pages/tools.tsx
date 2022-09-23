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
                   className='items-center text-center bg-gray-900 border-2 border-gray-800 rounded-sm shadd backdropblur-20 '
                  >
   <div className='items-center text-center tcol'>
            <div className='grid grid-cols-3 grid-rows-2 gap-2 tcol'>
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