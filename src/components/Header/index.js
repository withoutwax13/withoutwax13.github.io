import { Flex, Spacer, Box, ButtonGroup, Heading, Link, MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/react"

const Desktop = ({setSelection}) => {
    return (
        <Flex style={{
            zIndex: '5',
            position: 'absolute',
            width: '100%',
            color: 'white',
            marginBottom: "0px"
          }} minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Heading size='lg' as='h1' style={{marginLeft: '38px', cursor: "pointer"}} onClick={()=>setSelection(0)}>
                <img src={require("../../assets/icons/JPV.png")} style={{height: '60px'}}/>
            </Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Link style={{margin: '30px', cursor: "pointer"}} onClick={()=>setSelection(1)}>About</Link>
                <Link style={{margin: '30px', cursor: "pointer"}} onClick={()=>setSelection(2)}>Experience</Link>
                <Link style={{margin: '30px', cursor: "pointer"}} onClick={()=>setSelection(3)}>Projects</Link>
                <Link style={{margin: '30px', cursor: "pointer"}} onClick={()=>setSelection(4)}>Resume</Link>
            </ButtonGroup>
        </Flex>
    )
}

const NonDesktop = ({setSelection}) => {
    return (
        <Flex style={{
            zIndex: '5',
            position: 'absolute',
            width: '100%',
            color: 'white',
            marginBottom: "0px"
          }} minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Heading size='lg' as='h1' style={{marginLeft: '38px', cursor: "pointer"}} onClick={()=>setSelection(0)}>
                <img src={require("../../assets/icons/JPV.png")} style={{height: '60px'}}/>
            </Heading>
            </Box>
            <Spacer />
            <Menu>
            {({ isOpen }) => (
                <>
                <MenuButton isActive={isOpen} style={{margin: '30px', cursor: "pointer", color:'white', background: 'black'}}>{isOpen ? `x` : `=`}</MenuButton>
                <MenuList> 
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black'}} onClick={()=>setSelection(1)}>About</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black'}} onClick={()=>setSelection(2)}>Experience</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black'}} onClick={()=>setSelection(3)}>Projects</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black'}} onClick={()=>setSelection(4)}>Resume</MenuItem>
                </MenuList>
                </>
            )}
            </Menu>
        </Flex>
    )
}

const Header = ({setSelection}) => {
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const renderHeader = () => {
        return deviceWidth > 1280 ? <Desktop setSelection={setSelection}/> : <NonDesktop setSelection={setSelection}/>
    }
    return renderHeader()
}

export default Header