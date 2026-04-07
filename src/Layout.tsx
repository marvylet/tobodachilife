import MainMenu from "./MainMenu.tsx";
import MainScreen from "./MainScreen.tsx";
import InfoScreen from "./InfoScreen.tsx";
import Shop from "./Shop.tsx";

//main layout of the website
function Layout () {
    // the 4 screen components are all present in here
    // depending on variable we will enable their visibility and functionality
    return (
        <>
            <div>
                <MainMenu/>
                <MainScreen/>
                <InfoScreen/>
                <Shop/>
            </div>
        </>
    )
}

export default Layout