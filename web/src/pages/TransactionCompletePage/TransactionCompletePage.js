import { navigate, routes } from '@redwoodjs/router'

const TransactionCompletePage = () => {
  return (
    <div className="mt-32 w-full">
      <div className="w-full text-center text-6xl text-green-600">
        <p className="mb-2">Thank you!</p>
        Your reciept will arrive at provided email.
      </div>
      <div className="w-full text-center">
        <button
          onClick={() => navigate(routes.home())}
          className="mt-12 h-24 w-72 rounded-lg border-2 bg-amber-200 py-1 px-2 text-3xl hover:bg-amber-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default TransactionCompletePage
