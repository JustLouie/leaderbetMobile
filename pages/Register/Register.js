import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Picker } from 'react-native'
import { Text, Input, CheckBox, Button } from 'react-native-elements'
import Style from './Register.style'

const styles = StyleSheet.create(Style)

const Register = props => {

    const [ day, setDay ] = useState('')
    const [ month, setMonth ] = useState('')
    const [ year, setYear ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ terms, setTerms ] = useState(false)

    return (
        <ScrollView style={styles.wrapper}>
            <Text style={styles.title} h4>რეგისტრაცია</Text>
            <Text style={styles.registerWarning}>
                სავალდებულოა ყველა ველი შეივსოს კორექტულად მხოლოდ ლათინური ასოებით და ციფრებით.
            </Text>
            <Text style={styles.attention}>
                <Text style={styles.bold}>ყურადღება:</Text> რეგისტრაციისას მითითებული პირადი მონაცემების უზუსტობის შემთხვევაში, კომპანია იტოვებს უფლებას შეგიზღუდოთ საიტით სარგებლობა!
            </Text>
            <View style={styles.registerForm}>
                <Input 
                    label='მომხმარებელის სახელი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <Input 
                    label='პაროლი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    secureTextEntry={true}
                />
                <Input 
                    label='გაიმეორეთ პაროლი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    secureTextEntry={true}
                />
                <View style={styles.labelWithInput}>
                    <Text style={{ ...styles.label, ...styles.customLabel }}>დაბადების თარიღი</Text>
                    <View style={styles.inputWrapper}>
                        <Picker
                            style={{ ...styles.input, ...styles.customInput, ...styles.select }}
                            selectedValue={day}
                            onValueChange={(value) => setDay(value)}
                        >
                            <Picker.Item label='რიცხვი' value='' />
                            <Picker.Item label='01' value='01' />
                            <Picker.Item label='02' value='02' />
                            <Picker.Item label='03' value='03' />
                        </Picker>
                        <Picker
                            style={{ ...styles.input, ...styles.customInput, ...styles.select }}
                            selectedValue={month}
                            onValueChange={(value) => setMonth(value)}
                        >
                            <Picker.Item label='თვე' value='' />
                            <Picker.Item label='01' value='01' />
                            <Picker.Item label='02' value='02' />
                            <Picker.Item label='03' value='03' />
                        </Picker>
                        <Picker
                            style={{ ...styles.input, ...styles.select, ...styles.smallSelect, }}
                            selectedValue={year}
                            onValueChange={(value) => setYear(value)}
                        >
                            <Picker.Item label='წელი' value='' />
                            <Picker.Item label='01' value='01' />
                            <Picker.Item label='02' value='02' />
                            <Picker.Item label='03' value='03' />
                        </Picker>
                    </View>
                </View>

                <View style={styles.labelWithInput}>
                    <Text style={{ ...styles.label, ...styles.customLabel }}>ქვეყანა</Text>
                    <View style={styles.inputWrapper}>
                        <Picker
                            style={{ ...styles.input, ...styles.select, ...styles.bigSelect }}
                            selectedValue={country}
                            onValueChange={(value) => setCountry(value)}
                        >
                            <Picker.Item label='Georgia(საქართველო)' value='ge' />
                            <Picker.Item label='Russia (Россия)' value='ru' />
                            <Picker.Item label='Azerbaijan (Azərbaycan)' value='az' />
                            <Picker.Item label='Turkey (Türkiye)' value='tr' />
                        </Picker>
                    </View>
                </View>
                
                <Input 
                    label='სახელი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <Input 
                    label='გვარი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <Input 
                    label='ელ-ფოსტა'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <Input 
                    label='პირადი ნომერი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <Input 
                    label='ტელეფონი'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
                <View style={styles.labelWithCheckbox}>
                    <CheckBox
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        checked={terms}
                        onPress={() => setTerms(!terms)}
                        title='მე შემისრულდა 18 წელი, ვეთახმები ონლაინ ტოტალიზატორ LEADER-BET.COM -ის წესებს და პირობებს'
                    />
                </View>
                <Button title="რეგისტრაცია" buttonStyle={styles.registerButton} titleStyle={styles.registerTitle} />
            </View>
        </ScrollView>
    )
}

export default Register