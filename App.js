import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
import { Container, Header, Content,  
  Title, Subtitle, Left, Body, Right, 
  Input, CheckBox, Button, Text, ListItem } from 'native-base'

export default class App extends Component{
  
  constructor(){
    super()

    this.state = {
      input1: '',
      input2: '',
      input3: '',
      result: '',
      item1: false,
      item2: false,
      item3: false
    }
    
  }

  handleItem(value){
    if(value == 'item1'){
      this.setState({ item1: !this.state.item1 })
    }else if(value == 'item2'){
      this.setState({ item2: !this.state.item2 })
    }else {
      this.setState({ item3: !this.state.item3 })
    }
  }

  handleOpr(value){
    let input1 = this.state.input1
    let input2 = this.state.input2
    let input3 = this.state.input3
    let item1 = this.state.item1
    let item2 = this.state.item2
    let item3 = this.state.item3
    let calculate, array, res
    
    if(item1 == true && item2 == true && item3 == true) {
      calculate = input1 + value + input2 + value + input3
      array = calculate.split(" ");
      res = eval(array[0], array[1], array[2], array[3], array[5])
    }else if((item1 == true && item2 == true)) {
      calculate = input1 + value + input2
      array = calculate.split(" ");
      res = eval(array[0], array[1], array[2])
    }else if((item1 == true && item3 == true)) {
      calculate = input1 + value + input3
      array = calculate.split(" ");
      res = eval(array[0], array[1], array[2])
    }else if((item2 == true && item3 == true)) {
      calculate = input2 + value + input3
      array = calculate.split(" ");
      res = eval(array[0], array[1], array[2])
    }else if(item1 == false && item2 == false && item3 == false){
      res = 'Checklist minimal 2 checkbox to calculate'
    }  
    else{
      res = 'Checklist minimal 2 checkbox to calculate'
      alert('error')
    }
    this.setState({
      result: res
    })

  }

  render(){
    return(
      <Container>
        <Header>
          <Left style={{flex: 1}}/>
          <Body style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Title>React Native Calculator</Title>
            <Subtitle>Test Frontend for NusanTech</Subtitle>
          </Body>
          <Right style={{flex: 1}}/>
        </Header>

        <Content>
          <ListItem style={{borderBottomWidth: 0}}>
            <Left style={{flex: 0}}/>
            <Body style={{flex: 9}}>
              <Input value={this.state.input1.toString()} 
              onChangeText={(input1) => this.setState({input1})} 
              style={Styles.input}
              keyboardType = 'numeric'
              editable={this.state.item1 == true ? true : false}
              placeholder='0'/>
            </Body>
            <Right style={{flex: 1}}>
              <CheckBox color="black" checked={this.state.item1} onPress={() => this.handleItem('item1')}/>
            </Right>
          </ListItem>

          <ListItem style={{borderBottomWidth: 0}}>
            <Left style={{flex: 0}}/>
            <Body style={{flex: 9}}>
              <Input value={this.state.input2.toString()} 
              onChangeText={(input2) => this.setState({input2})} 
              style={Styles.input}
              keyboardType = 'numeric'
              editable= {this.state.item2 == true ? true : false}
              placeholder='0'/>
            </Body>
            <Right style={{flex: 1}}>
              <CheckBox color="black" checked={this.state.item2} onPress={() => this.handleItem('item2')}/>
            </Right>
          </ListItem>

          <ListItem style={{borderBottomWidth: 0}}>
            <Left style={{flex: 0}}/>
            <Body style={{flex: 9}}>
              <Input value={this.state.input3.toString()} 
              onChangeText={(input3) => this.setState({input3})} 
              style={Styles.input}
              keyboardType = 'numeric'
              editable= {this.state.item3 == true ? true : false}
              placeholder='0'/>
            </Body>
            <Right style={{flex: 1}}>
              <CheckBox color="black" checked={this.state.item3} onPress={() => this.handleItem('item3')}/>
            </Right>
          </ListItem>

          <View style={Styles.row}>
            <Button style={Styles.opr} onPress={() => this.handleOpr("+")}>
              <Text>+</Text>
            </Button>
            <Button style={Styles.opr} onPress={() => this.handleOpr("-")}>
              <Text>-</Text>
            </Button>
            <Button style={Styles.opr} onPress={() => this.handleOpr("*")}>
              <Text>*</Text>
            </Button>
            <Button style={Styles.opr} onPress={() => this.handleOpr("/")}>
              <Text>/</Text>
            </Button>
          </View>

          <View style={Styles.row}>
            <Text>Hasil : {this.state.result}</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const Styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#000'
  }, 
  opr: {
    marginRight: 10,
    flex: 3,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})