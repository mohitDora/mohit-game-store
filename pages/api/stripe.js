import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51LE8xUSI6iZUdFLaBZ8xldvBurGXtmIOS0JOk0LW9lR84TxFrbovzaevSiOFmeuIIYJ5ebJd5nKSUCtH2swH2DuT00VmHInrHJ');
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        submit_type:'pay',
        billing_address_collection:'auto',
        line_items: req.body.map((item) =>{
        
          return {
                  price_data: { 
                    currency: 'inr',
                    product_data: { 
                      name: item.name,
                      images:[item.image[0]]
                    },
                    unit_amount: item.price * 100,
                  },
                  
                  quantity: 1
                }
              }),
        mode: 'payment',
        success_url: `${req.headers.origin}/Success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      );
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}