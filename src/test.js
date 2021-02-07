import firebase from 'firbase/app';
import 'firbase/firestore';



const firestore = firebase.firestore();

firestore.collection('users').doc('26V9ZIkltOoACH7TZxop').collection('cartItems').doc('tLMF4WsOgbx5BMx8oIwl');

firestore.doc('/users/26V9ZIkltOoACH7TZxop/cartItems/tLMF4WsOgbx5BMx8oIwl')

firestore.collection('users/26V9ZIkltOoACH7TZxop/cartItems')
