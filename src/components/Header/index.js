import { Flex, Spacer, Box, ButtonGroup, Heading, Link, MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/react"

const Desktop = ({setSelection, currentPage}) => {
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
                <img src={require("../../assets/icons/JPV.png")} alt="website logo" style={{height: '40px'}}/>
            </Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Link style={{margin: '30px', cursor: "pointer", fontWeight: '600'}} onClick={()=>window.open("https://jpvalera.carrd.co/")}>About</Link>
                <Link style={{margin: '30px', cursor: "pointer", fontWeight: '600', textDecoration: currentPage === 2 ? 'underline' : 'none', textDecorationColor: currentPage === 2 ? 'yellow' : 'transparent'}} onClick={()=>setSelection(2)}>Experience</Link>
                <Link style={{margin: '30px', cursor: "pointer", fontWeight: '600', textDecoration: currentPage === 3 ? 'underline' : 'none', textDecorationColor: currentPage === 3 ? 'yellow' : 'transparent'}} onClick={()=>setSelection(3)}>Projects</Link>
                <Link style={{margin: '30px', cursor: "pointer", color:'black', background: 'white', borderColor: 'white', paddingLeft: '5px', paddingRight: '5px', textDecoration: 'none', fontWeight: '600'}} href="mailto:johnpatrickyusoresvalera@gmail.com">CONTACT</Link>
            </ButtonGroup>
        </Flex>
    )
}

const NonDesktop = ({setSelection, currentPage}) => {
    return (
        <Flex style={{
            zIndex: '10',
            position: 'absolute',
            width: '100%',
            color: 'white',
            marginBottom: "0px"
          }} minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Heading size='lg' as='h1' style={{marginLeft: '38px', cursor: "pointer"}} onClick={()=>setSelection(0)}>
                <img src={require("../../assets/icons/JPV.png")} alt="website logo" style={{height: '40px'}}/>
            </Heading>
            </Box>
            <Spacer />
            <Menu>
            {({ isOpen }) => (
                <>
                <MenuButton isActive={isOpen} style={{margin: '30px', marginTop: "10px", cursor: "pointer", color:'white', background: 'black', borderColor: "black"}}>{isOpen ? `X` : `=`}</MenuButton>
                <MenuList> 
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black', fontWeight: '600'}} onClick={()=>window.open("https://jpvalera.carrd.co/")}>About</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black', fontWeight: '600'}} onClick={()=>setSelection(2)}>Experience</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'white', background: 'black', fontWeight: '600'}} onClick={()=>setSelection(3)}>Projects</MenuItem>
                    <MenuItem style={{cursor: "pointer", color:'black', background: 'white', borderColor: 'white', paddingLeft: '5px', paddingRight: '5px', textDecoration: 'none', fontWeight: '600'}} href="mailto:johnpatrickyusoresvalera@gmail.com">CONTACT</MenuItem>
                </MenuList>
                </>
            )}
            </Menu>
        </Flex>
    )
}

const Header = ({setSelection, currentPage}) => {
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const renderHeader = () => {
        return deviceWidth > 1280 ? <Desktop setSelection={setSelection} currentPage={currentPage}/> : <NonDesktop setSelection={setSelection} currentPage={currentPage}/>
    }
    return renderHeader()
}

export default Header