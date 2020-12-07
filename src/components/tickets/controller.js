const Tickets = require('./model')
const ticketsController = {}

ticketsController.getTickets = async (req, res, next) => {
  try {
    const tickets = await Tickets.find()
    res.send(tickets)
  } catch (error) {
    next(error)
  }
}

ticketsController.getOneTicket = async (req, res, next) => {
  try {
    const ticket = await Tickets.findById(req.params.id)
    res.send(ticket)
  } catch (error) {
    next(error)
  }
}

ticketsController.getStorieTicket = async (req, res, next) => {
  try {
    const ticket = await Tickets.find(req.params)
    res.send(ticket)
  } catch (error) {
    next(error)
  }
}

ticketsController.postTicket = async (req, res, next) => {
  try {
    const ticket = new Tickets({
        comment: req.body.comment,
        status: req.body.status,
        storie: req.body.storie,
        user: req.body.user,     
    })
    await ticket.save()
    res.send(ticket)
  } catch (error) {
    next(error)
  }
}

ticketsController.updateTicket = async (req, res, next) => {
  try {
        const ticket = {
        comment: req.body.comment,
        status: req.body.status,
        storie: req.body.storie,
        user: req.body.user, 
    }
    await Tickets.findByIdAndUpdate(
      req.params.id,
      { $set: ticket },
      { omitUndefined: true, upsert: true }
    )   
    res.send(ticket)
  } catch (error) {
    next(error)
  }
}

ticketsController.deleteTicket = async (req, res, next) => {
  try {
    await Tickets.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      message: `Ticket ${req.params.id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

ticketsController.getTicketById = async (req, res, next) => {
  try {
    const ticket = await Tickets.findById(req.ticketId)
    res.send(ticket)
  } catch (error) {
    next(error)
  }
}

module.exports = ticketsController
