let tickets = global.tickets || [];
global.tickets = tickets;

export default function handler(req, res) {
  res.status(200).json(global.tickets);
}
