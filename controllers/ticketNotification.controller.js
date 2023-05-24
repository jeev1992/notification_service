const ticketNotificationModel = require('../models/ticketNotification.model')

exports.acceptNotificationRequest = async (req, res) => {
    const notificationObject = {
        ticketId: req.body.ticketId,
        subject: req.body.subject,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
        requester: req.body.requester
    }

    try{
        const notification = await ticketNotificationModel.create(notificationObject)

        if(notification){
            return res.status(201).send({
                requestId: notification._id,
                message: "Request has been accepted. Check status later by using the provided requestId"
            })
        }
    }catch(err){
        return res.status(500).send({
            message: "Some internal server error occured"
        })
    }
}

exports.getNotification = (req, res) => {

}