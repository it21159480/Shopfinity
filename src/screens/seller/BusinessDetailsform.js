
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Alert, ScrollView } from 'react-native';
import COLORS from '../../consts/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import UploadImageScreen from '../../components/Upload.js';

const BusinessDetailsform = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [shopName, setShopName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [branchName, setBranchName] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    shopName: '',
    contactNumber: '',
    emailAddress: '',
    businessAddress: '',
    branchName: '',
    certificate:'',
});

  const currentDate = new Date();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setFormattedDate(`${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`);
  };
  const validateForm = () => {
    const errors = {};

    if (!shopName.trim()) {
        errors.shopName = 'Shop name is required.';
    } else if (shopName.length < 3 || shopName.length > 30) {
        errors.shopName = 'Shop name should be between 3 and 50 characters.';
    }

    if (!contactNumber) {
        errors.contactNumber = 'Contact number is required.';
    } else if (!/^\d{10}$/.test(contactNumber)) {
        errors.contactNumber = 'Contact number should be a 10-digit number.';
    }

    if (!emailAddress) {
        errors.emailAddress = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailAddress)) {
        errors.emailAddress = 'Enter a valid email address.';
    }

    if (!businessAddress.trim()) {
        errors.businessAddress = 'Address is required.';
    }

    if (!branchName.trim()) {
        errors.branchName = 'Branch name is required.';
    }

    if(!certificate)
    {
        errors.certificate = 'Certificate must required. '
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
};


  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, you can perform your actions here
      // For example, navigate to the next screen
      navigation.navigate('CreateCredential');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={style.innercontainer}>
          <View style={style.headcontainer}>
            <Text style={style.heading}>Business Details Form</Text>
          </View>
          <View style={style.fieldContainer}>
            <Text style={style.inputLabel}>Business / Shop Name </Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter Business / Shop Name"
              value={shopName}
              onChangeText={(text) => setShopName(text)}
            />
            <Text style={style.errorText}>{errorMessages.shopName}</Text>
          </View>
          <View style={style.fieldContainer}>
            <Text style={style.inputLabel}>Contact number </Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter Contact number"
              value={contactNumber}
              onChangeText={(text) => setContactNumber(text)}
              keyboardType="phone-pad"
              maxLength={10}
            />
             <Text style={style.errorText}>{errorMessages.contactNumber}</Text>
          </View>
          <View style={style.fieldContainer}>
            <Text style={style.inputLabel}>Email Address </Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter valid email"
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
              keyboardType="email-address"
            />
            <Text style={style.errorText}>{errorMessages.emailAddress}</Text>
          </View>
          <View style={style.fieldContainer}>
            <Text style={style.inputLabel}>Business / Shop Address </Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter Business / Shop Address"
              value={businessAddress}
              onChangeText={(text) => setBusinessAddress(text)}
            />
             <Text style={style.errorText}>{errorMessages.businessAddress}</Text>
          </View>
          <View style={[style.fieldContainer, { flexDirection: 'row', justifyContent: 'space-evenly' }]}>
            <View>
              <Text style={style.inputLabel}>Branch </Text>
              <TextInput
                style={[style.inputBox, { width: 150 }]}
                placeholder="Branch Name"
                value={branchName}
                onChangeText={(text) => setBranchName(text)}
              />
               <Text style={style.errorText}>{errorMessages.branchName}</Text>
            </View>
            <View>
              <Text style={style.inputLabel}>Registration Date </Text>
              <View style={[style.inputBox, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <TextInput
                  placeholder="YY/MM/DD"
                  value={formattedDate}
                  editable={false}
                />
                <MaterialCommunityIcons name="calendar-month" size={30} color="black" onPress={() => setShow(true)} />
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
                maximumDate={currentDate}
              />
            )}
          </View>
          <View style={style.headcontainer}>
            <Text style={style.heading}>Upload Registration Certificate</Text>
          </View>
          <Text style={style.errorText}>{errorMessages.certificate}</Text>
          <UploadImageScreen onUpload={() => setCertificate(true)}/>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
              },
              style.btn,
              { alignSelf: 'center', marginTop: 50 },
            ]}
            onPress={handleSubmit}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headcontainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderLeftWidth: 4,
    borderColor: COLORS.primary,
    elevation: 20,
    shadowColor: COLORS.primary,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  innercontainer: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
  },

  inputBox: {
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    borderBottomWidth: 4,
    borderColor: COLORS.primary,
  },
  inputLabel: {
    fontSize: 18,
    padding: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  btn: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 15,
    elevation: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 5,
},
});

export default BusinessDetailsform;
