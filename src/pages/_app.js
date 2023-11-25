import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from '@/store/store';
import {useEffect} from "react";
import {addTodosFromLocalStorage} from "@/store/todo-slice";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const todosFromStorage = localStorage.getItem('todos');
        if (todosFromStorage) {
            store.dispatch(addTodosFromLocalStorage(JSON.parse(todosFromStorage)));
        }
    }, []);
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
