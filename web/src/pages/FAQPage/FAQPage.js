import { FAQIcon } from 'src/components/Icons/Icons'

const FAQBox = ({ question, answer }) => {
  return (
    <div className="mx-auto w-64 rounded-lg border-2 p-2 text-left">
      <p className="text-sm font-semibold">{question}?</p>
      <p className="text-sm">{answer}</p>
    </div>
  )
}

const FaqPage = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <FAQIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">FAQ</p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <FAQBox question={'Question'} answer={'Answer'} />
          <FAQBox question={'Question'} answer={'Answer'} />
          <FAQBox question={'Question'} answer={'Answer'} />
          <FAQBox question={'Question'} answer={'Answer'} />
          <FAQBox question={'Question'} answer={'Answer'} />
          <FAQBox question={'Question'} answer={'Answer'} />
        </div>
      </div>
    </div>
  )
}

export default FaqPage
