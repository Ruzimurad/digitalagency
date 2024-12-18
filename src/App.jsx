import Header from "./components/Header";
import Banner from "./components/Banner";
import { Sponsores } from "./components/Sponsores";
import { About } from "./components/About";
import { Customize } from "./components/Customize";
import { Comments } from "./components/Comments";
import { Advice } from "./components/Advice";
import { Footer } from "./components/Footer";

function App (){

    return(
        <>
        <Header />
        <main/>
        <Banner/>
        <Sponsores />
        <About />
        <Customize />
        <Comments />
        <Advice />
        <main/>
        <Footer/>

        </>
    )
}

export default App