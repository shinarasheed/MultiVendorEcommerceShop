import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Provider } from "react-redux";
import store from "./store";

import Spinner from "./components/Globals/Spinner/Spinner";
import Navbar from "./components/Globals/Navbar/Navbar";
import Footer from "./components/Globals/Footer/Footer";
import BacktoTopButton from "./components/BacktoTop";
const Landing = React.lazy(() => import("./pages/index"));

const NotFound = React.lazy(() => import("./components/NotFound"));
const ProductCart = React.lazy(() => import("./components/ProductCart"));
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const Products = React.lazy(() => import("./components/Dashboard/Products"));
const Orders = React.lazy(() => import("./components/Dashboard/Orders"));
const Settings = React.lazy(() => import("./components/Dashboard/Settings"));
const Withdrawals = React.lazy(() =>
  import("./components/Dashboard/WithDrawals")
);
const ProductUpload = React.lazy(() =>
  import("./components/Dashboard/ProductUpload")
);

const HomeGoods = React.lazy(() => import("./pages/homegoods"));

//KITCHEN
const KitchenEquipments = React.lazy(() => import("./pages/kitchen"));
const KitchenCategories = React.lazy(() =>
  import("./components/Kitchen/Categories")
);

const BedroomEquipments = React.lazy(() => import("./pages/bedroom"));
const BathroomEquipments = React.lazy(() => import("./pages/bathroom"));
const DinningRoomEquipemts = React.lazy(() => import("./pages/diningroom"));
const LivingRoomEquipemts = React.lazy(() => import("./pages/livingroom"));

const Wholesale = React.lazy(() => import("./pages/wholesale"));
const SuperDeals = React.lazy(() => import("./pages/superdeals"));
const Clearance = React.lazy(() => import("./pages/clearance"));
const Livebids = React.lazy(() => import("./pages/livebids"));
const Bid = React.lazy(() => import("./components/Livebid/BidBuy"));

//OFFICEEQUIPMENTS
const OfficeEquipments = React.lazy(() => import("./pages/officeequipments"));
const OfficeProductDetails = React.lazy(() =>
  import("./components/OfficeEquipments/ProductDetails")
);
const OfficeCategories = React.lazy(() =>
  import("./components/OfficeEquipments/Categories")
);

// OFFICEFURNITUES
const OfficeFurnitures = React.lazy(() => import("./pages/officefurnitures"));
const OfficeFurniturProductDetails = React.lazy(() =>
  import("./components/OfficeFurnitures/ProductDetails")
);

//MEDICAL EQUIPMENTS
const MedicalEquipments = React.lazy(() => import("./pages/medicalequipments"));
const MedicalProductDetails = React.lazy(() =>
  import("./components/MedicalEquipments/ProductDetails")
);

//INDUSTRAIL EQUIPMENTS
const IndustrialEquipments = React.lazy(() =>
  import("./pages/industrialequipments")
);

//CORPORATEGIFTS
const CorporateGifts = React.lazy(() => import("./pages/corporategift"));
const CorporateGiftCategory = React.lazy(() =>
  import("./components/CorporateGifts/Categories")
);

//LIGHTING
const Lighting = React.lazy(() => import("./pages/lighting"));
const LightingProductDetails = React.lazy(() =>
  import("./components/Lighting/ProductDetails")
);
const LightingCategory = React.lazy(() =>
  import("./components/Lighting/Categories")
);

const ProductDetails = React.lazy(() => import("./components/ProductDetails"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <BacktoTopButton />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/homegoods" component={HomeGoods} />
            <Route exact path="/wholesale" component={Wholesale} />
            <Route
              exact
              path="/office-equipments"
              component={OfficeEquipments}
            />

            <Route
              exact
              path="/office-furnitures"
              component={OfficeFurnitures}
            />
            <Route
              exact
              path="/medical-equipments"
              component={MedicalEquipments}
            />
            <Route exact path="/corporate-gifts" component={CorporateGifts} />
            <Route exact path="/superdeals" component={SuperDeals} />
            <Route exact path="/clearance" component={Clearance} />
            <Route exact path="/livebids" component={Livebids} />
            <Route exact path="/productcart" component={ProductCart} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/withdrawals" component={Withdrawals} />
            <Route exact path="/upload" component={ProductUpload} />
            <Route exact path="/lighting" component={Lighting} />
            <Route
              exact
              path="/lighting/:category"
              component={LightingCategory}
            />
            <Route
              exact
              path="/products/:category/:subcategory"
              component={CorporateGiftCategory}
            />

            <Route
              exact
              path="/kitchenequipments/:category"
              component={KitchenCategories}
            />

            <Route
              exact
              path="/officequipments/:category"
              component={OfficeCategories}
            />

            <Route exact path="/bid/:category" component={Bid} />

            <Route
              exact
              path="/kitchen-equipments"
              component={KitchenEquipments}
            />
            <Route
              exact
              path="/bedroom-equipments"
              component={BedroomEquipments}
            />
            <Route
              exact
              path="/bathroom-equipments"
              component={BathroomEquipments}
            />
            <Route
              exact
              path="/dinningroom-equipments"
              component={DinningRoomEquipemts}
            />

            <Route
              exact
              path="/industrial-equipments"
              component={IndustrialEquipments}
            />
            <Route
              exact
              path="/livingroom-equipments"
              component={LivingRoomEquipemts}
            />

            <Route
              exact
              path="/officeequipments/:id"
              component={OfficeProductDetails}
            />

            <Route
              exact
              path="/product/:category/:id"
              component={ProductDetails}
            />

            <Route
              exact
              path="/lights/:id"
              component={LightingProductDetails}
            />
            <Route
              exact
              path="/officefurniture/:id"
              component={OfficeFurniturProductDetails}
            />

            <Route
              exact
              path="/medicalequipments/:id"
              component={MedicalProductDetails}
            />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
