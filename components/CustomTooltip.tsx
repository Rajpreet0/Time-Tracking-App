import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


interface CustomTooltipProps {
    children: React.ReactNode;
    content: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({children, content}) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip