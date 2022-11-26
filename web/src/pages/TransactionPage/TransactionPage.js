import { navigate, routes } from '@redwoodjs/router'

const TransactionPage = ({ name, price }) => {
  return (
    <div className="py-10 px-64">
      <h1 className="w-full text-center text-4xl font-bold">
        Transaction for {name} package: ${price}
      </h1>
      <div className="my-4 grid grid-cols-10 gap-2 rounded-lg border-2 py-2 px-4">
        <div className="col-span-10 text-lg font-bold">Package Details</div>
        <div className="col-span-2">Start date:</div>
        <input className="rouned-lg col-span-8 border p-1" type={'date'} />
        <div className="col-span-10 text-lg font-bold">
          Personal information
        </div>
        <div className="col-span-2">First name:</div>
        <input className="rouned-lg col-span-8 border p-1" />
        <div className="col-span-2">Last name:</div>
        <input className="rouned-lg col-span-8 border p-1" />
        <div className="col-span-2">E-mail:</div>
        <input className="rouned-lg col-span-8 border p-1" />

        <div className="col-span-10 text-lg font-bold">Card Details</div>
        <div className="col-span-2">Card number:</div>
        <input
          className="rouned-lg col-span-8 border p-1"
          placeholder="XXXX-XXXX-XXXX-XXXX"
        />
        <div className="col-span-2">Name on card:</div>
        <input className="rouned-lg col-span-8 border p-1" />
        <div className="col-span-2">CVV:</div>
        <input
          className="rouned-lg col-span-8 border p-1"
          placeholder="XXX or XXXX"
        />
        <div className="col-span-2">Expiry date:</div>
        <input
          className="rouned-lg col-span-8 border p-1"
          placeholder="MM/YY"
        />
        <div className="col-span-10">
          <button
            onClick={() => navigate(routes.transactionComplete())}
            className="mr-2 rounded-lg border-2 bg-amber-200 py-1 px-2 hover:bg-amber-300"
          >
            Submit
          </button>
          <button
            onClick={() => navigate(routes.packages())}
            className="rounded-lg border-2 bg-amber-50 py-1 px-2 hover:bg-amber-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionPage
