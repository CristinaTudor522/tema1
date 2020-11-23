function removeOrderItem (orderInfo, position) {
    if (orderInfo != null) {
        //daca items este de tip vector
        if (Array.isArray(orderInfo.items)) {
            //verific daca fiecare obiect are atat propritatea price cat si quantity, in cazul in care nu 
            for (let i=0; i< orderInfo.items.length ; i++) {
                if (!orderInfo.items[i].hasOwnProperty('price') 
                        || !orderInfo.items[i].hasOwnProperty('quantity')) {
                    //afisez un mesaj corespunzator
                    throw 'Malformed item';
                }
            }
            //verific daca pozitia este in legatura cu vectorul de itemi
            if (position >= 0 && position < orderInfo.items.length) {
                orderInfo.total = orderInfo.total 
                        - orderInfo.items[position].price * orderInfo.items[position].quantity;
                
                orderInfo.items.splice(position, 1);

            } else {
                //in caz contrar arunc un mesaj corespunzator
                throw 'Invalid position'
            }

        } else {
            //daca items nu este vector, arunc o eroare care imi evidentiaza acest lucru
            throw 'Items should be an array';
        }
    }
    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;
