import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';

const style = StyleSheet.create({
    profileImg: {
        width: 50,
        height:50,
        borderRadius:25,
        backgroundColor:'gray'
    }
});

const UserMsg = ({item}) => {
    return (
            <View style={{width:'100%', flexDirection:'row', padding: 10}}>
                <View style={style.profileImg} />
                {/* <View style={[style.profileImg, {backgroundColor: item.msg=='안녕하세요2'?'red':'blue'}]} /> */}
                
                <View style={{paddingHorizontal: 10}}>
                    <Text>{item.userName}</Text>

                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View style={{backgroundColor:'white', padding: 10, marginTop: 5, borderRadius: 5}}>
                            <Text>{item.msg}</Text>
                        </View>
                        <View style={{justifyContent:'flex-end', marginLeft: 5}}>
                            <Text stlye={{fontSize:11}}>{item.timeDate}</Text>
                        </View>
                    </View>
                    
                </View>
                
            </View>
    );
};

// lfex
// flexDirection row
// justifyContent flex-start | center | flex-end
// alignItems flex-start | center | flex-end

const ManagerMsg = ({timeDate, msg}) => {
    return (
            <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-end', padding: 10}}>                            
                
                <View style={{justifyContent:'flex-end', marginRight: 5}}>
                    <Text stlye={{fontSize:11}}>{timeDate}</Text>
                </View>

                <View style={{padding: 10, backgroundColor:'rgb(253,226, 11)', borderRadius: 5}}>
                    <Text>{msg}</Text>
                </View>
                
            </View>
    );
};


const testData = [
    {
        userName: '관리자',
        userType: 'm',
        timeDate: '오후 2:34',
        msg: '안녕하세요1',
    },
    {
        userName: '김진호',
        userType: 'u',
        timeDate: '오후 2:35',
        msg: '안녕하세요2',
    },
    {
        userName: '관리자',
        userType: 'm',
        timeDate: '오후 2:36',
        msg: '안녕하세요3',
    },
]

interface Props {};

const Home = ({}:Props) => {
    const [value, onChangeText] = React.useState('');

    const [msgList, setMsgList] = React.useState(testData);

    const addMsg = () => {
        //value;

        let msg = {
            userName: '김진호',
            userType: 'u',
            timeDate: '오후 2:34',
            msg: value
        }

        // setMsgList(msg)
    }

    return (
        <View style={{flex:1}}>
            {
                msgList.map(item => {
                    if(item.userType==='u') {
                        return <UserMsg item={item} />
                    } else {
                        return <ManagerMsg timeDate={item.timeDate} msg={item.msg} />
                    }
                    
                })
            }
            
            <SafeAreaView style={{position:'absolute', bottom:0, width:'100%'}}>
                <TextInput
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, paddingTop: 5 }}
                    onChangeText={text => onChangeText(text)}
                    onEndEditing = {addMsg}
                    value={value}
                    placeholder="placeholder"
                />
            </SafeAreaView>

        </View>
    )
};

export default Home;