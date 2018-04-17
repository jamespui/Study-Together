Notification.requestPermission((p) => {
    if (p === 'granted') {
        //const n1 = new Notification('Notification Allowed');

        const title = 'JavaScript';
        const options = {
            icon: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png',
            body: 'This is notificaion'
        };
        const n2 = new Notification(title,options);
    }
});