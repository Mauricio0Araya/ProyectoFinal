import MyPurchases from '../components/MyPurchases.jsx'

const Purchases = () => {
    return (

    <>
    <div className="reg-title d-flex justify-content-center">
        <h3>Mis Compras Realizadas</h3>
    </div>
    <div className="d-flex justify-content-center flex-column align-items-center">
        <MyPurchases/>
    </div>
    </>
    )}
    
export default Purchases;