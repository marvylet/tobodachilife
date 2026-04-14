import MainMenu from "./MainMenu.tsx";
import InfoScreen from "./InfoScreen.tsx";

//main layout of the website
function Layout () {
    // the 4 screen components are all present in here
    // depending on variable we will enable their visibility and functionality
    return (
        <>
            <div className={"main-menu"} style={{backgroundColor:"#FFFBF1"}}>
                <MainMenu isDrawn={false} setVisibility={function (): void {
                    throw new Error("Function not implemented.");
                }}/>
                <InfoScreen/>
            </div>
        </>
    )
}

export default Layout