const cron = require('node-cron')

cron.schedule('*/30 * * * * *', async () => {
    //console.log("I am background job")

    //Query all the notification documents whose status is NOT_SENT

    //Loop over the query result and send out email using the transport object
    //Mark the status of notification as senr
})