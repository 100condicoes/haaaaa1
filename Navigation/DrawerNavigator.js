import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={() => ({
            headerTitle: ""
 
         })}>
            <Drawer.Screen name="tela inicial" component={StackNavigator}/>
            <Drawer.Screen name="perfil" component={Profile}/>
        
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;