import { Product } from './components/Product/Product';
import './App.css'
import { useProducts } from './hooks/products';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal/Modal';
import { CreateProduct } from './components/Forms/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product:IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container">

      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}

      {products.map(product => <Product product={product} key={product.id} />)}
      {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button className="modal_btn" onClick={() => setModal(true)}>Add</button>

    </div>
  )
}

export default App;





/*
    e('div', {className: 'container'}, [
      e('h1', {className: 'font-bold', key: 1}, `test JSX ${count}`),
      e('button', {
        className: 'py-2 px-4 border',
        key: 2,
        onClick: () => setCount(count + 1)
        }, 'click')
    ] ) 
    */