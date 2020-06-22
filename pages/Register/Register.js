import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Input } from 'react-native-elements'
import Style from './Register.style'

const styles = StyleSheet.create(Style)

const Register = props => {
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
                        <Input 
                            placeholder='რიცხვი'
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                            containerStyle={styles.customInput}
                        />
                        <Input 
                            placeholder='თვე'
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                            containerStyle={styles.customInput}
                        />
                        <Input 
                            placeholder='წელი'
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                            containerStyle={styles.customInput}
                        />
                    </View>
                </View>
                
                <Input 
                    label='ქვეყანა'
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                />
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
            </View>
        </ScrollView>
    )
}

export default Register