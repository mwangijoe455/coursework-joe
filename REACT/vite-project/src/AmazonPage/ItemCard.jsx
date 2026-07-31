function ItemCard() {
    const description = "a classic, high intensity tool that improves agility, burns calories and builds lower body strength";
    const amount = "ksh 2000";

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '300px', 
            border: '2px solid rgba(0,0,0,0.2)',
            padding: '2px 4px 2px 4px'
        }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img 
                    src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg" 
                    alt="product"
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ textAlign: 'left', fontSize: '10px', marginTop: '5px' }}>{description}</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '5px' }}>{amount}</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{ 
                    border: '2px solid rgba(0,0,0,0.2)', 
                    padding: '2px 4px', 
                    color: 'white', 
                    backgroundColor: 'orange',
                    cursor: 'pointer'
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ItemCard;