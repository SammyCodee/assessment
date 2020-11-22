import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Alert, TouchableOpacity } from "react-native";
import style from '../../assets/css/pages/dashboard/dashboard';

import HomeActive from '../../assets/images/pages/dashboard/homeActive.png';
import HomeInactive from '../../assets/images/pages/dashboard/homeInactive.png';
import RewardActive from '../../assets/images/pages/dashboard/rewardActive.png';
import RewardInactive from '../../assets/images/pages/dashboard/rewardInactive.png';
import StatementsActive from '../../assets/images/pages/dashboard/statementsActive.png';
import StatementsInactive from '../../assets/images/pages/dashboard/statementsInactive.png';
import HealthActive from '../../assets/images/pages/dashboard/healthActive.png';
import HealthInactive from '../../assets/images/pages/dashboard/healthInactive.png';

import LoginButton from '../../components/button/square';

import Home from '../home/home';

const Dashboard = () => {
    
    const tabList = [
        {
            contentView: <Home />,
            
        },
        {
            contentView: <View style={{flex:1,backgroundColor:'red'}}/>,
            
        },
        {
            contentView: <View style={{flex:1,backgroundColor:'blue'}}/>,
            
        },
        {
            contentView: <View style={{flex:1,backgroundColor:'green'}}/>,
            
        }
    ]

    const [tab, setTab] = useState(tabList[0].contentView);

    const [active, setActive] = useState(0);

    const handleTab = (num) => {
        setTab(tabList[num].contentView);
        setActive(num);
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.subContainer}>

                <View style={style.content}>
                    {tab}
                </View>
                
                <View style={style.footer}>
                    <View style={style.navigationIconContainer}>
                        <View style={style.imageContainer}>
                            <TouchableOpacity onPress={()=>handleTab(0)}>
                                
                                <Image
                                    source={active === 0 ? HomeActive: HomeInactive}
                                    style={style.tabImage}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.navigationIconContainer}>
                        <View style={style.imageContainer}>
                            <TouchableOpacity onPress={()=>handleTab(1)}>
                                
                                <Image
                                    source={active === 1 ? RewardActive : RewardInactive}
                                    style={style.tabImage}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.navigationIconContainer}>
                        <View style={style.imageContainer}>
                            <TouchableOpacity onPress={()=>handleTab(2)}>
                                
                                <Image
                                    source={active === 2 ? StatementsActive : StatementsInactive}
                                    style={style.tabImage}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.navigationIconContainer}>
                        <View style={style.imageContainer}>
                            <TouchableOpacity onPress={()=>handleTab(3)}>
                                
                                <Image
                                    source={active === 3 ? HealthActive : HealthInactive}
                                    style={style.tabImage}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        
    );
    
}

export default Dashboard;