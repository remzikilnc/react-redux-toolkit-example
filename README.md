## Redux Toolkit Kullanımı İçin Örnek Repository
**Redux Toolkit** Redux uygulamalarını daha kolay ve düzenli bir şekilde geliştirmek için tasarlanmıştır. Bu kitaplık, **Redux** ile ilgili birçok boilerplate kodu azaltır ve uygulama geliştirirken karşılaşabileceğiniz yaygın senaryoları kolaylaştırır.

### Özellikler
#### createSlice
**createSlice** fonksiyonu, Redux state dilimlerini (slices) ve bu dilimlerle ilişkili reducer'ları tanımlamak için kullanılır. Her bir slice, uygulamanın state'indeki belirli bir bölümü temsil eder.

##### Örnek Kullanım:

```javascript
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Reducer fonksiyonları burada tanımlanır
  }
});
```
#### configureStore
**configureStore** fonksiyonu, Redux uygulamanızın store'unu oluşturmak ve yapılandırmak için kullanılır. Bu fonksiyon, Redux ile ilgili ayarları kolaylaştırır ve genellikle uygulamanın ana giriş noktasında (src/store/index.js) tanımlanır.

##### Örnek Kullanım:

```javascript
export const store = configureStore({
  reducer: {
     counter: counterReducer // Kullanılacak slice'lar burada eklenir.
  }
});
```
#### createAsyncThunk
**createAsyncThunk** fonksiyonu, API istekleri gibi asenkron işlemleri yönetmek için kullanılır. Bu fonksiyon sayesinde, Redux state'ine asenkron veri akışını kolayca entegre edebilirsiniz.

##### Örnek Kullanım:

```javascript
export const fetchTodos = createAsyncThunk('user/login', async () => {
   const response = await axios.get('___API_ENDPOINT__');
   return response.data;
});
```
### Diğer Redux Toolkit Özellikleri

#### Provider: 
Redux store'unu React uygulamasına bağlar. Genellikle uygulamanın en üst seviyesinde, App bileşenini sarmalayacak şekilde kullanılır.

#### useSelector:
Redux state'inden veri okumak için kullanılır.

#### useDispatch: 
Redux state'ine müdahale edebilmek için kullanılır.

## Kurulum ve Kullanım

Redux Toolkit ve gereken bağımlılıkları projenize eklemek için npm veya yarn gibi paket yöneticileri kullanabilirsiniz:

##### npm:
``` bash
npm install @reduxjs/toolkit react-redux
```

##### yarn:


``` bash
yarn add @reduxjs/toolkit react-redux
```
