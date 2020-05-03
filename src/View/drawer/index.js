import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



//sitios

function Site1Screen() {
      return (
        
        <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                    <Text style={{ fontSize: 50, color: "black", textAlign: "center",  paddingBottom: 10, paddingTop:10, margin:10  }}>Joya de Cerén</Text>
                    <Image style={{ width: 350, height: 400, padding: 8 }} source={require('../drawer/images/jdceren.png')} />
                    <Text style={{ fontSize: 20, backgroundColor: '#d6eaf8', color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                        "Descubierto en 1976, este tesoro arqueológico fue declarado Patrimonio de la Humanidad en 1993 por la UNESCO. Joya de Cerén es el único espacio en el país donde se conservan evidencias de la vida cotidiana de los pueblos mayas que residieron en la zona hace más de 1600 años. Esta ciudad fue cubierta por las cenizas producidas en una erupción del volcán de Ilopango en el siglo VII d.C. Lo sorprendente es que los arqueólogos expertos aseguran que los aldeanos lograron huir a tiempo ya que no se han encontrado restos de cuerpos humanos."
                    </Text>
                </View>
        </ScrollView>
        
    );
}
//fin de site 1
//site2

function Site2Screen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center",  paddingBottom: 10, marginTop:10   }}>Sitio arqueológico Casa Blanca</Text>
                <Image style={{ width: 800, height: 400 }} source={require('../drawer/images/casa.png')} />
                <Text style={{ fontSize: 20, color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                    "Si eres aficionado a la historia, éste es de los lugares para visitar en El Salvador que te dejarán con la boca abierta por los monumentos históricos nacionales que posee. Su antigüedad se remonta a más de cinco mil años, ya que sus estructuras piramidales narran una historia ancestral de los períodos preclásico, clásico y posclásico."
          </Text>
            </View>
        </ScrollView>
    );
}
//fin site2

//site3
function Site3Screen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center",  paddingBottom: 10, marginTop:10   }}>Antigua Escuela de Artes Santa Ana</Text>
                <Image style={{ width: 350, height: 400 }} source={require('../drawer/images/numtres.png')} />
                <Text style={{ fontSize: 20, color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                    "Este tesoro arquitectónico te muestra la magia que se puede encontrar en las ruinas de los sitios arqueológicos de El Salvador. Fue un espacio donde se impartían todo tipo de conocimientos artísticos en los grandes salones. Con el paso del tiempo, se deterioró por lo que ahora está en desuso."
          </Text>
            </View>
        </ScrollView>
    );
}
//fin de site3
//site4
function Site4Screen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center",  paddingBottom: 10, marginTop:10   }}>Museo Nacional de Antropología</Text>
                <Image style={{ width: 350, height: 400 }} source={require('../drawer/images/numcuatro.png')} />
                <Text style={{ fontSize: 20, color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                    "Simbolizando la identidad nacional, este lugar es uno de los museos más famosos en la ciudad de San Salvador debido a su diversidad de exposiciones. Seguramente te preguntas porque un museo figura como uno de los sitios arqueológicos de El Salvador. Resulta ser que aquí se encuentran muchos monumentos y esculturas históricas. Podés aprender de los pueblos mesoamericanos, luego apreciar varias obras plásticas y, al final de la tarde, podés disfrutar un café con tus amigos y seres queridos dentro de las mismas instalaciones."
          </Text>
            </View>
        </ScrollView>
    );
}
//fin de site4
//site5
function Site5Screen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center",  paddingBottom: 10, marginTop:10  }}>San Andrés</Text>
                <Image style={{ width: 350, height: 400 }} source={require('../drawer/images/numcinco.png')} />
                <Text style={{ fontSize: 20, color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                    "La aventura hacia el pasado la experimentás en este lugar al contemplar, entre muchas otras cosas, un cetro religioso de pedernal, uno de los descubrimientos más significativos a nivel arqueológico. En esta antigua ciudad maya, residían todo tipo de personas, como sacerdotes, gobernantes, comerciantes y artesanos. Ahí podés apreciar bastantes plazas con formas de pirámides y algunas casas. Este sitio era centro tanto ceremonial como regional. Es uno de los lugares más importantes de El Salvador por la historia prehispánica que posee."
          </Text>
            </View>
        </ScrollView>
    );
}
//fin de site5
//site6
function Site6Screen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#d6eaf8', alignItems: 'center', justifyContent: "flex-start", marginTop: 0 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center", borderRadius: 10, paddingBottom: 10, marginTop:10 }}>Finca San Antonio</Text>
                <Image style={{ width: 400, height: 250 }} source={require('../drawer/images/numseis.png')} />
                <Text style={{ fontSize: 20, color: "black", textAlign: "justify", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                "Este patrimonio familiar contiene una riqueza cultural e histórica muy fuerte, ya que ahí se encuentran seis montículos arqueológicos. Si deseas aprender sobre la civilización maya a través de actividades recreativas, en esta finca hay talleres de artesanía donde puedes aprender este oficio. Este sitio turístico te ofrece no sólo historia antigua, sino que es de esos lugares en El Salvador donde podés pasear una y otra vez y vivir una experiencia amena para que tu aventura sea inigualable."
          </Text>
            </View>
        </ScrollView>
    );
}
//fin de site6
//acerca de
function AcercaScreen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 50, color: "black", textAlign: "center",  }}>Acerca de</Text>
                
                <Text style={{ fontSize: 20, color: "black", textAlign: "center", marginRight: 8, marginLeft: 8, marginTop: 9, padding: 9 }}>
                Creador de la App</Text>
                 <Text>Nombre: Eduar Rugamas</Text>
                <Text>Edad: 20 años</Text>
                <Text>Carrera: Tec. Desarrollo de Aplicaciones Moviles</Text>
                <Text>Universidad Don Bosco</Text>
            </View>
        </ScrollView>
    );
}

function HomeScreen(props) {
    return (
        
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: -100, backgroundColor:'#d6eaf8'}}>
                <Text style={{fontSize:25}}>Sitios turísticos</Text>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('Joya de ceren')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Joya de ceren</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('S. Arq Casa Blanca')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>S. Arq Casa Blanca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('Artes de Santa Ana')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Artes de Santa Ana</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('M. de Antropología')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>M. de Antropología</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('San Andrés')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>San Andrés</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('Finca San Antonio')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Finca San Antonio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 10 }}
                    onPress={() => props.navigation.navigate('Acerca de')} >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Acerca de</Text>
                </TouchableOpacity>
            </View>
   
    );
}



const Stack = createStackNavigator();

function Mydrawer() {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={HomeScreen} options={{ title: 'Menu', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="Joya de ceren" component={Site1Screen} options={{ title: 'Joya de Ceren', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="S. Arq Casa Blanca" component={Site2Screen} options={{ title: 'Sitio Arq. Casa Blanca', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="Artes de Santa Ana" component={Site3Screen} options={{ title: 'Artes de Santa Ana', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="M. de Antropología" component={Site4Screen} options={{ title: 'Museo de Antropologia', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="San Andrés" component={Site5Screen} options={{ title: 'San Andres', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="Finca San Antonio" component={Site6Screen} options={{ title: 'Finca San Antonio', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
                <Stack.Screen name="Acerca de" component={AcercaScreen} options={{ title: 'Acerca de', headerStyle: { backgroundColor: '#34495e', }, headerTintColor: '#fff', }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Mydrawer;