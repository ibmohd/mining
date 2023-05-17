import { Routes,Route } from "react-router-dom";
import { LayoutComponent } from "./components/LayoutComponent";
import { Homepage } from "./pages/Homepage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductCategoriesPage } from "./pages/ProductCategoriesPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SingleServicePage } from "./pages/SingleServicePage";

function App() {
  return (
   <LayoutComponent>
    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/services'>
        <Route index element={<ServicesPage/>}/>
        <Route path=':slug' element={<SingleServicePage/>}/>
      </Route>
      <Route path='/products'>
        <Route index element={<ProductCategoriesPage/>}/>
        <Route path=':category' element={<ProductsPage/>}/>
        <Route path=':category/:slug' element={<SingleProductPage/>}/>
      </Route>
    </Routes>
   </LayoutComponent>
  );
}

export default App;
