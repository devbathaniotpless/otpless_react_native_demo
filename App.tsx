/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, StyleSheet, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OtplessModule} from 'otpless-react-native';

function App(): React.JSX.Element {
  const module = new OtplessModule();
  const [token, setMyToken] = useState('');
  // Function to update the string value
  const updateString = (userToken: string) => {
    setMyToken(userToken);
  };
  const extra = {
    method: 'get',
    params: {
      cid: 'HRIRBIIKXMKEOTDDA8VV4HP2V24454X8', // Add your CID value provided from the dashboard
      crossButtonHidden: 'true',
    },
  };

  const openLoginPage = () => {
    module.showLoginPage(data => {
      let message: string = '';
      if (data.data === null || data.data === undefined) {
        message = data.errorMessage;
      } else {
        message = data.data.token;
        console.log(message);
        updateString(message);
        // todo here
      }
    }, extra);
  };

  useEffect(() => {
    openLoginPage();
    return () => {};
  }, []);
  return (
    <View style={styles.row}>
      <Text style={styles.tokentitleTextstyle}>Token : </Text>
      <Text style={styles.tokenTextStyle}>{token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tokentitleTextstyle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  tokenTextStyle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Align items vertically at the center
    height: '100%',
  },
});

export default App;
